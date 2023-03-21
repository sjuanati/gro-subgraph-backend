import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { SqlCommand } from '../types';
import { showError } from './logHandler';
import { QUERY_ERROR } from '../constants';
config();

const dbConnection = {
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT as number | undefined,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_INSTANCE as string,
}

if (!dbConnection.host) {
    showError('handler/queryHandler.ts', 'db settings in .env not found');
}

const pool = new pg.Pool(dbConnection);

const ERROR = {
    status: 400,
};
const NO_DATA = {
    status: 204,
}

export const query = async (
    file: string,
    params: any[],
 ): Promise<any> => {
    try {
        let option = file.split('_')[0].toLowerCase();
        const isValidOption = Object.values(SqlCommand).includes(option as SqlCommand);
        if (!isValidOption) {
            return ERROR;
        }
        const q = fs.readFileSync(path.join(__dirname, `/../queries/${option}/${file}`), 'utf8');
        const result = await singleQuery(q, file, params);
        return (result === QUERY_ERROR || !dbConnection.host) ? ERROR : result;
    } catch (err) {
        showError('handler/queryHandler.ts->query()', err);
        return ERROR;
    }
}

// @dev: PostgreSQL is auto committing/rolling back, so adding commit after the query will generate
//       "postgres@postgres:[7435]:WARNING: there is no transaction in progress" issue
const singleQuery = async (
    q: string,
    file: string,
    params: any[],
): Promise<any> => {
    try {
        const client = await pool.connect();
        try {
            const result: any = await client.query(q, params);
            if (result) {
                result.status = 200;
                return result;
            } else {
                return NO_DATA;
            }
        } catch (err) {
            showError(
                'handler/queryHandler.ts->singleQuery()',
                `\n Message: ${err} \n Query: ${file} \n Params: ${params}`
            );
            return ERROR;
        } finally {
            client.release();
        }
    } catch (err) {
        showError('handler/queryHandler.ts->singleQuery()', err);
        return ERROR;
    }
}

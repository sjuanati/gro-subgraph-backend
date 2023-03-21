import { Env } from '../types';
import schedule from 'node-schedule';
import { etlHistoricalApy } from '../etl/etlHistoricalApy';
import {
    showInfo,
    showError,
} from '../handler/logHandler';

const apyJobSetup = '*/30 * * * *'; // mins
// const apyJobSetup = '*/15 * * * * *'; // secs [for testing]


const historicalApyJob = async (): Promise<void> => {
    showInfo('Historical APY job scheduled');
    schedule.scheduleJob(apyJobSetup, async () => {
        try {
            showInfo('Historical APY job started');
            await etlHistoricalApy();
            showInfo('Historical APY job finished');
        } catch (err) {
            showError('scheduler/scheduler.ts->historicalApyJob()', err);
        }
    });
}

// @dev: store historical APY only if running in PROD environment (to avoid duplicating data in dev mode)
export const startJobs = async (): Promise<void> => {
    if (process.env.NODE_ENV === Env.PROD) {
        historicalApyJob();
    }
}

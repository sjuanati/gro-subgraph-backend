import moment from 'moment';
import { bnToDecimal } from '../utils/utils';
import { BigNumber as BN } from 'bignumber.js';
import { showError } from '../handler/logHandler';
import { IAirdrop } from '../interfaces/personalStats/IAirdrop';
import { IVestingAirdrop } from '../interfaces/personalStats/IVestingAirdrop';
import {
    getAirdropProofs,
    getVestingAirdropProofs,
} from '../etl/etlAirdrops';


/// @notice Retrieves a list of airdrop proofs for the given user address
/// @dev Iterates through airdrops, finds user in proofs, and compiles airdrop data for the user
/// @dev <participated> assumes being in the airdrop list even if no claim
/// @param userAddress The Ethereum address of the user to get airdrop proofs for
/// @return An array of airdrop data for the given user address
export const getAirdropProofsUser = (userAddress: string): IAirdrop[] => {
    try {
        let result: IAirdrop[] = [];
        const airdrops = getAirdropProofs();
        for (let i = 0; i < airdrops.length; i++) {
            // search user in proofs in case-insensitively 
            const proofs = airdrops[i].proofs;
            const user = proofs[Object.keys(proofs).find(key => key.toLowerCase() === userAddress)!];
            const expired = moment().utc().isAfter(moment.unix(parseInt(airdrops[i].expiry_ts)).utc())
                ? true
                : false;
            const amount = user
                ? bnToDecimal(BN(user.amount), 18, 2).toString()
                : '0';
            const airdrop: IAirdrop = {
                'amount': amount,
                'amount_to_claim': user ? user.amount : '0',
                'claimable': airdrops[i].claimable,
                'claimed': 'false',
                'display_name': airdrops[i].display_name,
                'expired': expired ? 'true' : 'false',
                'expiry_ts': airdrops[i].expiry_ts,
                'hash': '',
                'launch_ts': airdrops[i].timestamp,
                'merkle_root_index': airdrops[i].merkleIndex,
                'name': airdrops[i].name,
                'participated': user ? 'true' : 'false', 
                'proofs': user ? user.proof : [],
                'token': airdrops[i].token,
            }
            result.push(airdrop);
        }
        return result;
    } catch (err) {
        showError(
            'handler/airdropHandler.ts->getAirdropProofsUser()',
            `${err} for user ${userAddress} -> Airdrops section excluded.`,
        );
        return [];
    }
}

/// @notice Retrieves vesting airdrop proofs for the given user address
/// @dev Iterates through vesting airdrops, finds user in proofs, and compiles vesting airdrop data for the user
/// @param userAddress The Ethereum address of the user to get vesting airdrop proofs for
/// @return A vesting airdrop data object for the given user address
export const getVestingAirdropProofsUser = (userAddress: string): IVestingAirdrop => {
    const proofs = getVestingAirdropProofs();
    for (let i = 0; i < proofs.airdrops.length; i++) {
        const user = proofs.airdrops[i];
        if (user.address.toLowerCase() === userAddress) {
            return {
                'name': proofs.name,
                'amount': user.amount,
                'claim_initialized': '',    // based on GMerkleVestor event LogInitialClaim
                'claimed_amount': '',       // based on GMerkleVestor events LogInitialClaim & LogClaim
                'claimable_amount': '',     // based on GMerkleVestor events LogInitialClaim, LogClaim & timestamps
                'proofs': user.proofs,
                'token': proofs.token,
            }
        }
    }
    return {
        'name': proofs.name,
        'amount': '0',
        'claim_initialized': 'false',
        'claimed_amount': '0',
        'claimable_amount': '0',
        'proofs': [],
        'token': proofs.token,
    }
}
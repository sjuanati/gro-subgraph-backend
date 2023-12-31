import { toStr } from '../../utils/utils';
import { getAirdrops } from '../../utils/airdrop';
import { IVestingAirdropProof } from '../../interfaces/personalStats/IVestingAirdropProof';
import {
    IPersonalStatsEthereum,
    IPersonalStatsAvalanche,
} from '../../interfaces/personalStats/IPersonalStats';
import {
    Status,
    NetworkId,
    NetworkName,
} from '../../types';
import {
    NA,
    LAUNCH_TIMESTAMP_ETH,
    LAUNCH_TIMESTAMP_AVAX,
} from '../../constants';


/// @notice Creates an empty user object for the Ethereum network with default values
/// @param currentTimestamp The current timestamp as a string
/// @param address The user's Ethereum address as a string
/// @param status A status value to indicate the state of the user data
/// @return An IPersonalStatsEthereum object with default values and properties
export const emptyEthUser = (
    currentTimestamp: string,
    address: string,
    status: Status
): IPersonalStatsEthereum => {
    const value = (status === Status.OK) ? toStr(0) : NA;
    const result: IPersonalStatsEthereum = {
        'status': status,
        'network_id': NetworkId.MAINNET,
        'network': NetworkName.MAINNET,
        'launch_timestamp': LAUNCH_TIMESTAMP_ETH,
        'current_timestamp': currentTimestamp,
        'address': address,
        'prices': {
            'gvt': 0,
            'gro': 0,
            'balancer_gro_weth': 0,
            'uniswap_gvt_gro': 0,
            'uniswap_gro_usdc': 0,
            'curve_pwrd3crv': 0,
        },
        'airdrops': getAirdrops(
            address,
            [],
        ),
        'transaction': {
            'deposits': [],
            'withdrawals': [],
            'transfers_in': [],
            'transfers_out': [],
            'approvals': [],
            'staker_deposits': [],
            'staker_withdrawals': [],
            'failures': []
        },
        'amount_added': {
            'pwrd': value,
            'gvt': value,
            'total': value
        },
        'amount_removed': {
            'pwrd': value,
            'gvt': value,
            'total': value
        },
        'net_amount_added': {
            'pwrd': value,
            'gvt': value,
            'total': value
        },
        'current_balance': {
            'pwrd': value,
            'gvt': value,
            'total': value
        },
        'net_returns': {
            'pwrd': value,
            'gvt': value,
            'total': value
        },
        'vest_bonus': {
            'locked_gro': NA,
            'net_reward': NA,
            'rewards': {
                'claim_now': NA,
                'vest_all': NA
            }
        },
        'pools': {
            'all': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            },
            'single_staking_100_gro_0': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            },
            'uniswap_v2_5050_gro_gvt_1': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            },
            'uniswap_v2_5050_gro_usdc_2': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            },
            'single_staking_100_gvt_3': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            },
            'curve_meta_pwrd_3crv_4': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            },
            'balancer_v2_8020_gro_weth_5': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            },
            'single_staking_100_pwrd_6': {
                'net_reward': NA,
                'balance': NA,
                'coinBalance': NA,
                'rewards': {
                    'claim_now': NA,
                    'vest_all': NA
                }
            }
        },
        'gro_balance_combined': NA,
        'gro_balance_combined_detail': {
            'unstaked/pool0': NA,
            'pool1': NA,
            'pool2': NA,
            'pool5': NA,
            'vesting': NA,
            'team': NA,
        },
        'vesting_airdrop': EMPTY_VESTING_AIRDROP,
    }
    return result;
};

/// @notice Creates an empty user object for the Avalanche network with default values
/// @param status A status value to indicate the state of the user data
/// @return An IPersonalStatsAvalanche object with default values and properties
export const emptyAvaxUser = (
    status: Status
): IPersonalStatsAvalanche => {
    const value = (status === Status.OK) ? toStr(0) : NA;
    return {
        'status': status,
        'network_id': NetworkId.AVALANCHE,
        'launch_timestamp': LAUNCH_TIMESTAMP_AVAX,
        'amount_added': {
            'groDAI.e_vault': value,
            'groUSDC.e_vault': value,
            'groUSDT.e_vault': value,
            'groDAI.e_vault_v1_7': value,
            'groUSDC.e_vault_v1_7': value,
            'groUSDT.e_vault_v1_7': value,
            'total': value
        },
        'amount_removed': {
            'groDAI.e_vault': value,
            'groUSDC.e_vault': value,
            'groUSDT.e_vault': value,
            'groDAI.e_vault_v1_7': value,
            'groUSDC.e_vault_v1_7': value,
            'groUSDT.e_vault_v1_7': value,
            'total': value
        },
        'net_amount_added': {
            'groDAI.e_vault': value,
            'groUSDC.e_vault': value,
            'groUSDT.e_vault': value,
            'groDAI.e_vault_v1_7': value,
            'groUSDC.e_vault_v1_7': value,
            'groUSDT.e_vault_v1_7': value,
            'total': value
        },
        'current_balance': {
            'groDAI.e_vault': value,
            'groUSDC.e_vault': value,
            'groUSDT.e_vault': value,
            'groDAI.e_vault_v1_7': value,
            'groUSDC.e_vault_v1_7': value,
            'groUSDT.e_vault_v1_7': value,
            'total': value
        },
        'net_returns': {
            'groDAI.e_vault': value,
            'groUSDC.e_vault': value,
            'groUSDT.e_vault': value,
            'groDAI.e_vault_v1_7': value,
            'groUSDC.e_vault_v1_7': value,
            'groUSDT.e_vault_v1_7': value,
            'total': value
        },
        'transaction': {
            'deposits': [],
            'withdrawals': [],
            'transfers_in': [],
            'transfers_out': [],
            'approvals': [],
            'failures': []
        },
        'gro_gate': {
            'status': status,
            'total_claimable_allowance': NA,
            'total_remaining_allowance': NA,
            'snapshot_ts': NA,
            'gro_balance_at_snapshot': NA,
            'gro_gate_at_snapshot': NA,
            'proofs': [],
            'root': NA,
            'root_matched': NA,
            'groDAI.e_vault': {
                'claimable_allowance': NA,
                'remaining_allowance': NA,
                'claimable': NA,
                'base_allowance': NA,
                'base_allowance_claimed': NA
            },
            'groUSDC.e_vault': {
                'claimable_allowance': NA,
                'remaining_allowance': NA,
                'claimable': NA,
                'base_allowance': NA,
                'base_allowance_claimed': NA
            },
            'groUSDT.e_vault': {
                'claimable_allowance': NA,
                'remaining_allowance': NA,
                'claimable': NA,
                'base_allowance': NA,
                'base_allowance_claimed': NA
            }
        }
    }
}

/// @notice Creates an empty vesting airdrop object with default values
/// @return An object with default values and properties for a vesting airdrop
export const EMPTY_VESTING_AIRDROP = {
    'name': NA,
    'token': NA,
    'amount': NA,
    'claim_initialized': NA,
    'claimed_amount': NA,
    'claimable_amount': NA,
    'proofs': []
}

/// @notice Creates an empty pool object with default values
/// @return An object with default values and properties for a pool
export const NO_POOL = {
    'net_reward': NA,
    'balance': NA,
    'coinBalance': NA,
    'rewards': {
        'claim_now': NA,
        'vest_all': NA
    }
}

/// @notice Creates an empty pool object with default values
/// @return An object with default values and properties for a pool
export const EMPTY_POOL = {
    'net_reward': toStr(0),
    'balance': toStr(0),
    'coinBalance': toStr(0),
    'rewards': {
        'claim_now': toStr(0),
        'vest_all': toStr(0)
    }
}

/// @notice Creates an empty vesting airdrop proof object with default values
/// @return An IVestingAirdropProof object with default values and properties for a vesting airdrop proof
export const EMPTY_VESTING_AIRDROP_PROOF: IVestingAirdropProof = {
    'name': NA,
    'token': NA,
    'root': NA,
    'total': NA,
    'airdrops': [{
        'address': NA,
        'amount': NA,
        'proofs': [],
    }],
}

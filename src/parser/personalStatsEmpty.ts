import {
    IPersonalStatsEthereum,
    IPersonalStatsAvalanche,
} from '../interfaces/IPersonalStats';
import {
    Status,
    NetworkId,
    NetworkName,
} from '../types';
import {
    LAUNCH_TIMESTAMP_ETH,
    LAUNCH_TIMESTAMP_AVAX,
} from '../constants';


export const emptyEthUser = (
    currentTimestamp: string,
    address: string,
    status: Status
): IPersonalStatsEthereum => ({
    'status': status,
    'network_id': NetworkId.mainnet,
    'network': NetworkName.mainnet,
    'launch_timestamp': LAUNCH_TIMESTAMP_ETH,
    'current_timestamp': currentTimestamp,
    'address': address,
    'airdrops': [],
    'transaction': {
        'deposits': [],
        'withdrawals': [],
        'transfers_in': [],
        'transfers_out': [],
        'approvals': [],
        'failures': []
    },
    'amount_added': {
        'pwrd': '0',
        'gvt': '0',
        'total': '0'
    },
    'amount_removed': {
        'pwrd': '0',
        'gvt': '0',
        'total': '0'
    },
    'net_amount_added': {
        'pwrd': '0',
        'gvt': '0',
        'total': '0'
    },
    'current_balance': {
        'pwrd': '0',
        'gvt': '0',
        'total': '0'
    },
    'net_returns': {
        'pwrd': '0',
        'gvt': '0',
        'total': '0'
    },
    'net_returns_ratio': {
        'pwrd': 'N/A',
        'gvt': 'N/A',
        'total': 'N/A'
    },
    'vest_bonus': {
        'locked_gro': 'N/A',
        'net_reward': 'N/A',
        'rewards': {
            'claim_now': 'N/A',
            'vest_all': 'N/A'
        }
    },
    'pools': {
        'all': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        },
        'single_staking_100_gro_0': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        },
        'uniswap_v2_5050_gro_gvt_1': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        },
        'uniswap_v2_5050_gro_usdc_2': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        },
        'single_staking_100_gvt_3': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        },
        'curve_meta_pwrd_3crv_4': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        },
        'balancer_v2_8020_gro_weth_5': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        },
        'single_staking_100_pwrd_6': {
            'net_reward': 'N/A',
            'balance': 'N/A',
            'coinBalance': 'N/A',
            'rewards': {
                'claim_now': 'N/A',
                'vest_all': 'N/A'
            }
        }
    },
    'gro_balance_combined': 'N/A',
    'vesting_airdrop': {
        'name': 'N/A',
        'token': 'N/A',
        'amount': 'N/A',
        'claim_initialized': 'N/A',
        'claimed_amount': 'N/A',
        'claimable_amount': 'N/A',
        'proofs': []
    }
});

export const emptyAvaxUser = (
    status: Status
): IPersonalStatsAvalanche => ({
    'status': status,
    'network_id': NetworkId.avalanche,
    'launch_timestamp': LAUNCH_TIMESTAMP_AVAX,
    'amount_added': {
        'groDAI.e_vault': '0',
        'groUSDC.e_vault': '0',
        'groUSDT.e_vault': '0',
        'groDAI.e_vault_v1_7': '0',
        'groUSDC.e_vault_v1_7': '0',
        'groUSDT.e_vault_v1_7': '0',
        'total': '0'
    },
    'amount_removed': {
        'groDAI.e_vault': '0',
        'groUSDC.e_vault': '0',
        'groUSDT.e_vault': '0',
        'groDAI.e_vault_v1_7': '0',
        'groUSDC.e_vault_v1_7': '0',
        'groUSDT.e_vault_v1_7': '0',
        'total': '0'
    },
    'net_amount_added': {
        'groDAI.e_vault': '0',
        'groUSDC.e_vault': '0',
        'groUSDT.e_vault': '0',
        'groDAI.e_vault_v1_7': '0',
        'groUSDC.e_vault_v1_7': '0',
        'groUSDT.e_vault_v1_7': '0',
        'total': '0'
    },
    'current_balance': {
        'groDAI.e_vault': '0',
        'groUSDC.e_vault': '0',
        'groUSDT.e_vault': '0',
        'groDAI.e_vault_v1_7': '0',
        'groUSDC.e_vault_v1_7': '0',
        'groUSDT.e_vault_v1_7': '0',
        'total': '0'
    },
    'net_returns': {
        'groDAI.e_vault': '0',
        'groUSDC.e_vault': '0',
        'groUSDT.e_vault': '0',
        'groDAI.e_vault_v1_7': '0',
        'groUSDC.e_vault_v1_7': '0',
        'groUSDT.e_vault_v1_7': '0',
        'total': '0'
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
        'total_claimable_allowance': 'N/A',
        'total_remaining_allowance': 'N/A',
        'snapshot_ts': 'N/A',
        'gro_balance_at_snapshot': 'N/A',
        'gro_gate_at_snapshot': 'N/A',
        'proofs': [],
        'root': 'N/A',
        'root_matched': 'N/A',
        'groDAI.e_vault': {
            'claimable_allowance': 'N/A',
            'remaining_allowance': 'N/A',
            'claimable': 'N/A',
            'base_allowance': 'N/A',
            'base_allowance_claimed': 'N/A'
        },
        'groUSDC.e_vault': {
            'claimable_allowance': 'N/A',
            'remaining_allowance': 'N/A',
            'claimable': 'N/A',
            'base_allowance': 'N/A',
            'base_allowance_claimed': 'N/A'
        },
        'groUSDT.e_vault': {
            'claimable_allowance': 'N/A',
            'remaining_allowance': 'N/A',
            'claimable': 'N/A',
            'base_allowance': 'N/A',
            'base_allowance_claimed': 'N/A'
        }
    }
});

export const NO_POOL_DATA = {
    'net_reward': 'N/A',
    'balance': 'N/A',
    'coinBalance': 'N/A',
    'rewards': {
        'claim_now': 'N/A',
        'vest_all': 'N/A'
    }
}

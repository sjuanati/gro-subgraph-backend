/// @notice Generates a GraphQL query for retrieving a user's personal statistics from the Ethereum subgraph
/// @dev Constructs a query string to fetch data from the Ethereum subgraph
/// @param account The user's Ethereum address (lowercase)
/// @param first The maximum number of transfer records to retrieve
/// @param blockTimestamp The minimum block timestamp for transfer records
/// @return A GraphQL query string to fetch personal statistics data related to the Gro protocol on Ethereum
export const queryPersonalStatsEth = (
    account: string,
    first: number,
    blockTimestamp: number
) => (
    `{
        _meta {
            hasIndexingErrors
            block {
              number
              timestamp
            }
        }
        masterDatas {
            status
            network_id
            network_name
            launch_timestamp
            gro_per_block
            total_alloc
            total_locked_amount
            total_bonus
            global_start_time
            init_unlocked_percent
        }
        prices {
            gvt
            gro
            curve_pwrd3crv
            uniswap_gvt_gro
            uniswap_gro_usdc
            balancer_gro_weth
        }
        poolDatas {
            id
            reserve0
            reserve1
            total_supply
        }
        stakerDatas {
            id
            lp_supply
            acc_gro_per_share
            alloc_point
            pool_share
            block_number
            block_timestamp
        }
        factors {
            pwrd
        }
        users(where: {id: "${account}"}) {
            address: id
            totals {
                value_added_gvt
                value_added_pwrd
                value_added_total
                value_removed_gvt
                value_removed_pwrd
                value_removed_total
                net_value_gvt
                net_value_pwrd
                net_value_total
                net_amount_gvt
                net_based_amount_pwrd
                amount_total_gro
                amount_vest_team_gro
            }
            vestingBonus {
                net_reward
                vesting_gro
                latest_start_time
            }
            vestingAirdrop {
                claim_initialized
                claimed_amount
                total_claim_amount
            }
            airdrop_claims(
                orderBy: block_timestamp
                orderDirection: asc
            ) {
                id
                tranche_id
                amount
                contract_address
                block_timestamp
            }
            transfers (
                first: ${first}
                where: { block_timestamp_gte: ${blockTimestamp} }
                orderBy: block_timestamp
                orderDirection: asc
            ) {
                token
                hash
                timestamp: block_timestamp
                usd_amount
                coin_amount
                block_number
                type
            }
            approvals (
                orderBy: block_timestamp
                orderDirection: desc
            ) {
                token
                hash
                timestamp: block_timestamp
                spender: spender_address
                usd_amount
                coin_amount
                block_number
            }
            pool_0: pools(where: {pool_id: 0}) {
                net_reward
                balance
                reward_debt
              }
            pool_1: pools(where: {pool_id: 1}) {
                net_reward
                balance
                reward_debt
            }
            pool_2: pools(where: {pool_id: 2}) {
                net_reward
                balance
                reward_debt
            }
            pool_3: pools(where: {pool_id: 3}) {
                net_reward
                balance
                reward_debt
            }
            pool_4: pools(where: {pool_id: 4}) {
                net_reward
                balance
                reward_debt
            }
            pool_5: pools(where: {pool_id: 5}) {
                net_reward
                balance
                reward_debt
            }
            pool_6: pools(where: {pool_id: 6}) {
                net_reward
                balance
                reward_debt
            }
        }
    }`
);

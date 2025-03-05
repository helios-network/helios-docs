# Fair Staking & APY Scaling

## Introduction
The HELIOS blockchain promotes an equitable staking system by ensuring rewards are fairly distributed among all participants. To prevent reward monopolization, the network applies a stake-based APY reduction mechanism that adjusts staking returns based on stake size, ensuring fairness for both large and small validators.

## Stake-Based APY Reduction
This feature reduces the effective stake of large delegations to prevent network dominance by whales while encouraging decentralization.

### Key Parameters
| Parameter              | Default Value | Description |
|-----------------------|--------------|------------------------------------------------|
| dominance_threshold | 5%           | Maximum stake percentage before APY scaling starts. |
| curve_steepness   | 10.0         | Controls how quickly APY reduction increases beyond the threshold. |
| max_reduction     | 90%          | Maximum possible APY reduction for large stakers. |
| enabled           | true         | Whether the mechanism is active through governance. |

### How It Works
- Fair Stake Limit: If you own 5% (based on governance votes) or less of the total staked tokens, you receive full rewards.
- Penalty for Oversized Stakes: If you stake more than 5% of the network, a reduction curve applies to your APY.
- Max Reduction: The maximum penalty is 90%, meaning the lowest possible APY is 1% for extremely large stakers.

### Dynamic APY Calculation
To adjust staking rewards proportionally, HELIOS uses an exponential decay formula for large delegations:

$$
\text{Effective APY} = \text{Base APY} \times e^{-k (x - threshold)}
$$

Where:
- Base APY: The default staking reward rate.
- x: The percentage of total network stake held by a single entity.
- threshold: The governance-defined limit where scaling begins (default: 5%).
- k: The governance-controlled reduction factor.



### Example Scenario
Imagine the total staked amount on Helios is 1,500 ETH, and you stake 500 ETH:
- Your stake = 33.33% of the network (above the 5% threshold).
- The reduction formula applies, significantly lowering your APY.
- Instead of earning 10% APY, your final reward rate drops to 1% APY.

![Fair Rewards](https://i.imgur.com/6KY3KXT.png)

### **Effects on Network Mechanics**
The APY scaling mechanism directly influences staking distribution and consensus power:

- The effective stake used for consensus calculations is adjusted dynamically.
- Validator reward allocations adapt to maintain balance in network participation.
- Larger delegations beyond the defined threshold receive a reduced share of validator rewards.
- Delegators with smaller stakes see a proportional increase in their reward distribution.

## **Implications for Network Participants**
This approach enhances overall network health by fostering decentralization and ensuring sustainable staking rewards:

- By adjusting staking rewards dynamically, the network discourages over-concentration of stake among a few entities.
- A more distributed staking landscape increases overall network security and resilience.
- This system ensures long-term viability by maintaining fair reward distribution across all participant levels.

## Summary: Play Fair, Earn Fair
If you stake within the fair limits, you receive full rewards. If you try to control too much of the network, the system reduces your advantage to keep Helios decentralized and fair.

Helios ensures that everyone has a chance to participate and earn rewards, not just the biggest players.
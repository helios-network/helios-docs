# Supply & Reward Distribution

## Introduction
The HELIOS blockchain implements a structured staking reward system to fairly distribute incentives while maintaining network security and decentralization. This section covers how supply adjustments, reward mechanisms, and APY scaling work.

## Epoch-Based Reward System
Staking rewards are distributed based on epochs, ensuring a predictable yet adaptable supply model:

- Epoch Duration: Fixed at one block interval (~5 seconds per block).
- Dynamic Reward Pool: Rewards are minted per block and distributed to validators and delegators.
- Governance-Adjustable Parameters: Inflation, APY, and staking mechanics can be modified via governance.

## Staking Rewards Calculation
Each validator and delegator earns staking rewards based on their stake proportion and **effective power**:

$$
\text{Validator Reward} = \frac{\text{Validator Effective Stake} \times \text{Epoch Reward}}{\text{Total Network Stake}}
$$

- Validator Effective Stake: Adjusted based on whale limits and APY scaling.
- Epoch Reward: New HELIOS minted per epoch (governance-controlled).
- Total Network Stake: Sum of all active staking balances.

### Delegator Rewards
Delegators earn rewards based on their stake in a validator:

$$
\text{Delegator Reward} = \frac{\text{Delegator Stake}}{\text{Validator Total Stake}} \times \text{Validator Reward}
$$

Validators may take a commission fee, reducing delegator rewards accordingly.

## Whale Limit & APY Adjustment
To prevent large entities from dominating the network, HELIOS employs a whale limit mechanism, reducing APY for excessively large delegations.

- Threshold: If a single entity controls more than 5% of the total stake, excess stake receives progressively lower APY.
- APY Reduction Curve: Follows an exponential decay beyond the threshold:

$$
\text{Effective APY} = \text{Base APY} \times e^{-k (x - x_{\text{threshold}})}
$$

- Base APY: Standard network reward rate.
- x: Stake percentage of a single entity.
threshold: 5% dominance cap.
- k: Governance-controlled reduction factor.

## Supply & Inflation Adjustments
HELIOS maintains a governance-controlled inflation model to regulate supply expansion.

- Epoch-Based Inflation: New supply is minted at each block, following:

$$
\text{Minted Per Block} = \frac{\text{Annual Inflation Rate} \times \text{Total Supply}}{\text{Blocks Per Year}}
$$

- Governance Flexibility: Inflation rates can be adjusted dynamically based on network needs.
- Reward Sustainability: Ensures staking rewards remain competitive without excessive supply inflation.

## Treasury & Reserve Allocation
A portion of minted tokens is allocated to the Helios Treasury to fund:
- Ecosystem development (grants, protocol improvements).
- Security incentives (bug bounties, validator rewards).
- Buyback programs to counteract inflation.

## Conclusion
The HELIOS staking reward system is designed to ensure fair rewards, decentralization, and economic sustainability. By dynamically adjusting APY, enforcing whale limits, and maintaining treasury reserves, the network fosters long-term stability.
# Minting & Inflation Mechanics

## Introduction
The HELIOS blockchain follows a structured and governance-driven minting and inflation model to ensure sustainability and balanced token issuance. This section explains how new HELIOS tokens are minted, inflation mechanics, and epoch-based distribution.

## Minting Process
HELIOS tokens are minted according to an epoch-based supply model like Bitcoin, ensuring a predictable yet adaptable emission schedule. The key mechanisms include:

- Block-Based Minting: Tokens are minted per block, with rewards distributed proportionally among validators and delegators.
- Governance-Controlled Inflation: Inflation rates are adjustable through governance proposals.
- Fee Collection & Redistribution: A portion of transaction fees contributes to staking rewards and ecosystem funding.

### Minting Per Block
The number of HELIOS tokens minted per block is calculated as:

$$

\text{Minted Per Block} = \frac{\text{Annual Inflation Rate} \times \text{Total Supply}}{\text{ Blocks Per Year }}
$$

- Annual Inflation Rate is governance-controlled.
- Total Supply refers to circulating HELIOS at that epoch.
- Blocks Per Year is based on a 5-second block time (~6.3 million blocks per year).

## Inflation Mechanism
HELIOS follows a dynamic inflation model, where the rate adjusts based on network maturity and supply milestones.

| Phase                | Supply Range      | Inflation Rate |
|-------------------------|---------------------|------------------|
| Early Phase            | 0 - 2B HELIOS       | 15%              |
| Growth Phase           | 2B - 4B HELIOS      | 12%              |
| Maturity Phase         | 4B - 5B HELIOS      | 5%               |
| Post-Cap Phase        | >5B HELIOS         | 1-3% (governance-controlled) |

- Inflation Reductions: As supply increases, inflation rates decrease to maintain token value.
- Governance Flexibility: After reaching 5B HELIOS, governance can vote to adjust inflation (1-3%).
- Staking Incentives: Inflation ensures steady staking rewards without excessive dilution.

## Supply Adjustments & Epoch Rewards
- Epoch-Based Rewarding: Minting is structured around epochs to maintain fair reward distribution.
- Staking & Validator Compensation: Newly minted HELIOS is distributed based on stake-weighted contributions.
- Treasury & Reserve Allocation: A portion of minted tokens may be directed to ecosystem reserves and treasury for development and buybacks.

## Mechanisms
To prevent over-minting and supply inflation:
- Whale Limits: Large delegations exceeding 5% of total stake receive reduced APY (adjustable by governance).
- Slashing Events: Slashed assets from validators are redirected to treasury, potential adaptability from dust assets over-time.
- Deflationary Pressure: Governance can introduce buyback programs or staking incentives.

## Conclusion
The minting and inflation model of HELIOS ensures sustainable growth, staking incentives, and decentralized control. With governance-driven inflation adjustments and anti-inflation mechanisms, the network maintains a healthy economic balance.

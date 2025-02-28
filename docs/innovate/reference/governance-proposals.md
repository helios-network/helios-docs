# Governance Proposals

Helios features on-chain governance that allows validators and stakeholders to influence network parameters, including:

- Adding new assets to the staking consensus.
- Updating weights of existing staked assets.
- Modifying network parameters (inflation rate, slashing penalties, etc.).
- Technical and security upgrades through parameter updates.

### Voting Power & Validator Influence
Governance in Helios operates on a stake-weighted model, where voting power is determined by:

1. Total weighted assets staked by the validator.
2. Reputation score, influenced by validator uptime, historical votes, and Hyperion network contributions.
3. Hyperion boost, which increases governance power for validators that actively participate in interchain operations.

Validators with higher reputation and active Hyperion modules have a stronger influence, making governance fairer and ensuring reliable validators shape the network’s future.

### **Magnitude System for Weight Adjustments**
The magnitude system allows governance participants to propose controlled adjustments to an asset's weight in the staking consensus. The **magnitude level** determines how much the asset’s weight will increase or decrease, directly impacting staking incentives and APY distribution.

| Magnitude | Adjustment to Asset Weight |
|-----------|--------------------------|
| **Small**  | ±5%  |
| **Medium** | ±15% |
| **High**   | ±30% |

A higher magnitude means a **stronger influence** on network staking mechanics. Increasing an asset’s weight makes it **more attractive** for staking, whereas decreasing it lowers its influence.  

For example, if **ETH's weight** is increased using a **High** magnitude, it would have a greater staking power in Helios, affecting validators' incentives and delegator rewards. This system ensures **balanced governance adjustments** while preventing extreme shifts in the staking pool.

### Creating Governance Proposals
Governance proposals can be submitted using two methods:

#### 1. Helios-SDK (Cosmos SDK) Way
Helios supports governance actions via Cosmos SDK-based proposals. Below is an example of submitting an asset-related proposal using the SDK:

Example: Adding a New Asset to Consensus
```js
TODO
```
# Community Upgrades

## Overview

Community governance is at the heart of Helios blockchain's operation. Drawing inspiration from the effectiveness of community-driven projects like meme coins, Helios has implemented a robust governance system that puts the community at the center of network evolution and security.

## Asset Management Through Governance

### Decentralized Value Weight System
The community manages asset weights through governance, eliminating the need for external price oracles. This unique approach:
- Allows dynamic adjustment of each asset's weight in the consensus
- Ensures network security isn't dependent on external oracle data
- Maintains balanced security distribution across all whitelisted assets
- Enables rapid response to market changes through community voting

### Whitelisted Assets Management
The community has direct control over the network's security through governance proposals that can:
- Add new valuable assets to the consensus (e.g., ETH, WSTETH)
- Remove assets that no longer meet security requirements
- Update asset weights to maintain balanced security distribution
- Adjust parameters based on market conditions without oracle dependency

This dynamic asset management ensures:
- Network security backed by community-validated asset weights
- Independence from external price feeds or oracles
- Balanced distribution of security across all assets
- Protection against devaluation risks
- Optimal staking rewards distribution

### Security Benefits
This oracle-free approach provides several advantages:
- No single point of failure from external data sources
- Community-driven response to market changes
- Real-time adjustment capability
- Reduced attack surface without oracle dependencies
- Natural market value reflection through governance

## Network Parameter Governance

Community members can participate in crucial network decisions including:

### 1. Token Economics
- HELIOS token inflation rate adjustments
- Staking reward distributions
- Fee structure modifications

### 2. Protocol Updates
- Consensus mechanism parameters
- Validator requirements
- Network upgrade schedules

### 3. Ecosystem Development
- Treasury fund allocations
- Partnership proposals
- Development grants distribution

## Participation Methods

### Via Helios Portal
- Access the governance section at [portal.helioschain.network](https://portal.helioschain.network)
- View active proposals
- Submit votes with your HELIOS tokens
- Track proposal outcomes

### Via RPC Endpoints
For developers and advanced users:
```js
const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider("https://dataseed.helioschain.network");
// Query active proposals
const getProposals = async () => {
    const result = await provider.send("eth_getProposalsByPageAndSize", [1, 10]);
    console.log("Active Proposals:", result);
};
```

## Voting Power and Participation

- All HELIOS token holders can participate in governance
- Voting power is proportional to HELIOS holdings
- Staked tokens retain voting rights
- Validator reputation influences proposal weight

## Best Practices for Community Governance

1. **Research Thoroughly**
   - Review proposal documentation
   - Understand potential impacts
   - Consider long-term consequences

2. **Active Participation**
   - Regular voting on proposals
   - Community discussion engagement
   - Feedback on implementation

3. **Responsible Proposal Creation**
   - Clear objectives and implementation plans
   - Reasonable timeframes
   - Community benefit focus

## Technical Implementation

Governance proposals can be submitted through multiple interfaces:

### Smart Contract Interface

Proposals Precompile Contract Address `0x0000000000000000000000000000000000000805`

[Interface link](https://github.com/helios-network/helios-core/blob/main/helios-chain/precompiles/gov/IGov.sol)

### CLI Commands

Submit a new proposal:

`heliades tx gov submit-proposal [proposal-type] [params] --from [address]`

Cast a vote:

`heliades tx gov vote [proposal-id] [vote-option] --from [address]`

For detailed information about creating and managing proposals, refer to the [Governance Reference](../reference/governance-proposals).

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
const newAssetProposal = new protopkg.helios.erc20.v1.AddNewAssetConsensusProposal({
  title: 'Whitelist ETH into the consensus with a base stake of power 100',
  description: 'Explaining why ETH would be a good potential for Helios consensus and why it would secure the market',
  assets: [
    new protopkg.helios.erc20.v1.Asset({
      denom: 'ETH',
      contract_address: '0x1234567890abcdef1234567890abcdef12345678',
      chain_id: 'ethereum',
      decimals: 6,
      base_weight: 100,
      metadata: 'Ethereum direct main asset securing the whole POS of ETH'
    })
  ]
});
```

Example: Updating an Asset’s Weight
```js
const updateAssetProposal = new protopkg.helios.erc20.v1.UpdateAssetConsensusProposal({
  title: 'Increase ETH Weight in Consensus',
  description: 'Proposal to increase ETH weight with high magnitude for increased staking power.',
  updates: [
    new protopkg.helios.erc20.v1.WeightUpdate({
      denom: 'ETH',
      magnitude: 'high',
      direction: 'up'
    })
  ]
});
```

#### 2. EVM Smart Contract Way
Helios governance proposals can also be executed through EVM smart contracts. This is useful for interacting with governance proposals programmatically via Ethereum-compatible tools.

Example: Adding a New Asset (EVM Way)
```js
const governanceContract = new ethers.Contract(
  '0x0000000000000000000000000000000000000806', // Precompiled contract address
  governanceAbi,
  signer
);

await governanceContract.proposeNewAsset(
  'ETH',
  '0x1234567890abcdef1234567890abcdef12345678',
  'ethereum',
  6,
  100,
  'Ethereum direct main asset securing the whole POS of ETH'
);
```

Example: Updating an Asset’s Weight (EVM Way)
```js
await governanceContract.proposeAssetWeightUpdate(
  'ETH',
  'high',
  'up'
);
```

### How Proposals Are Executed

1. A proposal is submitted via Helios-SDK or EVM contract.
2. Validators vote based on their stake power and reputation.
3. If a majority YES vote is reached, the proposal is automatically executed on-chain.

### Helios Gate: Non-Technical Governance Interface
For users who prefer a graphical interface, [Helios Gate](https://portal.helioschain.network) provides:

- One-click proposal submission without needing technical knowledge.
- Voting dashboard showing active and past proposals.
- Validator reputation scores to guide stake delegation.

This ensures governance is accessible to both advanced users and non-technical participants, increasing decentralization and community-driven decision-making.

### Available NPM Packages for Helios Governance
Developers can interact with Helios governance through the following NPM packages:

- [@helios-chain-labs/helios-ts-wallet](https://www.npmjs.com/package/@helios-chain-labs/helios-ts-wallet) - Sign and broadcast governance transactions.
- [@helios-chain-labs/transactions](https://www.npmjs.com/package/@helios-chain-labs/transactions) - Generate governance proposals and transactions.
- [@helios-chain-labs/proto](https://www.npmjs.com/package/@helios-chain-labs/proto) - Protobuf files for governance interactions.
- [@helios-chain-labs/address-converter](https://www.npmjs.com/package/@helios-chain-labs/address-converter) - Convert ETH addresses to Helios addresses.

For more details, visit the [Helios NPM organization](https://www.npmjs.com/~helios-chain-labs).

# Helios Revenue Distribution Hooks

## Overview

This documentation explains how Helios implements automatic revenue distribution for smart contract creators through two key EVM hooks:

1. **PostTxProcessing**: Distributes a percentage of transaction fees to contract creators after successful contract interactions
2. **PostContractCreation**: Automatically registers newly deployed contracts for revenue distribution

## How It Works

### Transaction Fee Distribution (PostTxProcessing)

When users interact with registered smart contracts, 10% of the transaction fees are automatically distributed to the contract creator (or designated withdrawer address). This incentivizes developers to create and maintain high-quality smart contracts on the Helios network.

Key aspects:
- Applies to all successful transactions with registered contracts
- Distribution occurs automatically after transaction execution
- Fees are taken from the transaction's gas fees
- Revenue share is configurable through governance

### Automatic Contract Registration (PostContractCreation)

When a new contract is deployed, it's automatically registered for revenue distribution. The deployer address is set as both the deployer and withdrawer address, enabling immediate fee collection without requiring a separate registration transaction.

Key aspects:
- Automatic registration upon contract deployment
- No additional transaction needed
- Deployer is set as both deployer and withdrawer
- Manual registration still available for legacy contracts

## Technical Implementation

### PostTxProcessing Hook

Triggered after each successful transaction, this hook:
1. Verifies the contract is registered
2. Calculates the developer's share (10% of gas fees)
3. Transfers the share to the withdrawer address
4. Emits a `distribute_dev_revenue` event

```go
Event: distribute_dev_revenue
Attributes:
  - sender: <transaction sender address>
  - contract: <contract address>
  - withdrawer_address: <fee recipient address>
  - amount: <distributed amount>
```

### PostContractCreation Hook

Triggered after contract deployment, this hook:
1. Verifies revenue distribution is enabled
2. Checks if contract is already registered
3. Creates revenue entry with deployer as both deployer and withdrawer
4. Updates deployer mapping

## Usage Example with Ethers.js

### Testing Automatic Registration

Deploy a contract and verify automatic registration:

```javascript
// Deploy contract
const factory = new ethers.ContractFactory(abi, bytecode, signer);
const contract = await factory.deploy();
await contract.waitForDeployment();

// Verify registration
const contractAddress = await contract.getAddress();
console.log("Contract deployed at:", contractAddress);

// Query registration status
// heliades query revenue contract <CONTRACT_ADDRESS>
```

### Testing Revenue Distribution

Execute transactions and monitor fee distribution:

```javascript
// Execute contract interaction
const tx = await contract.someMethod();
await tx.wait();

// Monitor events
provider.on('block', async (blockNumber) => {
  const block = await provider.getBlock(blockNumber, true);
  block.transactions.forEach(async (tx) => {
    const receipt = await tx.wait();
    // Look for distribute_dev_revenue events
  });
});
```

## Testing the Features

For detailed testing instructions and scripts, refer to the [Testing Guide](./README.md) which includes:

1. Automatic Registration Testing:
   - Deploy contract using provided scripts
   - Verify automatic registration
   - Test revenue distribution

2. Manual Registration Testing (Legacy):
   - Deploy contract
   - Register manually
   - Test revenue distribution

## Technical Details (Advanced Users)

### Revenue Module Parameters

- **EnableRevenue**: Global toggle for revenue distribution
- **DeveloperShares**: Percentage of fees distributed to developers (default 10%)
- **AddrDerivationCostCreate**: Gas cost for address derivation during contract creation

### Hook Execution Flow

1. **PostContractCreation**:
   ```
   Contract Deployment -> EVM Hook -> Revenue Registration -> Event Emission
   ```

2. **PostTxProcessing**:
   ```
   Transaction Execution -> EVM Hook -> Fee Calculation -> Distribution -> Event Emission
   ```

### Gas Considerations

- Revenue distribution is part of the transaction execution
- Additional gas is consumed for:
  - Fee calculations
  - Token transfers
  - Event emission
- Gas costs are optimized through efficient storage access

## Additional Resources

- [Revenue Module API Documentation](https://docs.helios.network/modules/revenue)
- [Smart Contract Examples](https://github.com/helios-network/helios-core/tree/main/contracts)
- [Testing Scripts](https://github.com/helios-network/helios-core/tree/main/heliades-scripts/fee-distribution) 
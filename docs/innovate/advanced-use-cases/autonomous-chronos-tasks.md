# Autonomous Chronos Module Technical Documentation

## Overview

The **Chronos Module** allows developers to schedule and manage periodic tasks (cron jobs) directly on the Helios blockchain, using an integrated precompile. It simplifies automation tasks such as periodic function calls to smart contracts.

## Key Features

- **On-chain scheduling**: Schedule and automate smart contract method executions directly on-chain.
- **Gas Management**: Funds are deposited during cron creation to cover gas consumption at a rate of 100 gas per block.
- **Automatic Cancellation:** Cron jobs automatically cancel when their balance reaches zero or upon encountering critical execution errors, returning any remaining funds to the owner.
- **Unique Cron Addresses:** Each cron job is assigned a unique blockchain address acting as an alias of the owner's address.
- **Event Monitoring:** Emits lifecycle events (`CronCreated`, `CronModified`, `CronCancelled`) for easy monitoring and integration.

## Cron Gas Management

- **Gas Consumption:** Each active cron consumes 100 gas per block to remain active.
- **Transaction Costs:** Cron jobs' wallets pay the transaction costs at each execution based on defined parameters (gas limit and gas price).
- **Execution Cost:** Execution costs within the EVM are directly charged to the cron owner's wallet.

## Technical limitations

- **Max Number Execution:** The default maximum number executions per block are set at `10000`

## Usage Example with Ethers.js

### Prerequisites

- Ethers.js library
- ABI file ([abi.json](https://github.com/helios-network/helios-core/blob/main/helios-chain/precompiles/chronos/abi.json) provided)
- Deployed Cron precompile at address `0x0000000000000000000000000000000000000830`

### Creating a Cron

```javascript
const ethers = require('ethers');
const fs = require('fs');

const chronosAbi = JSON.parse(fs.readFileSync('./abi.json').toString()).abi;
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract('0x0000000000000000000000000000000000000830', chronosAbi, wallet);

async function createCron() {
  const tx = await contract.createCron(
    CONTRACT_ADDRESS, // target contract Address where the cron will interact
    ABI_STRING, // abi of target contract
    "increment", // methodName
    [], // string[] params
    1, // frequency
    0, // expirationBlock
    400000, // gasLimit
    ethers.utils.parseUnits("20", "gwei"), // maxGasPrice
    ethers.utils.parseEther("10") // amountToDeposit
  );

  const receipt = await tx.wait();
  console.log('Cron Created, Tx Hash:', receipt.transactionHash);
}

createCron().catch(console.error);
```

### Updating a Cron

```js
await contract.updateCron(cronId, newFrequency, newParams, newExpirationBlock, newGasLimit, newMaxGasPrice);
```

### Canceling a Cron

```js
await contract.cancelCron(cronId);
```

### Monitoring Events

```js
contract.on('CronCreated', (from, to, cronId) => {
  console.log(`Cron Created: ${cronId}, from: ${from}, to: ${to}`);
});

contract.on('CronModified', (from, to, cronId, success) => {
  console.log(`Cron Modified: ${cronId}, success: ${success}`);
});

contract.on('CronCancelled', (from, to, cronId, success) => {
  console.log(`Cron Cancelled: ${cronId}, success: ${success}`);
});
```

### Cancelling a Cron

```js
async function cancelCron(cronId) {
  const tx = await contract.cancelCron(cronId);
  const receipt = await tx.wait();
  console.log('Cron Cancelled, Tx Hash:', receipt.transactionHash);
}

cancelCron(CRON_ID).catch(console.error);
```

## RPC Endpoints

RPC endpoints are provided to facilitate cron lifecycle management:

- `eth_getCron`
- `eth_getCronByAddress`
- `eth_getAccountCronsByPageAndSize`
- `eth_getCronTransactionByNonce`
- `eth_getCronTransactionByHash`
- `eth_getCronTransactionReceiptByNonce`
- `eth_getCronTransactionReceiptByHash`
- `eth_getCronTransactionReceiptsByPageAndSize`
- `eth_getCronTransactionsByPageAndSize`

- `eth_getCronsByPageAndSize`
- `eth_getAllCronTransactionReceiptsByPageAndSize`
- `eth_getAllCronTransactionsByPageAndSize`
- `eth_getBlockCronLogs`

These endpoints are available via Postman at [Helios Workspace](https://www.postman.com/lunar-module-architect-57036170/workspace/helios-workspace).

## Gas Management Explanation

When creating a cron job, you must deposit funds to cover gas consumption at a rate of **100 gas per block** to maintain its active status. Each cron task has a dedicated blockchain address, effectively an alias of the cron owner's address, from which gas fees for transactions are deducted at execution time based on the block gas baseFee EIP-1559. However, any state changes resulting from smart contract executions directly impact the owner's wallet balance, not the cron's alias address.

### Cron Lifecycle & Fund Management

- Each cron has its funds managed automatically.
- Cron jobs are canceled if their balance reaches zero or a critical error occurs during execution.
- Upon cancellation, remaining funds are automatically returned to the owner's wallet, and the cron entry is permanently deleted from storage (transaction logs persist).
- You can send transfer transaction to the Cron Address for adding more funds if needed.
- If you want back your funds the unique solution is cancelling the Cron.

## Additional Resources

- ABI Reference available at: [abi.json](https://github.com/helios-network/helios-core/blob/main/helios-chain/precompiles/chronos/abi.json)
- Detailed RPC endpoint documentation in our public [Postman workspace](https://www.postman.com/lunar-module-architect-57036170/workspace/helios-workspace).
- JavaScript examples and scripts are available at: `helios-core/heliades-scripts/index.js`[helios-core/heliades-scripts/index.js](https://github.com/helios-network/helios-core/blob/main/heliades-scripts/index.js).


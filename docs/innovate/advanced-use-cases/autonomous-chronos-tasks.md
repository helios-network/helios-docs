# Chronos On-Chain Scheduled Tasks

## Overview

This documentation explains how Helios users can schedule, update, and manage recurring tasks directly on-chain using simple JavaScript and Ethers.js. Scheduled tasks automate the execution of functions on smart contracts at regular intervals.

## How It Works

Scheduled tasks allow automated execution of smart contract functions at defined intervals. Users create tasks by depositing funds, which cover ongoing transaction execution costs.

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

## Scheduling a Task

Here's how you schedule a recurring smart contract method execution:

```javascript
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const cronContract = new ethers.Contract(cronAddress, cronABI, wallet);

async function scheduleTask() {
  const tx = await cronContract.createCron(
    targetContractAddress,
    JSON.stringify(targetContractABI),
    "functionNameToCall",
    [/* params if any */],
    1, // Frequency in blocks
    0, // Expiration block (0 means no expiration)
    400000, // gasLimit
    ethers.utils.parseUnits("2", "gwei"), // maxGasPrice
    ethers.utils.parseEther("1") // amount to deposit (1 HLS)
  );

  await tx.wait();
  console.log("Scheduled task created, transaction hash:", tx.hash);
}

scheduleTask().catch(console.error);
```

## Updating a Scheduled Task

Update an existing scheduled task:

```js
async function updateTask(cronId, newFrequency, newParams, newExpirationBlock, newGasLimit, newMaxGasPrice) {
  const tx = await cronContract.updateCron(cronId, newFrequency, newParams, newExpirationBlock, newGasLimit, newMaxGasPrice);
  await tx.wait();
  console.log("Scheduled task updated:", tx.hash);
}
```

## Canceling a Scheduled Task

Cancel a scheduled task:

```javascript
async function cancelTask(cronId) {
  const tx = await cronContract.cancelCron(cronId);
  await tx.wait();
  console.log("Scheduled task canceled:", tx.hash);
}
```

## Monitoring Scheduled Task Events

Monitor task events easily:

```javascript
cronContract.on('CronCreated', (from, to, cronId) => {
  console.log(`Task created with ID: ${cronId}`);
});

cronContract.on('CronModified', (from, to, cronId, success) => {
  console.log(`Task modified with ID: ${cronId}, Success: ${success}`);
});

cronContract.on('CronCancelled', (from, to, cronId, success) => {
  console.log(`Task cancelled with ID: ${cronId}, Success: ${success}`);
});
```

## Gas and Transaction Costs Explained

- **Gas Cost per Block**: Each scheduled task consumes a fixed amount of 100 gas per block to stay active. You deposit funds upfront when scheduling the task.
- **Transaction Fees**: Scheduled task executions use a dedicated wallet address to pay execution costs. This address acts like an alias linked to your main wallet.
- **EVM Execution Costs**: Any smart contract state changes triggered by scheduled tasks directly affect the balance of your primary wallet.

---

# Technical Details (Advanced Users)

## Technical Implementation Details

- Each cron task has a unique blockchain address, effectively an alias of the owner's primary wallet.
- Cron tasks are automatically canceled and removed from storage when their balance reaches zero or when critical errors occur. Remaining funds return to the task owner.
- Dedicated RPC endpoints are available to manage and query cron tasks:
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

These endpoints can be accessed and tested using Postman at [Helios Workspace](https://www.postman.com/lunar-module-architect-57036170/workspace/helios-workspace).

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
- JavaScript examples and scripts are available at: [helios-core/heliades-scripts/index.js](https://github.com/helios-network/helios-core/blob/main/heliades-scripts/index.js).

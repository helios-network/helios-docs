
# Reading External Chain Data Smart Contract

## Introduction
The Helios blockchain allows smart contracts to interact with data from other blockchains (like Ethereum) through Hyperion, a decentralized oracle system. Hyperion acts as a bridge, fetching data from external chains and delivering it securely to your Helios smart contracts. Whether you're building a decentralized app (dApp) that needs token prices, governance signals, or other cross-chain information, Hyperion makes it possible.

Example smart-contrat repository:  [Hyperion Oracle Examples](https://github.com/helios-network/smart-contract-examples/tree/main/helios-hyperion-oracle)

## Why Use Hyperion?
- **Decentralized**: A network of Hyperion nodes fetches and verifies data, avoiding reliance on a single source.
- **Secure**: Data is only delivered after multiple nodes agree (reach consensus), reducing the risk of manipulation.
- **Simple**: You can request external data with a single function call, no complex setup required.
- **Integrated**: Hyperion works natively with Helios, using its precompiles and modules for smooth operation.

This guide will walk you through how to use Hyperion to read external chain data, with examples from the `HyperionDataConsumer` smart contract.

## Prerequisites
To follow along, you should:
- Understand basic smart contract concepts (e.g., what a function does).
- Know what a blockchain is and why external data might be useful.
- Have some familiarity with Helios (it’s EVM-compatible, like Ethereum).
- Be curious about cross-chain possibilities!

_No deep coding skills are required—we’ll keep it simple._

## How It Works
Here’s the big picture of how Hyperion gets external data to your Helios smart contract:
1. **You Request Data**: Your smart contract asks Hyperion for data from another blockchain (e.g., "What’s the ETH price on Ethereum?").
2. **You Pay Fees**: You send some HELIOS tokens to cover the cost of fetching the data and processing it on Helios.
3. **Hyperion Nodes Act**: A network of nodes listens to your request, goes to the external blockchain, and grabs the data.
4. **Consensus Happens**: The nodes agree on the data’s accuracy, ensuring it’s trustworthy.
5. **Data Arrives**: Hyperion calls your smart contract back with the data, and you can use it however you like.

_Think of Hyperion as a team of messengers who fetch information from faraway places and only deliver it when they’re sure it’s correct._

## Step-by-Step Guide

### Step 1: Set Up the Hyperion Interface

Your smart contract needs to talk to Hyperion using a special "interface." This is like giving it Hyperion’s phone number. Add this to your contract:

```solidity
interface IHyperionPrecompile {
    function requestData(
        uint64 chainId,
        address source,
        bytes calldata abiCall,
        string memory callbackSelector,
        uint256 maxCallbackGas,
        uint256 gasLimit
    ) external payable returns (uint256);
}
```

- `chainId`: Which blockchain to fetch from (e.g., 1 for Ethereum).
- `source`: The address of the contract on that blockchain.
- `abiCall`: What function to call on that contract (encoded).
- `callbackSelector`: The name of your function to call back with the data.
- `maxCallbackGas` and `gasLimit`: Limits on how much processing power to use.

### Step 2: Define Hyperion’s Address

Hyperion lives at a fixed address on Helios. It’s static on-chain:

```solidity
address public constant hyperion = 0x0000000000000000000000000000000000000900;
```

### Step 3: Request the Data

Create a function to ask for external data. Here’s how `fetchETHPrice` does it:

```solidity
function fetchETHPrice() external payable {
    address source = 0x1234567890123456789012345678901234567890;
    bytes memory abiCall = abi.encodeWithSignature("getPrice()");
    string memory callbackSelector = "onETHPriceReceived";
    uint256 maxCallbackGas = 10 gwei;
    uint256 gasLimit = 300000;

    uint256 taskId = IHyperionPrecompile(hyperion).requestData{value: msg.value}(
        uint64(1),
        source,
        abiCall,
        callbackSelector,
        maxCallbackGas,
        gasLimit
    );

    emit TaskCreated(taskId);
}
```

### Step 4: Handle the Callback

Hyperion will call your contract back with the data. Define that function:

```solidity
function onETHPriceReceived(bytes memory data, bytes memory err) external {
    require(msg.sender == owner, "Only Owner can call");
    if (err.length == 0) {
        uint256 price = abi.decode(data, (uint256));
        ethPrice = price;
        // do any extra logic necessary in the contract, your imagination is the limit
    }
}
```
Owner here through `msg.sender` will be the same address as the one who made the `fetchETHPrice` function request

### Step 5: Pay the Fees

When you call `fetchETHPrice`, you send HELIOS tokens via `msg.value`. This covers two costs:

- **Hyperion Fee (50%)**: Pays the nodes to fetch the data.
- **Callback Fee (50%)**: Pays for running `onETHPriceReceived` on Helios.

#### Example:
- Callback might use 300,000 gas at 10 gwei each = 0.003 HELIOS.
- Total `msg.value` = 0.006 HELIOS.

Send this with your transaction.

### Step 6: Deploy and Use It

- Deploy your contract to Helios.
- Call `fetchETHPrice` with enough HELIOS (e.g., 0.006 HLS).
- Wait for Hyperion to fetch the data and call `onETHPriceReceived`.
- Check the result with `getCurrentETHPrice`:

```solidity
function getCurrentETHPrice() external view returns (uint256) {
    return ethPrice;
}
```

## Fee Mechanism

| Component       | Description                                      |
|----------------|--------------------------------------------------|
| Hyperion Fee    | Pays nodes to fetch external data               |
| Callback Fee    | Pays for executing the callback on Helios       |

If the callback fails or doesn’t use all gas, leftover value is refunded.

## Security Considerations

- **msg.sender Check**: Ensure `msg.sender is verified` in your callback, as for example as admin.
- **Fee Coverage**: Insufficient funds will result in failed requests.
- **Timeouts**: Requests expire after ~100 blocks, triggering refunds.

## Example Use Case: ETH Price Fetch

- Call `fetchETHPrice` with 0.006 HLS.
- Hyperion fetches from Ethereum.
- Calls `onETHPriceReceived`.
- Store result in `ethPrice`.

## FAQ

**Q: How long does it take to get the data?**  
A: A few seconds up to few minutes, depending on the external chain’s speed and Hyperion validators state, the less fees you give them - the less quick they may execute your request.

**Q: What if it fails?**  
A: You receive an error and a refund of unused gas.

**Q: Which chains are supported?**  
A: All the EVM chain included in the Hyperion scope through the consensus is available to be called, you can use the same official chain id of each individual chain, for example Ethereum chain id is `0x1`

**Q: How to monitor it?**  
A: Listen for `TaskCreated` event you will know when it were received in your contract.

**Q: Why pay upfront?**  
A: To reward nodes to actually go and fetch the informations you need on the other blockchains and ensure callback success.

## Try It Yourself

- Clone the repo: [Hyperion Oracle Examples](https://github.com/helios-network/smart-contract-examples/tree/main/helios-hyperion-oracle)
- Install: `npm install`
- Deploy: `npx hardhat run scripts/deploy.js --network helios-testnet`
- Call: `npx hardhat run scripts/callFetchETHPrice.js --network helios-testnet`

---

Join the Helios Discord for help or questions. Happy building!

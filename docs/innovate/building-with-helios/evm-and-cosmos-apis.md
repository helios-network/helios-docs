# EVM And Cosmos API's

## Overview

Helios provides dual API compatibility, supporting both EVM JSON-RPC and Cosmos gRPC endpoints. This allows developers to interact with the blockchain using familiar tools from both ecosystems.

![image](/img/innovate/evm-cosmos-apis.png)

## EVM JSON-RPC Support

Helios is fully EVM-compatible, exposing standard Ethereum JSON-RPC endpoints. This means you can use popular Ethereum libraries like Web3.js or ethers.js to interact with the network.

### Available Endpoints
- Mainnet: `https://dataseed.helioschain.network`
- Testnet: `https://testnet1.helioschainlabs.org`

### Example: Querying Balance with ethers.js

```js
const { ethers } = require("ethers");
// Connect to Helios RPC
const provider = new ethers.JsonRpcProvider("https://testnet1.helioschainlabs.org");
async function getBalance(address) {
    const balance = await provider.getBalance(address);
    console.log(`Balance: ${ethers.formatEther(balance)} HELIOS`);
}
getBalance("0x742d35Cc6634C0532925a3b844Bc454e4438f44e");
```

### Supported EVM Methods
- `eth_getBalance`
- `eth_sendTransaction`
- `eth_call`
- `eth_estimateGas`
- `eth_getBlockByNumber`
- And all other standard Ethereum JSON-RPC methods
- Helios Featured Methods:
- `eth_getAccountTransactionsByPageAndSize`
- `eth_getBlocksByPageAndSize`
- `eth_getCosmosAddress`
- `eth_getCosmosValoperAddress`
- `eth_getDelegation`
- `eth_getDelegations`
- `eth_getProposal`
- `eth_getProposalsByPageAndSize`
- `eth_getTokenBalance`
- `eth_getTokensBalance`
- `eth_getTokensByPageAndSize`
- `eth_getTransactionsByPageAndSize`
- `eth_getValidatorsByPageAndSize`
- `eth_getAllWhitelistedAssets`
- And all other methods available in the section [Supported EVM Methods](../json-rpc-methods/quick-start)

TODO: section dedicated Supported EVM Methods

## Cosmos gRPC Support

Helios also implements Cosmos SDK's gRPC endpoints, enabling direct interaction with Cosmos-specific features like staking, governance, and IBC transfers.

### Available Endpoints

- Mainnet gRPC: `grpc.helioschain.network:9090`
- Testnet gRPC: `grpc-testnet.helioschain.network:9090`

### Example: Querying Validators using Cosmos gRPC

```js
const { createWallet } = require("@helios-chain-labs/helios-ts-wallet");
const { QueryClient } = require("@cosmjs/stargate");
async function getValidators() {
    const client = await QueryClient.connect("grpc-testnet.helioschain.network:9090");
    const response = await client.staking.validators({
        status: "BOND_STATUS_BONDED",
        pagination: {
            key: new Uint8Array(),
            offset: Long.fromNumber(0),
            limit: Long.fromNumber(100),
            countTotal: true
        }
        }
    );
    console.log("Active Validators:", response.validators);
}
getValidators();
```

### Supported Cosmos Modules
- `x/auth`: Account management
- `x/bank`: Token transfers
- `x/staking`: Validator operations
- `x/gov`: Governance proposals
- `x/ibc`: Inter-blockchain communication

## Using Both APIs Together

Helios's dual API support allows developers to leverage the best of both worlds. For example, you can:
- Use EVM APIs for smart contract interactions
- Use Cosmos APIs for staking and governance
- Combine both for cross-chain applications

### Example: Combined API Usage

```js
const { ethers } = require("ethers");
const { createWallet } = require("@helios-chain-labs/helios-ts-wallet");
async function crossChainInteraction() {
    // EVM interaction
    const evmProvider = new ethers.JsonRpcProvider("https://testnet1.helioschainlabs.org");
    const evmBalance = await evmProvider.getBalance(address);
    // Cosmos interaction
    const cosmosWallet = await createWallet();
    const stakingInfo = await cosmosWallet.getStakingInfo();

    console.log("EVM Balance:", ethers.formatEther(evmBalance));
    console.log("Staking Info:", stakingInfo);
}
```

## Best Practices

1. **RPC Node Selection**
   - Use dedicated RPC nodes for production applications
   - Implement fallback RPC endpoints for reliability

2. **Error Handling**
   - Always implement proper error handling for both API types
   - Monitor for chain-specific errors and handle them appropriately

3. **Rate Limiting**
   - Respect API rate limits
   - Implement request caching when appropriate

4. **Security**
   - Never expose private keys in your code
   - Use environment variables for sensitive configuration
   - Validate all responses before processing

For more detailed information about specific API endpoints and methods, refer to the [Helios API Reference](../json-rpc-methods/methods/eth_chainId).

References:

1. [https://docs.ethers.org/v5/](https://docs.ethers.org/v5/) - Ethers Typescript Library
2. [@helios-chain-labs/helios-ts-wallet](https://www.npmjs.com/package/@helios-chain-labs/helios-ts-wallet) - Helios Typescript Library

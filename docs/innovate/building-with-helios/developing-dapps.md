# Developing dApps

Helios provides a robust EVM-compatible and Cosmos SDK-based environment for developers to build decentralized applications (dApps) with enhanced interoperability, governance, and security features. Whether you’re building a DeFi platform, AI-driven dApp, or a cross-chain solution, Helios enables integration with multiple ecosystems.

### Why Build on Helios?

- **EVM & Cosmos SDK Support** – Deploy smart contracts using Solidity (EVM) or leverage Cosmos modules for advanced blockchain functionalities.
- **Interchain Compatibility** – Directly interact with multiple chains through Hyperion Modules and I-PoSR staking consensus.
- **Built-in Governance & Reputation System** – Smart contract execution can be influenced by on-chain governance and validator reputation.
- **Optimized Staking & Economic Model** – dApps can integrate weighted staking models, benefiting from multi-asset security.

### Accessing the Helios Testnet

Helios Testnet provides developers with full access to RPC and gRPC endpoints for testing and integrating their dApps. **Swagger UI** is available for both endpoints, offering an interactive interface to explore and test available API methods.

- **EVM-Compatible JSON-RPC (Port 8545)**  
  [https://testnet1.helioschainlabs.org/docs](https://testnet1.helioschainlabs.org/docs)  
  This endpoint exposes Ethereum-style JSON-RPC methods (port 8545) for interacting with the EVM layer. Developers can use it to deploy and test smart contracts with familiar tools like **Web3.js**, **Ethers.js**, or **Hardhat**.

- **Cosmos gRPC Gateway (Port 1317)**  
  [https://testnet1-grpc.helioschainlabs.org/docs](https://testnet1-grpc.helioschainlabs.org/docs)  
  This endpoint provides access to Cosmos SDK modules via the REST API (gRPC-gateway, typically on port 1317). It supports interactions with **governance**, **staking**, **accounts**, and **interchain modules** built into the Cosmos layer.

> **What is Swagger UI?**  
> Swagger is a web-based interface that allows developers to visualize and interact with the API’s endpoints. It provides live documentation and enables test calls directly from the browser, making it easier to understand request/response structures.



## Helios Development Environment Setup

### 1. Install Required Dependencies

To start developing, ensure you have the following tools installed:

```sh
# Node.js & Yarn (for dApp development)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
npm install --global yarn

# Hardhat (for EVM smart contract deployment)
npm install --global hardhat

# Helios SDK (JS/TS Packages)
npm install @helios-chain-labs/proto @helios-chain-labs/transactions @helios-chain-labs/helios-ts-wallet
```

### 2. Connecting to Helios Testnet

Before deploying smart contracts or interacting with Helios APIs, connect to the Helios Testnet:

#### **EVM Connection (Web3.js / ethers.js)**

```js
const { ethers } = require("ethers");

// Connect to Helios Testnet RPC
const provider = new ethers.JsonRpcProvider("https://testnet1.helioschainlabs.org");

// Load Wallet (Using Private Key)
const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

console.log(`Connected to Helios as ${wallet.address}`);
```

#### **Cosmos SDK Connection Example (Helios SDK)**

```js
const { createWallet, signAndBroadcastTx } = require("@helios-chain-labs/helios-ts-wallet");

const LOCALNET_CHAIN = {
  chainId: 4141,
  cosmosChainId: '4141',
  rpcEndpoint: 'https://testnet1.helioschainlabs.org',
  bech32Prefix: 'helios',
  currency: {
    coinDenom: 'HELIOS',
    coinMinimalDenom: 'ahelios',
    coinDecimals: 18,
  },
};

// Generate a new Helios Wallet
const wallet = await createWallet();

// Get address and fund it via testnet faucet
console.log("Your Helios Address:", wallet.address);

// Create the vote transaction
const txVote = createTxMsgVote(
  LOCALNET_CHAIN,
  sender,
  LOCALNET_FEE,
  '', // Optional memo
  {
    proposalId: proposalId,
    voter: sender.accountAddress,
    option: voteOption
  }
);
```

💡 Testnet tokens can be requested from the official [Helios Faucet](https://faucet.helioschain.network).

## Deploying Smart Contracts on Helios (EVM)

Helios is fully EVM-compatible, meaning you can deploy Solidity smart contracts using Hardhat or Foundry.

### 1. Create a New Hardhat Project

```sh
npx hardhat init
cd my-helios-project
```

### 2. Configure Hardhat for Helios

Modify `hardhat.config.js`:

```js
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    heliosTestnet: {
      url: "https://testnet1.helioschainlabs.org",
      accounts: ["YOUR_PRIVATE_KEY"],
    },
  },
};
```

### 3. Write a Sample Smart Contract

Create `contracts/MyContract.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyContract {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function updateMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
```

### 4. Compile & Deploy

```sh
npx hardhat compile
npx hardhat run --network heliosTestnet scripts/deploy.js
```

## Interacting with Helios Smart Contracts (EVM)

Once deployed, you can interact with smart contracts via `ethers.js`:

```js
const contract = new ethers.Contract(
  "YOUR_CONTRACT_ADDRESS",
  ["function updateMessage(string _newMessage) external"],
  wallet
);

await contract.updateMessage("Hello from Helios!");
```

## Developing dApps with Helios APIs

Helios provides multiple on-chain APIs for developers to integrate into their dApps.

### 1. Querying On-Chain Data (EVM RPC)

```js
const balance = await provider.getBalance(wallet.address);
console.log(`Wallet balance: ${ethers.formatEther(balance)} HELIOS`);
```

### 2. Querying On-Chain Data (Cosmos REST API)

```sh
curl -X GET "https://api.helioschain.network/cosmos/staking/v1beta1/validators"
```

## Summary

Helios enables developers to build scalable, multi-chain dApps by offering:

- Full EVM & Cosmos SDK compatibility
- Interchain staking & governance integration
- Hyperion-powered cross-chain interactions
- Developer tools (CLI, SDK, APIs, UI)

🚀 **Ready to Build?**
Start developing today with **Helios Testnet** and **Helios SDK**!

📌 **Helios Testnet Faucet**: [faucet.helioschain.network](https://faucet.helioschain.network)

📌 **Helios Explorer**: [explorer.helioschain.network](https://explorer.helioschain.network)

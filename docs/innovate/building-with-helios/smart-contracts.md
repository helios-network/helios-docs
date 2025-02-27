# Smart Contracts

## Overview

Smart contracts on Helios blockchain are written in Solidity and executed on our embedded Ethereum Virtual Machine (EVM). Helios prioritizes full EVM compatibility, allowing developers to seamlessly port their existing smart contracts from other EVM-compatible chains without modification.

## Key Features

### 1. Full EVM Compatibility
- Support for all Ethereum standards (ERC20, ERC721, ERC1155, etc.)
- Direct deployment of existing Solidity contracts
- Compatible with standard Ethereum development tools (Hardhat, Foundry, Remix)

### 2. Cross-Chain Oracle Capabilities
Helios introduces unique on-chain oracle functionality through Hyperion clients, enabling smart contracts to:
- Query data from connected blockchain networks
- Access external smart contract states
- Validate cross-chain information through decentralized consensus

### 3. Hyperion Integration
Smart contracts can interact with other blockchain networks through Hyperion modules, providing:
- Real-time data fetching from external chains
- Consensus-driven validation of external contract states
- Secure cross-chain contract interactions

## Using Hyperion in Smart Contracts

### Basic Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrossChainReader {

    event DataReceived(bytes32 functionName, bytes32 result);
    // Hyperion interface for cross-chain calls
    function getExternalData(uint256 chainId, address contractAddress, bytes4 selector) external {
        hyperion.call(chainId, contractAddress, selector);
    }
    // Callback function for Hyperion results
    function onCallReceipt(bytes32 functionName, bytes32 result) private {
        emit DataReceived(functionName, result);
        // Process the result
    }

}
```

### Example: Reading External Total Supply

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenReader {
    uint256 public lastTotalSupply;
    
    // Read total supply from Ethereum mainnet
    function readETHTotalSupply() external {
        // WETH contract on Ethereum
        address wethContract = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
        // totalSupply() selector
        bytes4 selector = 0x18160ddd;
        hyperion.call(1, wethContract, selector);
    }

    function onCallReceipt(bytes32 functionName, bytes32 result) private {
        lastTotalSupply = uint256(result);
    }
}
```

## Development Environment Setup

### 1. Configure Hardhat for Helios

Create `hardhat.config.js`:

```js
var secret = require("./secret");
require("@nomiclabs/hardhat-ethers");
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');

module.exports = {
    solidity: "0.8.20",
    networks: {
        helios: {
            url: "https://dataseed.helioschain.network",
            chainId: 4242,
            accounts: [secret.PRIVATE_KEY]
        }
    }
};
```

Create `secret.js`:

```js
module.exports = {
    PRIVATE_KEY: "PRIVATE_KEY"
};
```

### 2. Deploy Smart Contracts

```bash
npx hardhat compile
npx hardhat deploy --network helios
```


## Best Practices

1. **Hyperion Call Management**
   - Always handle timeouts for cross-chain calls
   - Implement fallback mechanisms for data fetching
   - Validate received data before processing

2. **Gas Optimization**
   - Cache external data when possible
   - Batch Hyperion calls for multiple data points
   - Use appropriate data types to minimize storage costs

3. **Security Considerations**
   - Implement access controls for critical functions
   - Validate cross-chain data before use
   - Handle potential revert scenarios in callbacks

## Available Tools and Resources

- [Helios Remix Plugin](https://remix.helioschain.network)
- [Hyperion SDK Documentation](https://docs.helioschain.network/hyperion)

For more detailed information about specific smart contract functionalities and examples, refer to the [Smart Contract Reference](../reference/smart-contracts).

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
      url: "https://dataseed-testnet.helioschain.network",
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

### 4. Write a deploy script file

Create `scripts/deploy.js`:

```js
const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.getContractFactory("MyContract");
  const ct = await contract.deploy();

  await ct.deployed();

  console.log(
    `Contract deployed to ${ct.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

### 4. Run the commands to deploy the contract

```
npx hardhat compile
npx hardhat run --network heliosTestnet scripts/deploy.js
```

## Overview
Hyperion Modules in Helios handle cross-chain communication, transaction validation, and decentralized bridging.  

They enable Helios nodes to interact with external blockchains like Ethereum, AVAX, Polygon, and BNB Chain by fetching data directly from external RPC endpoints.

---

## What Are Hyperion Modules?
Hyperion Modules operate as secure interchain relayers, responsible for:
- Monitoring external blockchains for transactions (deposits, withdrawals).
- Relaying cross-chain transaction data to Helios for validation.
- Enforcing consensus mechanisms to prevent fraudulent or double-spent transactions.

### Key Features of Hyperion Modules
- Direct RPC Connection: Unlike traditional light clients, Hyperion Modules fetch data from external RPC endpoints instead of running full node infrastructure.
- Stake-Weighted Reputation Model: Hyperion relayers are prioritized based on their staking power and reputation score.
- Multi-Chain Support: Separate modules exist for Ethereum, AVAX, BNB Chain, and other chains.

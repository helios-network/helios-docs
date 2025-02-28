# Smart Contracts

## Overview

Smart contracts on Helios blockchain are written in Solidity and executed on our embedded Ethereum Virtual Machine (EVM). Helios prioritizes full EVM compatibility, allowing developers to seamlessly port their existing smart contracts from other EVM-compatible chains without modification.

![image](/img/innovate/helios-smart-contracts.png)

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
- Bridging tokens

### 4. Autonomous CRON Tasks
Smart contracts can initiate CRON tasks:
- Running same function over specific range of blocks 
- Executing daily transfer of fees
- Make Daily Report of the smart contract work

### 5. Interacting With AI Agents
Helios introduce unique on-chain AI agent customisable functionnality, enabling smart contracts to:
- Query specific AI agent over your node

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

For more detailed information about specific smart contract functionalities and examples, refer to the [Smart Contract Reference](../building-with-helios/smart-contracts).

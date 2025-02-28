# On-Chain ETFs on Helios

## Overview

On-chain ETFs (Exchange-Traded Funds) on Helios leverage the capabilities of smart contracts to provide automated and transparent management of digital assets. By utilizing smart contracts that can interact with external contracts and execute scheduled tasks (such as CRON jobs), it is possible to create ETFs that maintain a balanced portfolio of multiple assets, such as BTC, ETH, and others.

![image](/img/innovate/etf-onchain.png)

## Key Features

- **Automated Asset Management**: When a user purchases ETF tokens, the smart contract automatically buys the underlying assets (e.g., BTC, ETH, SOL) on a decentralized exchange (DEX) and stores them in the contract.
  
- **Dynamic Token Issuance**: The smart contract issues ETF tokens based on the value of the underlying assets, allowing users to buy and sell their shares easily.

- **Automatic Rebalancing**: The smart contract monitors the value of the assets and can automatically rebalance the portfolio. For instance, if the price of BTC doubles, the contract can sell a portion of BTC to buy more ETH and SOL, maintaining a balanced allocation.

- **Scheduled Tasks**: The smart contract can be programmed to execute internal CRON tasks at regular intervals (e.g., every 1000 blocks) to check the asset distribution and trigger rebalancing actions if necessary.

- **Transparent Operations**: All transactions and asset management actions are recorded on the blockchain, ensuring transparency and trust for all participants.

## Example of How to Use an ETF from the User's Perspective

Users can easily purchase ETF tokens on decentralized exchanges (DEXs) just like any other token. The process involves a simple swap, allowing users to exchange their preferred cryptocurrency (such as USDT, ETH, or others) for ETF tokens.

### Steps to Buy ETF Tokens

1. **Access a DEX**: Navigate to a decentralized exchange platform that supports the ETF tokens you wish to purchase.

2. **Select the Token Pair**: Choose the token you want to swap (e.g., USDT) and select the ETF token (e.g., ETF-BTCETHSOL) as the target token.

3. **Initiate the Swap**: Enter the amount of the base token you want to swap for ETF tokens. The DEX will calculate the equivalent amount of ETF tokens you will receive based on the current market rate.

4. **Confirm the Transaction**: Review the transaction details, including any fees, and confirm the swap. The DEX will execute the transaction, and the ETF tokens will be credited to your wallet.

5. **Hold or Manage Your ETF Tokens**: Once you own ETF tokens, you can hold them as an investment or interact with the protocol that manages the ETF. This protocol will automatically handle the underlying assets, ensuring that the ETF maintains its intended balance and performs rebalancing as needed.

### Interacting with the ETF Protocol

Users can also interact directly with the ETF protocol to manage their investments. This may include actions such as:

- **Buying Additional ETF Tokens**: Users can purchase more ETF tokens directly through the protocol, which will handle the necessary asset purchases and allocations.

- **Redeeming ETF Tokens**: Users can redeem their ETF tokens for the underlying assets, allowing them to withdraw their share of the portfolio.

- **Monitoring Performance**: Users can track the performance of their ETF investment through the protocol's dashboard, which provides insights into asset allocations, historical performance, and rebalancing actions.

By utilizing DEX platforms and interacting with the ETF protocol, users can easily invest in a diversified portfolio of digital assets while benefiting from the automated management features of on-chain ETFs.

## For developers

Developers have the opportunity to create their own protocols on the Helios blockchain. We offer an incentive program designed to encourage and support the development of innovative projects within the Helios ecosystem.

If you are an enterprise or a developer interested in collaborating with us and starting the process to access these incentives, please reach out to us through our social media channels for further discussion.

### Example of an ETF Smart Contract

Here is a simplified example of a smart contract that illustrates the creation of an ETF combining BTC, SOL and ETH, with an internal CRON task for rebalancing:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ETF {
    address public owner;
    uint256 public lastRebalanceBlock;
    uint256 public constant REBALANCE_INTERVAL = 1000;
    uint256 public cronSubscriptionId;

    struct Asset {
        uint256 amount;
        uint256 weight; // Weight in basis points (e.g., 3333 for 33.33%)
    }

    mapping(address => Asset) public assets; // Mapping of asset addresses to their amounts and weights
    
    constructor() {
        owner = msg.sender;
        // Initial allocation
        assets[0xBTCAddress] = Asset(0.0035 ether, 3333); // BTC
        assets[0xETHAddress] = Asset(0.12 ether, 3333); // ETH
        assets[0xSOLAddress] = Asset(1.81 ether, 3333); // SOL
        lastRebalanceBlock = block.number;

        uint4 callBackFunction = 0xffffff; // rebalance()
        uint256 maximumGasFeeAccepted = 50 / 1_000_000_000; // 50 Gwei
        cronSubscriptionId = block.cron.subscribe(REBALANCE_INTERVAL, callBackFunction, maximumGasFeeAccepted)
    }

    function buyETF(uint256 usdtAmount) external {
        // Logic to buy assets based on the USDT amount
        // Update asset amounts accordingly
    }

    function sellETF(uint256 etfAmount) external {
        // Logic to sell assets based on the ETF amount
        // Update asset amounts accordingly
    }

    function rebalance() external {
        require(block.number >= lastRebalanceBlock + REBALANCE_INTERVAL, "Rebalance not due yet");
        // Logic to check asset weights and rebalance if necessary
        // For example, if BTC exceeds 40%, sell some BTC and buy ETH and SOL
        lastRebalanceBlock = block.number;
    }

    // Additional functions for selling ETF, getting balances, etc.
}
```

## Resources

For more information on Helios and smart contracts, you can refer to the following resources:

- [Helios Smart Contracts](../building-with-helios/smart-contracts.md)
- [Decentralized Exchanges (DEX) Overview](https://chain.link/education-hub/what-is-decentralized-exchange-dex)
- [Understanding ETFs](https://www.investopedia.com/terms/e/etf.asp)

By utilizing these resources, you can gain a deeper understanding of how on-chain ETFs work and how to create and manage them effectively on the Helios Blockchain.

# Moving Chains Assets

## Overview
Helios enables native cross-chain asset transfers without relying on traditional wrapped token bridges. Instead of centralized custodians or synthetic assets, Helios uses Hyperion Modules and Interchain Proof of Stake and Reputation (I-PoSR) to facilitate trust-minimized asset movement.

This system ensures:
- Secure transfers between multiple blockchains without the risk of asset duplication.
- Validator-backed bridging, reducing reliance on trusted third parties.
- Automatic governance oversight, ensuring only approved assets are supported.

---

## How Helios Bridging Works

### 1. Depositing Assets into Helios
When a user wants to bring assets into Helios, they:
1. Send their tokens to a Hyperion-managed deposit contract on the source chain.
2. Hyperion nodes monitor and verify the deposit event.
3. Once verified, the equivalent amount is minted on Helios Chain as an IBC-compatible asset.

### 2. Using Bridged Assets on Helios
- Once inside Helios, assets can be staked in the I-PoSR consensus, used in DeFi applications, or transferred further.
- The weight of each bridged asset is determined by governance and can be adjusted dynamically.

### 3. Withdrawing Assets Back to the Source Chain
When a user wants to move assets back:
1. The tokens are burned on Helios.
2. A withdrawal request is submitted and verified by Hyperion Modules.
3. Once validated, the original asset is unlocked on the source chain and sent to the user’s wallet.

This mechanism ensures that each bridged asset is fully backed by its original counterpart at all times.

---

<!-- ## Supported Chains and Assets

Helios is designed to interact with multiple blockchain ecosystems, including:

| Blockchain | Supported Assets |
|--------------|----------------|
| Ethereum | ETH, USDT, USDC, WBTC |
| Cosmos | ATOM, OSMO, JUNO |
| Solana | SOL, USDC |
| BNB Chain | BNB, BUSD |

New assets can be added through governance proposals, ensuring a decentralized approval process.

--- -->

## Advantages of Helios Bridging System

### 1. Security-Backed Bridges
- Unlike traditional token bridges, Helios relies on validators and Hyperion Modules rather than centralized multi-signatures.
- No single point of failure, reducing attack vectors.

### 2. Efficient & Cost-Effective
- No need for wrapped assets, reducing unnecessary transactions.
- Lower gas fees compared to traditional Ethereum-based bridges.

### 3. Governance-Controlled Asset Integration
- Assets can be added, removed, or adjusted based on community voting.
- Validators have an incentive to maintain a balanced and diverse asset pool.

---

## How to Bridge Assets on Helios

### Using Helios Gate (Recommended)
For non-technical users, bridging is available through [Helios Gate](https://portal.helioschain.network):
1. Connect your wallet (MetaMask, Keplr, Leap, etc.).
2. Choose the asset and source chain.
3. Approve the deposit transaction.
4. Receive your assets on Helios.

### Using Hyperion Modules (Advanced Users)
For developers and validators, assets can be bridged manually using Hyperion RPC endpoints.

Example deposit request (Ethereum → Helios):

```sh
curl -X POST https://hyperion.helios.network/deposit \
     -H "Content-Type: application/json" \
     -d '{
       "from": "0x1234567890abcdef...",
       "asset": "ETH",
       "amount": "5",
       "destination": "helios1xyz...",
       "network": "Ethereum"
     }'

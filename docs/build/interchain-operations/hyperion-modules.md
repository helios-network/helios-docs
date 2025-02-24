# Utilizing Hyperion Modules

## Overview
Hyperion Modules in Helios handle cross-chain communication, transaction validation, and decentralized bridging.  

They enable Helios nodes to interact with external blockchains like Ethereum, AVAX, Polygon, and BNB Chain by fetching data directly from external RPC endpoints.

---

## What Are Hyperion Modules?
Hyperion Modules operate as secure interchain relayers, responsible for:
- Monitoring external blockchains for transactions (deposits, withdrawals, governance proposals).
- Relaying cross-chain transaction data to Helios for validation.
- Enforcing consensus mechanisms to prevent fraudulent or double-spent transactions.

### Key Features of Hyperion Modules
- Direct RPC Connection: Unlike traditional light clients, Hyperion Modules fetch data from external RPC endpoints instead of running full node infrastructure.
- Stake-Weighted Reputation Model: Hyperion relayers are prioritized based on their staking power and reputation score.
- Multi-Chain Support: Separate modules exist for Ethereum, AVAX, BNB Chain, and other chains.

---

## How Hyperion Modules Work
### 1️. Connecting to External RPCs
Hyperion Modules do not require running a full node or light client.  
Instead, each Hyperion instance queries public or private RPC endpoints for external chain data.

Example RPC sources:
| Blockchain | Hyperion Fetches Data From |
|--------------|--------------------------------|
| Ethereum | Infura, Alchemy, or custom RPC nodes |
| Cosmos | Official IBC relayers or Cosmos Hub RPC |
| BNB Chain | Binance RPC endpoints |

### 2️. Detecting Cross-Chain Events
When a user deposits assets on an external chain, Hyperion:
- Listens for the event using the configured RPC endpoint.
- Fetches transaction details and submits them to Helios.
- Ensures a multi-node consensus before executing the operation.

### 3️. Validating Transactions
- Multiple Hyperion nodes must confirm an event before it is processed.
- The system prevents double-spending and malicious transactions.
- Validators with higher reputation scores have greater influence over Hyperion-based transaction approvals.

---

## Managing Hyperion Modules on Your Node
### Enabling & Disabling Hyperion Modules
Hyperion Modules can be managed directly through the Helios Node UI Manager, available on your local node dashboard.

1. Access the Node UI Manager
   - Open it in your browser.
   - Navigate to Hyperion Modules settings.

2. Enable or Disable Specific Modules
   - Select which blockchains your node will support.
   - Click Enable to activate a Hyperion relay.
   - Click Disable to stop relaying transactions for that chain.

3. Monitor Hyperion Activity
   - View real-time logs of relayed transactions.
   - Check reputation scores for interchain validation.

> Note: If you disable a Hyperion Module, your node will no longer participate in relaying transactions for that chain, but it will still function as a normal Helios validator.

---
<!-- 
## Supported Hyperion Modules
Hyperion Modules are available for the following blockchains:

| Blockchain | Supported Operations |
|--------------|----------------|
| Ethereum | Deposits, Withdrawals, Governance Relays |
| Cosmos | IBC Transfers, Staking Updates |
| Solana | Cross-Chain Asset Transfers |
| BNB Chain | Token Bridging, Validator Coordination |

New Hyperion Modules can be added via governance proposals, ensuring decentralized control over interoperability expansion.

--- -->

## How Hyperion Works in Cross-Chain Transactions
### 1️. Detecting Transactions on External Chains
Hyperion Modules monitor blockchain events (e.g., asset deposits on Ethereum).

Example:
- A user deposits 10 ETH into the Helios bridge contract on Ethereum.
- The Ethereum Hyperion Module detects the deposit event via RPC.
- The transaction is propagated to other Hyperion nodes for validation.

### 2. Consensus Validation & Reputation Scoring
- Multiple Hyperion nodes must confirm the transaction before processing.
- Validators with higher stake-weighted reputation have more influence.
- Once consensus is reached, Helios mints an equivalent amount of assets on the Helios Chain.

### 3. Executing the Cross-Chain Operation
- If enough Hyperion nodes confirm a transaction, it is finalized and recorded on Helios.
- Transactions are automatically broadcasted for transparency.

---

## Hyperion Reputation System
Since Hyperion Modules secure cross-chain operations, they use a reputation system to reward trusted validators.

Validators gain reputation for:
- Successfully relaying cross-chain transactions.
- Maintaining high uptime & accurate event confirmations.
- Participating in governance and staking.

Validators lose reputation if:
- They fail to validate transactions properly.
- They attempt to manipulate or delay transactions.
- They relay incorrect data (e.g., double-spending attempts).

### Slashing & Reputation Penalties
Malicious validators may:
- Lose reputation points, reducing governance influence.
- Be excluded from Hyperion participation for a set period.
- Have their stake slashed if repeated bad behavior is detected.

---

## Setting Up Hyperion on Your Node
### Using CLI (Heliades)
You can enable Hyperion Modules manually using the Heliades CLI.

Example: Enabling Ethereum Hyperion Module
```sh
heliades hyperion enable ethereum
```

Example: Disabling Cosmos Hyperion Module
```sh
heliades hyperion disable cosmos
```

Check Active Hyperion Modules
```sh
heliades hyperion list
```

---

## Accessing Hyperion via RPC API
For developers, Hyperion Modules expose an RPC API for direct interaction.

Example: Fetching Recent Hyperion Transactions
```sh
curl -X GET https://hyperion.helioschain.network/transactions
```

Example: Requesting a Manual Cross-Chain Validation
```sh
curl -X POST https://hyperion.helioschain.network/validate -H "Content-Type: application/json" -d '{
       "tx_id": "0xabc123",
       "network": "Ethereum"
     }'
```

---

## Why Hyperion Matters for Helios
- Decentralized cross-chain validation  
  - No need for centralized bridges—Hyperion ensures transactions are verified by multiple independent nodes.
- Scalable Interoperability  
  - Support for new chains can be added via governance-approved Hyperion Modules.
- Enhanced Security Through Reputation Scoring  
  - Validators with a strong history of accurate interchain validation gain increased governance power.

# Becoming a Validator

This guide explains how to become a validator on Helios, either using Heliades (CLI), the EVM-based staking contract, or the Helios Manager UI. Validators play a crucial role in securing the network, processing transactions, and participating in governance.

---

## Requirements for Becoming a Validator

Before setting up a validator, ensure that you meet the technical and financial requirements.

### Minimum Technical Requirements
- A running Helios node (see [Running a Node](../running-a-node/maintaining-upgrading))
- Stable internet connection (preferably with a static IP)
- Sufficient hardware (see [System Requirement](../running-a-node/system-requirements))

### Staking Requirement
- Validators must stake whitelisted assets to participate in consensus.
- Validators can lock HELIOS tokens to offer delegation APY boosts.
- The more HELIOS tokens a validator locks, the higher the APY boost they provide to delegators.

---

## 1. Creating a Validator Using Heliades (CLI)

To create a validator via CLI, follow these steps:

### Step 1: Generate a Validator Key
```sh
heliades keys add my-validator
```

This will create a new key and display the address and mnemonic seed phrase.

### Step 2: Create the Validator
```sh
heliades tx staking create-validator \
  --amount 1000000uatom \
  --pubkey $(heliades tendermint show-validator) \
  --moniker "MyValidator" \
  --chain-id 4242 \
  --commission-rate "0.10" \
  --commission-max-rate "0.20" \
  --commission-max-change-rate "0.01" \
  --min-self-delegation "1" \
  --from my-validator
```

Key Parameters Explained:
- `--amount` → The amount of staked tokens.
- `--commission-rate` → The commission fee percentage (default is 10%).
- `--min-self-delegation` → Minimum self-stake required.

### Step 3: Confirm Your Validator Status
```sh
heliades query staking validator $(heliades keys show my-validator --bech val -a)
```

---

## 2. Creating a Validator Using EVM Smart Contract

Helios provides an EVM-based validator creation system through a precompiled contract at:
```
0x0000000000000000000000000000000000000806
```
This contract allows on-chain validator registration using EVM-compatible wallets (e.g., MetaMask, Hardhat, Foundry, Web3.js, ethers.js).

### Example: Registering a Validator via Web3.js
```javascript
const ethers = require("ethers");

const provider = new ethers.JsonRpcProvider("https://dataseed.helioschain.network");
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const stakingContract = new ethers.Contract(
    "0x0000000000000000000000000000000000000806",
    ["function createValidator(address _validator, uint256 _amount) public"],
    wallet
);

async function createValidator() {
    const tx = await stakingContract.createValidator(wallet.address, ethers.parseEther("100"));
    await tx.wait();
    console.log("Validator successfully created!");
}

createValidator();
```

### EVM Validator Operations
| Action                 | Function Name |
|------------------------|--------------|
| Create Validator      | `createValidator(address, uint256)` |
| Edit Validator Details | `editValidator(address, string, uint256, uint256)` |
| Delegate Tokens      | `delegate(address, uint256)` |
| Unstake Tokens      | `undelegate(address, uint256)` |

For more details, check the Helios Network GitHub repository with contract interaction scripts.

---

## 3. Managing Your Validator with Helios Manager UI

Helios provides a user-friendly web interface for node management called Helios Manager UI.

### Features:
- Create & Manage Validators via an intuitive dashboard.
- One-click deployment via Docker for simplified validator setup.
- Live Monitoring of validator performance, earnings, and uptime.
- Governance Participation directly from the UI.
- Automatic Updates & Maintenance to keep nodes running smoothly.

### How to Use:
1. Access Helios Manager UI:  
   Visit locally your node manager and navigate to the Validator Management section.
2. Create or Edit a Validator:  
   - Fill in details such as moniker name, commission rate, and self-stake.
   - Click Submit to create or update your validator.
3. Monitor Performance:  
   - Track delegations, APY boost, and node health in real time.

---

## 4. Helios Boost for Validators

### Increasing APY for Delegators
Validators can lock HELIOS tokens to increase APY rewards for their delegators.

- The closer the locked HELIOS amount is to the total delegated assets, the higher the APY boost.
- Validators with the highest HELIOS collateral appear first in Helios Gate, attracting more delegators.
- If HELIOS collateral is insufficient, the boost decreases, decentralizing delegation across multiple validators.

### Minimum HELIOS Requirement for Delegators
Validators can require delegators to stake a minimum amount of HELIOS to participate.

Example:
```sh
heliades tx staking set-minimum-stake --amount 50000helios --from my-validator
```

This encourages large holders to commit HELIOS tokens long-term, strengthening network security.

---

## 5. Important Considerations

- Reputation System: Validators earn or lose reputation based on uptime, governance participation, and security behavior.
- Slashing Risks: If a validator goes offline or commits fraud, staked assets are slashed.
- Governance Voting Power: Higher reputation validators gain more influence in governance.

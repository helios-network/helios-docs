# Staking Mechanics

## Introduction

Staking in Helios operates differently from traditional Proof-of-Stake (PoS) systems. Instead of staking the native HELIOS token directly, users stake whitelisted assets that contribute to the network's security. HELIOS tokens can be locked alongside these staked assets to provide an additional Helios Boost, which increases rewards but does not impact security or slashing.

This section explains:
- How staking works on Helios.
- The concept of weighted staking and governance-defined asset weights.
- The role of Helios Boost in staking rewards.
- The importance of validator collateralization in boosting delegation incentives.

---

## How Staking Works

### 1. Staking Whitelisted Assets
Helios supports multi-asset staking, meaning that users can stake a variety of tokens that have been approved by governance. Each asset has a weight, determined through decentralized governance, which affects how much influence it provides in securing the network.

- Users delegate their approved assets to validators.
- These assets contribute to the total staked amount of the validator.
- Governance determines the weight of each asset to ensure fair representation.
- Staked assets are subject to slashing in case of validator misbehavior.

### 2. HELIOS Boost: Locking HELIOS for Extra APY
While users do not stake HELIOS directly, they can lock HELIOS alongside their staked assets to earn additional APY. This mechanism:
- Boosts staking rewards based on governance-defined multipliers.
- Is not subject to slashing (HELIOS tokens remain safe even if the validator gets slashed).
- Encourages long-term participation by giving users an incentive to hold and lock HELIOS.

The closer the locked HELIOS weight is to the weight of the staked asset, the higher the boost the user receives. This incentivizes users to balance their HELIOS lockup with their staked assets.

Example:
| Staked Asset | Weighted Amount | HELIOS Locked | Boost %
|-------------|----------------|--------------|--------|
| 10 ETH     | 30,000 weight  | 30,000 HELIOS | 100% (Max Boost) |
| 10 ETH     | 30,000 weight  | 15,000 HELIOS | 50% |
| 10 ETH     | 30,000 weight  | 5,000 HELIOS | 16% |

---

## Validator Staking and Collateralization

Validators play a key role in securing the network, but they must meet specific conditions to provide maximum rewards to delegators.

### 1. Required HELIOS Collateral for Validators
Validators must lock HELIOS equal to their total delegated share to provide the maximum Helios Boost for delegators. 

- If a validator has 100,000 weighted assets staked, they must lock 100,000 HELIOS to maintain the maximum boost.
- If a validator does not lock sufficient HELIOS, the boost for all delegators decreases proportionally.
- Validators with higher HELIOS collateral will appear first in Helios Gate, incentivizing delegation.

This system prevents centralization, as large validators must stake more HELIOS to maintain high APY for delegators.

### 2. Setting Minimum HELIOS Stake for Delegators
Validators can set a minimum HELIOS stake requirement for delegators. This means:
- Delegators must meet the minimum HELIOS stake to delegate.
- More serious validators can attract larger delegations.
- Ensures that HELIOS is actively locked, increasing demand for the token.

---

## Governance-Managed Staking Parameters

All staking rules and parameters are governed by the Helios community. Users can vote on:
- Asset weight adjustments to balance multi-asset staking.
- Maximum staking caps per wallet to prevent supply inflation.
- Adjustments to Helios Boost rewards for long-term sustainability.
- Governance-decided inflation (1-3%) once the 5B HELIOS supply cap is reached.

This dynamic governance model ensures that Helios remains fair, decentralized, and scalable.

---

## Summary
- Users stake whitelisted assets, not HELIOS.
- HELIOS Boost increases staking rewards but is not slashable.
- Validators must collateralize HELIOS equal to their total staked amount for full delegation benefits.
- Governance decides staking parameters, asset weights, and reward distribution.

To start staking, visit the [Helios Portal](https://portal.helioschain.network) and delegate your assets.
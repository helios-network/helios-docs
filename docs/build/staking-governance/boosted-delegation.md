# Boosted Delegation and Rewards

## Introduction to Delegation Boost

### Why Delegation Boost?

- **Incentivize HELIOS Holding**: By locking HELIOS tokens, validators demonstrate deeper commitment to the network, encouraging stronger alignment with Helios’s long-term vision.  
- **Higher Rewards for Delegators**: Delegators who stake with validators that lock HELIOS may receive a higher APY (Annual Percentage Yield) on their staked assets, enhancing the overall return on investment.  
- **Support Network Decentralization**: Smaller validators can attract delegators by offering a higher reward boost if they lock sufficient HELIOS, creating a more level playing field.

### Key Points to Remember

- **Optional and Additive**: Delegation Boost is an optional, additive mechanism. Delegators can still stake the whitelisted asset(s) alone, but locking HELIOS for boost increases potential rewards.  
- **Validator Autonomy**: Each validator decides how much HELIOS to lock and whether to require delegators to also lock HELIOS.  
- **Separate from Security Stake**: HELIOS tokens locked for boosting are not subject to slashing, as they do not contribute to validator security power.

---

## How the Boost Mechanism Works (Technical Details)

### Validator HELIOS Collateral

Validators can lock a certain amount of HELIOS tokens as collateral to provide boosted rewards to their delegators. This HELIOS collateral is:

1. **Tracked On-Chain**: Once locked, the amount is recorded in the staking module or a specialized module.  
2. **Not Slashed**: Because it does not count toward consensus security, locked HELIOS is not slashed if the validator misbehaves. However, it often requires an unbonding period for withdrawal.  
3. **Proportional to Delegator Benefits**: The more HELIOS a validator locks relative to its total delegated stake, the higher the potential boost it can provide.

### Delegator’s Boost Eligibility

1. **Automatic Benefit**: If a validator offers a boost and **does not** set a HELIOS requirement, all delegators automatically receive the boosted APY for their staked assets.  
2. **Minimum HELIOS Requirement (Optional)**: Validators may mandate that delegators also lock a specified amount of HELIOS. If a delegator fails to meet this requirement, they either:
   - **Cannot delegate** (if the network rejects the delegation), or
   - **Receive no boost** (if the network allows delegation but grants zero boost).

Check your validator’s requirements before staking—some might require no additional HELIOS, while others might demand a specific minimum lock.

### Boost Calculation

The reward distribution logic incorporates a **boost multiplier** or **coefficient** derived from the ratio of the validator’s locked HELIOS collateral to its total delegated stake. The formula typically follows these principles:

- **Higher Ratio ⇒ Higher Boost**  
  - If a validator’s HELIOS collateral matches 100% of its staked asset value (a 1:1 ratio), it can offer the maximum boost (e.g., +50% APY on top of the base rewards).  
  - A lower ratio (e.g., 50%) yields a proportionally smaller boost.  
- **Cap on Boost**  
  - There is a protocol-defined maximum (e.g., a +50% cap). Even if a validator locks more HELIOS than its total stake, the additional collateral does not exceed the cap.  

A simple illustration might look like this:

| Validator’s HELIOS Collateral Ratio | Example Boost on Base APY |
| :---------------------------------: | :------------------------: |
| 0%  (No HELIOS)                     | +0% (No boost)            |
| 50%                                 | +25%                      |
| 100% (Fully matched)               | +50% (Max boost)          |

> **Note:** These numbers are for demonstration. Actual ratios and boost percentages may differ based on protocol parameters.

### Reward Distribution

Under the hood, Helios calculates validator and delegator rewards each block or epoch. Now, with Delegation Boost:

1. **Base Rewards** are the same as before, determined by the total stake in whitelisted assets.  
2. **Boosted Rewards** are added if the validator has HELIOS collateral. Delegators receive their share of these extra rewards in proportion to their stake.

If a validator enforces a minimum HELIOS requirement for delegators, only those who meet that requirement gain access to the boost portion of rewards.

---

## Interaction Between Delegators and Validators

### For Validators

1. **Locking HELIOS Collateral**  
   - When creating or editing a validator, specify how much HELIOS you want to lock as collateral.  
   - Example (CLI):  
     ```bash
     heliades tx staking edit-validator \
       --validator <YOUR_VALIDATOR_ADDRESS> \
       --helios-collateral <AMOUNT> \
       --from <WALLET_NAME>
     ```
2. **Minimum HELIOS Requirement**  
   - (Optional) Enforce that delegators also lock HELIOS tokens if they wish to receive boosted rewards (or to delegate at all, depending on configuration).  
   - Example (CLI):  
     ```bash
     heliades tx staking set-minimum-stake <AMOUNT> \
       --validator <YOUR_VALIDATOR_ADDRESS> \
       --from <WALLET_NAME>
     ```

### For Delegators

1. **Regular Delegation**  
   - If the validator you choose has HELIOS collateral but **no** minimum requirement, stake as usual. You automatically gain higher rewards.  
2. **Validator with a Minimum Requirement**  
   - Some validators may require that you lock a specific amount of HELIOS in addition to your primary stake.  
   - Follow the instructions provided by your chosen wallet or the command line to include HELIOS. For example, you might run:  
     ```bash
     heliades tx staking delegate \
       <VALIDATOR_ADDRESS> \
       <STAKE_AMOUNT_OF_ASSET> \
       --helios-collateral <HELIOS_AMOUNT> \
       --from <WALLET_NAME>
     ```
   - Check if your validator has a minimum HELIOS requirement before you proceed.

### Observing Your Boosted Rewards

- You can verify the increased rewards in your wallet dashboard, block explorer, or Helios Portal. Look for:
  - **Boosted APY** next to your delegation.
  - **Collateral Ratio** or a “Boost” icon indicating the validator’s HELIOS lock.

---

## Examples: Staking With vs. Without Boost

Consider a base APY of 10% without any HELIOS collateral.

- **No Boost**  
  - Validator locks no HELIOS.  
  - Delegator invests `1000 USD` worth of staking asset.  
  - Annual reward = `1000 * 10% = 100 USD`.
- **Partial Boost (e.g. 50% Collateral Ratio)**  
  - Validator locks 50% of their staked asset value in HELIOS.  
  - Delegator invests `1000 USD` worth of staking asset.  
  - If that translates to a +25% APY on top of the base 10%, the effective APY is 12.5%.  
  - Annual reward = `1000 * 12.5% = 125 USD`.
- **Full Boost (e.g. 100% Collateral Ratio)**  
  - Validator locks an amount of HELIOS equal to 100% of their staked asset value.  
  - The validator offers a maximum +50% boost, bringing the effective APY to 15%.  
  - Annual reward = `1000 * 15% = 150 USD`.

In all cases, Delegation Boost is **purely additive**—the base reward never decreases; it only rises with more HELIOS collateral locked.

---

## Governance and Validator Configuration

### Protocol Parameters

- **Max Boost Percentage**: Defines the upper bound of how much the collateral ratio can augment rewards.  
- **Boost Scaling Factor**: May adjust how quickly the boost increases with collateral ratio.  
- **Governance-Driven**: These parameters can be changed via on-chain governance proposals, allowing the community to refine economic incentives over time.

### Minimum Delegator HELIOS (Per Validator)

- Validators can specify a minimum HELIOS threshold required from delegators.  
- Default is typically `0`, meaning no requirement.  
- This setting **does not** override global governance; it is per-validator only.

### Unbonding and Slashing

- **Locked HELIOS**: Subject to an unbonding period when withdrawing collateral, similar to normal staking.  
- **Not Slashed**: HELIOS collateral is not at risk for validator misbehavior because it does not contribute to consensus security.  
- **Validator Misbehavior**: If a validator is slashed or jailed, the HELIOS collateral remains locked (and unbonding rules apply) but is not itself slashed.

### Edge Cases

- **Insufficient Validator Collateral**: If a validator’s HELIOS ratio falls, the APY boost for delegators decreases automatically.  
- **Delegators Not Meeting Requirements**: Depending on implementation, a delegator’s transaction may either fail or proceed with no boost if they do not provide the required HELIOS.

---

## Conclusion

**Delegation Boost** is a powerful incentive in the Helios ecosystem, rewarding both validators and delegators who choose to align with the network by locking HELIOS tokens. By increasing APYs for validators that match or exceed certain collateral thresholds, Helios fosters a more vibrant and decentralized community of participants. Whether you are a validator looking to attract delegations or a delegator seeking higher returns, **Boosted Delegation and Rewards** offers a flexible, transparent, and robust framework to enhance your staking experience.
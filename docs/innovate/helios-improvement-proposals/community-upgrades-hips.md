# How to Create a Helios Improvement Proposal (HIP)

A **Helios Improvement Proposal (HIP)** officially introduces improvements to the Helios project. Here's a clear and effective guide to creating a HIP.

---

## Step-by-Step Guide

### 1. Propose an Idea

- Create a [new issue](https://github.com/helios-network/HIP/issues) on GitHub.
- Briefly describe the objective or problem.
- Engage with the community to validate interest.

### 2. Define Objectives (Helios Desiderata - HD)

If your idea is approved:

- Draft an **HD** using this [HD template](https://github.com/helios-network/HIP/blob/main/hd-template.md).
- Submit it via a Pull Request (PR).

> :bulb: An HD clearly states the needs or objectives justifying the proposed improvement.

### 3. Create the HIP

Once the HD is approved by governance:

- Write a detailed **HIP** based on this [HIP template](https://github.com/helios-network/HIP/blob/main/hip-template.md).
- Submit the HIP either in a separate PR or in the same PR as the HD.

> :warning: Including a HIP in the same PR as the HD may delay approval.

---

## Storage and Numbering of HIPs

Each HIP/HD uses the PR number as its official identifier:

- Store your HIP or HD in a directory named `hip-<number>` or `hd-<number>`.
- Always include a `README.md` in this directory describing the proposal.

### Parent-Child HIPs

For complex proposals:

- Create "child" HIPs in a subdirectory named `hip-<number>.<index>` (e.g., `hip-10.1`).

## HIP Statuses

Each HIP progresses through the following statuses:

- **Draft**: Initial proposal without a HIP number.
- **Review**: Currently under review; a HIP number is assigned.
- **Stagnant**: No updates for 6 months; proposal is closed.
- **Withdrawn**: Proposal withdrawn by the author.

After successful review, the HIP is merged into the `main` branch and the PR is deleted.

---

## Writing Best Practices

- **Capitalize** specific roles (Validator, Relayer)

## Useful Resources

- [HIP-0: Governance](https://github.com/helios-network/HIP/issues/1) (Get inspired on this one)
- [Helios Glossary](https://github.com/helios-network/HIP/wiki/glossary)
- [HIP Book](https://helios-network.github.io/HIP)

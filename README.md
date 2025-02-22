# Helios Docs

## Overview
Welcome to the **Helios Documentation Repository**, the official knowledge hub for the Helios Blockchain. This repository contains developer guides, staking instructions, governance protocols, and interchain mechanics built using **Docusaurus**.

## Features
- **Built with Docusaurus** – A modern static site generator for efficient documentation.
- **Fully Open-Source** – Contributions from the Helios community are welcome.
- **Comprehensive Guides** – Covers everything from validator setup to governance voting.
- **Interchain Proof of Stake and Reputation (I-PoSR)** – Learn how Helios unifies decentralized networks.
- **Live Updates & Versioning** – Ensures up-to-date blockchain documentation.

## Installation
To set up the documentation locally, clone the repository and install dependencies:

```sh
$ git clone https://github.com/helios-network/helios-docs.git
$ cd helios-docs
$ yarn install
```

## Local Development
Run the development server with hot-reload capabilities:

```sh
$ yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

## Building the Documentation
Generate static files for deployment:

```sh
$ yarn build
```

This will create a `build/` directory containing the static site, ready for hosting.

## Deployment
If deploying to **GitHub Pages**, you can use the following commands:

### Using SSH:
```sh
$ USE_SSH=true yarn deploy
```

### Using HTTPS:
```sh
$ GIT_USER=<Your GitHub username> yarn deploy
```

This command builds the website and pushes the updates to the `gh-pages` branch.

## Contributing
We encourage community contributions! If you’d like to help improve the Helios Docs:
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request (PR) for review.

For major changes, please open an issue first to discuss potential updates.

## Community & Support
- **[Helios Website](https://helioschain.network/)**
- **[Helios Discord](#)**
- **[Helios Telegram](#)**

Join the Helios community and help build the future of decentralized networks!

---
**Unite. Build. Innovate.** 🚀
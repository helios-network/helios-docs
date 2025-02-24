# Installation Guide

This guide explains how to install and set up a Helios node using **Heliades**, the command-line interface (CLI) for interacting with the Helios blockchain. Whether you are running a **validator**, **full node**, or **light node**, this guide will walk you through the setup.

---

## 1. Pre-Installation Setup

Before installing Helios, ensure your system is fully updated and has the required dependencies.

### Updating System Packages

To ensure your system is running the latest software versions, update all existing packages by running:

```sh
sudo apt update && sudo apt upgrade -y
```

### Installing Essential Dependencies

Helios requires several core dependencies. Install them with:

```sh
sudo apt install curl git jq build-essential -y
```

This will install:
- **curl** - Used for downloading files from external sources.
- **git** - Required for cloning the Helios repository.
- **jq** - A command-line JSON processor, useful for managing Helios logs.
- **build-essential** - Includes essential compilation tools for building Helios binaries.

---

## 2. Installing Go (Golang)

Helios requires **Go** to build and run. Install the latest stable version:

```sh
curl -OL https://golang.org/dl/go1.21.4.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.4.linux-amd64.tar.gz
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc
go version
```

Expected output:

```
go version go1.21.4 linux/amd64
```

---

## 3. Installing Heliades (CLI) - Compilation

The **Heliades CLI** is the main tool used to interact with your Helios node. To install it manually:

1. Clone the official repository:
    ```sh
    git clone https://github.com/helios-network/helios-core.git
    ```

2. Navigate into the directory:
    ```sh
    cd helios-core
    ```

3. Build and install Heliades:
    ```sh
    make install
    ```

4. Verify installation:
    ```sh
    heliades version
    ```

---

## 4. Alternative: Using Pre-Built Releases

Instead of compiling from source, you can download a **pre-built release** from the Helios GitHub repository:

```sh
curl -L https://github.com/helios-network/helios-core/releases/latest/download/heliades-linux-amd64 -o heliades
chmod +x heliades
sudo mv heliades /usr/local/bin/
heliades version
```

For macOS, replace `heliades-linux-amd64` with `heliades-macos-amd64`.

---

## 5. Alternative: Running Helios with Docker

If you prefer a **Docker-based setup**, you can pull the latest Helios node image:

```sh
docker pull heliosnetwork/helios-node:latest
```

Run the node:

```sh
docker run -d --name helios-node -p 26656:26656 -p 26657:26657 heliosnetwork/helios-node
```

To check logs:

```sh
docker logs -f helios-node
```

---

## 6. Initializing Your Node

Each node requires initialization with a unique name (moniker). To set up your node:

- **Mainnet:**  
    ```sh
    heliades init <your-node-name> --chain-id helios-mainnet
    ```

- **Testnet:**  
    ```sh
    heliades init <your-node-name> --chain-id helios-testnet
    ```

---

## 7. Downloading the Genesis File

The **genesis file** is required to sync your node with the Helios network.

- **Mainnet:**  
    ```sh
    curl -O https://raw.githubusercontent.com/helios-network/networks/main/mainnet/genesis.json
    mv genesis.json ~/.helios/config/genesis.json
    ```

- **Testnet:**  
    ```sh
    curl -O https://raw.githubusercontent.com/helios-network/networks/main/testnet/genesis.json
    mv genesis.json ~/.helios/config/genesis.json
    ```

---

## 8. Setting Up Peers & Seeds

To connect to other nodes and start syncing, update the `config.toml` file:

```sh
nano ~/.heliades/config/config.toml
```

Replace `persistent_peers` with the latest peer list:

```toml
persistent_peers = "NODE_ID@IP_ADDRESS:26656,NODE_ID@IP_ADDRESS:26656"
```

Find the latest peers at:
- **Mainnet Peers:** [Helios Peers List](https://github.com/helios-network/networks/blob/main/mainnet/peers.txt)
- **Testnet Peers:** [Helios Testnet Peers](https://github.com/helios-network/networks/main/testnet/peers.txt)

Save the file and exit.

---

## 9. Running the Node

To start your node:

```sh
heliades start
```

Check logs:

```sh
tail -f ~/.heliades/logs/helios.log
```

---

## 10. Auto-Restart with Systemd (Recommended for Stability)

For continuous uptime, configure **systemd**:

```sh
sudo nano /etc/systemd/system/helios-node.service
```

Add:

```ini
[Unit]
Description=Helios Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which heliades) start --chain-id helios-mainnet
Restart=always
RestartSec=5
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

Enable the service:

```sh
sudo systemctl daemon-reload
sudo systemctl enable helios-node
sudo systemctl start helios-node
sudo systemctl status helios-node
```

---

## Final Notes

- For further configurations (RPC, APIs, and network settings), see **[Configuring Your Node](./configuration.md)**.
- Ensure your node is properly synced before participating in consensus.
- Monitor logs regularly to troubleshoot issues.

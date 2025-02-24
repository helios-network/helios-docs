# Configuring Your Node

After installing and initializing your Helios node, it is crucial to configure it properly to optimize performance, security, and network stability.

---

## 1. Configuration Files Overview

Helios stores configuration files in:

```sh
cd ~/.heliades/
```

### Main Configuration Files:
- `config.toml` → Network settings (P2P, RPC, APIs).
- `app.toml` → Application-specific settings (governance, staking, mempool).
- `client.toml` → CLI client settings (keyring backend, gas fees).
- `genesis.json` → Initial blockchain state.

Each file plays a role in node operation and should be adjusted based on your setup.

---

## 2. Network Configuration (`config.toml`)

Edit the main network settings:

```sh
nano ~/.heliades/config/config.toml
```

### Key Parameters to Adjust:

#### P2P Network Configuration
```toml
persistent_peers = "NODE_ID@IP_ADDRESS:26656,NODE_ID@IP_ADDRESS:26656"
```
- Replace with **current peer list** from [Helios Peers](https://github.com/helios-network/networks).
- Ensures node connectivity.

#### Minimum Gas Price (Preventing Spam)
```toml
minimum-gas-prices = "0.1helios"
```
- Prevents spam transactions by requiring a minimum gas price.

#### RPC Configuration
```toml
laddr = "tcp://0.0.0.0:26657"
```
- Exposes RPC API for blockchain queries.
- **For private nodes, use:** `"tcp://127.0.0.1:26657"`.

#### P2P Port
```toml
laddr = "tcp://0.0.0.0:26656"
```
- Used for **peer-to-peer networking**.

---

## 3. Application-Specific Configuration (`app.toml`)

Edit application settings:

```sh
nano ~/.heliades/config/app.toml
```

### Key Parameters:

#### API Configuration
```toml
[api]
enable = true
enabled-unsafe-cors = false
```
- Enables API access.
- **Set `enabled-unsafe-cors = false` unless required for dApps.**

#### JSON-RPC Configuration (EVM API)
```toml
[json-rpc]
enable = true
address = "0.0.0.0:8545"
api = "eth,net,web3"
ws-address = "0.0.0.0:8546"
```
- Exposes **Ethereum-compatible JSON-RPC API**.
- **Use `127.0.0.1` for private setups.**
- **Remove `debug`, `txpool`, or `personal` if not required.**

#### Pruning (Database Optimization)
```toml
pruning = "custom"
pruning-keep-recent = "1000"
pruning-interval = "10"
```
- Keeps database size manageable.

---

## 4. Optimizing Node Performance

### Increase File Descriptors Limit
```sh
ulimit -n 65535
```
- Prevents connection issues for high-traffic nodes.

### Enable State Sync (Faster Sync)
Instead of syncing from **block 0**, use **state sync**:

1. **Find a Recent State Sync Snapshot**
   ```sh
   curl -s https://snapshots.helioschain.network/latest.json | jq .
   ```

2. **Edit `config.toml`**
   ```toml
   [statesync]
   enable = true
   rpc_servers = "SNAPSHOT_RPC_SERVER"
   trust_height = TRUST_HEIGHT
   trust_hash = "TRUST_HASH"
   ```

3. **Restart the Node**
   ```sh
   heliades start
   ```

---

## 5. Restarting Your Node After Configuration

After making changes, restart the node:
```sh
systemctl restart helios-node
```

Check logs:
```sh
journalctl -u helios-node -f
```

---

## 6. Monitoring Your Node

Helios provides multiple ways to monitor node performance.

### Check Sync Status
```sh
heliades status | jq .sync_info
```

### View Live Logs
```sh
tail -f ~/.heliades/logs/helios.log
```

### Use the Prometheus Metrics API
- Enable in `config.toml`:
  ```toml
  prometheus = true
  ```
- Access metrics at:
  ```
  http://localhost:26660/metrics
  ```

---

## Securing JSON-RPC (8545) Exposure

Helios nodes support **EVM-compatible JSON-RPC** via port **8545**, which is essential for dApps, wallets (e.g., MetaMask), and external services to interact with the blockchain.

While exposing this endpoint is **necessary for RPC functionality**, it **must be secured properly** to prevent unauthorized access or potential exploits.

### Best Practices for Securing JSON-RPC Exposure

1. **Limit Public Access (Private RPC Nodes)**
   - If running a **validator** or **private node**, restrict access to localhost:
     ```sh
     --json-rpc.address "127.0.0.1:8545"
     ```
   - This ensures that only local applications can access the node.

2. **Use a Reverse Proxy for Public RPC Nodes**
   - If exposing RPC publicly, **use a reverse proxy** like **Nginx** or **Traefik** to:
     - Enforce **HTTPS (TLS/SSL)** for secure communication.
     - Enable **rate limiting** to prevent abuse.
     - Whitelist allowed IPs or domains for access.

3. **Disable Unnecessary APIs**
   - Reduce attack surface by enabling only the necessary JSON-RPC APIs:
     ```sh
     --json-rpc.api "eth,net,web3"
     ```
   - **Avoid exposing `personal`, `debug`, or `txpool`** unless explicitly required.

4. **Enable CORS Restrictions (Only if Needed)**
   - If using a frontend dApp, restrict allowed domains:
     ```sh
     --api.enabled-unsafe-cors=false
     ```
   - **Avoid setting CORS to `true` unless necessary** for a controlled environment.

5. **Run a Dedicated Public RPC Node**
   - Validators should **not** expose JSON-RPC publicly.
   - Instead, **run a separate node** that syncs with the network but does **not participate in consensus** to **serve dApps and external clients**.

### Example: Running a Secure Public RPC Node

If you need to expose **8545 publicly**, use **Nginx as a reverse proxy** with rate limiting:

```nginx
server {
    listen 443 ssl;
    server_name dataseed.helioschain.network;

    ssl_certificate /etc/letsencrypt/live/rpc.helios.network/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/rpc.helios.network/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8545;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # Rate Limiting
        limit_req zone=rpc burst=10 nodelay;
    }
}
```

---

## Final Notes

- **Validators should NOT expose their JSON-RPC publicly.**
- **Use correct pruning settings to avoid excessive storage use.**
- **State sync can significantly speed up node setup.**
- **Monitor logs and metrics regularly for stability.**
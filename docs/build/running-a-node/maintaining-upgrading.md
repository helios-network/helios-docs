# Maintaining & Upgrading Your Node

Proper maintenance ensures that your Helios node runs efficiently, stays synchronized with the network, and remains secure against threats. This guide covers essential maintenance tasks, upgrading procedures, and the additional steps required to run a validator node.

---

## 1. Monitoring Your Node

### Checking Node Status
Use the following command to check if your node is synchronized:
```sh
heliades status | jq .sync_info
```

### Viewing Logs in Real Time
Monitor logs to detect errors, peer connection issues, or sync delays:
```sh
tail -f ~/.heliades/logs/helios.log
```

For system-wide logs:
```sh
journalctl -u helios-node -f
```

### Checking Network Peers
To view connected peers:
```sh
heliades tendermint show-peers
```

---

## 2. Keeping Your Node Updated

### Checking for Software Updates
Regularly pull the latest changes from the Helios repository:
```sh
cd ~/helios-core
git pull origin main
make install
```

After updating, verify the version:
```sh
heliades version
```

If using **Docker**, update your node by pulling the latest image:
```sh
docker pull heliosnetwork/helios-node:latest
docker stop helios-node
docker rm helios-node
docker run -d --name helios-node -p 26656:26656 -p 26657:26657 heliosnetwork/helios-node
```

### Restarting the Node After an Update
```sh
systemctl restart helios-node
```

To ensure the node runs on startup:
```sh
sudo systemctl enable helios-node
```

---

## 3. Running a Validator Node

Validators secure the Helios network by verifying transactions and producing blocks. To become a validator, you must **stake whitelisted assets**, maintain high uptime, and follow governance protocols.

### Validator Requirements
- Must stake a **minimum amount** of whitelisted assets (ETH, ATOM, etc.).
- Must maintain at least **95% uptime** to avoid reputation loss.
- Reputation score impacts validator selection and rewards.

### Registering as a Validator
1. **Create a Validator Key**
```sh
heliades keys add <validator-name> --keyring-backend file
```

2. **Register as a Validator**
```sh
heliades tx staking create-validator   --amount=1000helios   --pubkey=$(heliades tendermint show-validator)   --moniker="<your-validator-name>"   --chain-id=helios-mainnet   --commission-rate="0.10"   --commission-max-rate="0.20"   --commission-max-change-rate="0.05"   --min-self-delegation="1"   --from=<wallet-name>   --gas=auto --fees=5000helios
```

### Monitoring Validator Performance
- Check validator status:
  ```sh
  heliades query staking validator <your-validator-address>
  ```
- View missed blocks:
  ```sh
  heliades query slashing signing-info <your-validator-address>
  ```

---

## 4. Handling Slashing and Penalties

Validators can be **slashed** (lose stake) for the following reasons:
- **Downtime:** If a validator remains offline for too long.
- **Double Signing:** Attempting to sign conflicting blocks.
- **Malicious Activity:** Any attempt to manipulate the network.

### Checking Slashing Events
```sh
heliades query slashing signing-info <your-validator-address>
```

### Recovering from Slashing
If slashed due to downtime:
```sh
heliades tx slashing unjail --from=<wallet-name> --chain-id=helios-mainnet --fees=5000helios
```

To prevent further slashing, ensure your node is online and up to date.

---

## 5. Best Practices for Long-Term Node Operation

### Use a Dedicated Server
For best performance, use a **dedicated machine** with stable internet and **SSD storage**.

### Enable Auto-Restart
Prevent downtime by configuring **systemd** to restart the node automatically:
```sh
sudo systemctl enable --now helios-node
```

### Set Up Alerts for Downtime
Use monitoring tools like **Prometheus & Grafana** to detect issues early.

### Secure Your Node
- **Use a firewall** to block unauthorized access:
  ```sh
  sudo ufw allow 26656,26657/tcp
  sudo ufw enable
  ```
- **Keep keys safe** and never expose private validator keys.
- **Regularly update your node** to stay in sync with network changes.

---

## Conclusion

By maintaining and upgrading your node properly, you ensure:

- High uptime and better rewards.  
- Avoidance of penalties and slashing.  
- A secure and stable contribution to the Helios blockchain.  


# System Requirements

Operating a node allows participants to validate transactions, secure the network, and earn rewards. Here is an overview of hardware requirements, installation, and node management, running a Helios node requires appropriate hardware and software configurations to ensure stability and optimal performance.

### Operating System Compatibility
Helios nodes are compatible with Linux and macOS.

| Operating System | Recommended Versions |
|-----------------|--------------------|
| Linux       | Ubuntu 22.04+, Debian 11+, Arch-based |
| macOS       | Latest stable version (for non-validator nodes) |

- Validators and full nodes should use Linux for best performance and reliability.
- macOS is supported for light nodes, developer testing, and RPC endpoints.

### Hardware Requirements
Helios is built on Cosmos SDK with EVM compatibility, requiring nodes to meet specific computational needs.

| Node Type               | CPU (Minimum)                  | RAM       | Storage            |
|-------------------------|--------------------------------|-----------|--------------------|
| Validator Node      | 8-Core CPU (Intel i7/AMD Ryzen 7+) | 32 GB     | 1 TB NVMe SSD  |
| Full Node           | 6-Core CPU (Intel i5/AMD Ryzen 5)  | 16 GB     | 750 GB NVMe SSD |
| Light Node (RPC/Archive) | 4-Core CPU (Intel i3/Ryzen 3)  | 8 GB      | 500 GB SSD      |

### Key Considerations
- Validators require higher CPU and RAM to handle block validation and Hyperion cross-chain interactions.
- Storage will grow over time, so consider provisioning extra space beyond the minimum requirements.
- Full nodes store blockchain history but don’t participate in consensus.
- Light nodes are used for RPC queries or archive purposes and have lower hardware demands.

### Software Requirements
To set up a Helios node, ensure the following dependencies are installed:

- Go (Latest stable version)
- Docker (Optional, for containerized deployment)
- Helios Core Binary
- Cosmos SDK libraries
- Ethereum JSON-RPC (For EVM interactions)

Before starting, update your system packages:

```sh
sudo apt update && sudo apt upgrade -y

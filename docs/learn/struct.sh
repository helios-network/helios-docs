#!/bin/bash

# Define the directory name
ECONOMICS_DIR="helios-economics"

# Navigate to the learn directory (assumes script is run from /docs/learn)
cd "$(dirname "$0")"

# Create the Helios Economics directory
mkdir -p "$ECONOMICS_DIR"

# Create the category JSON file
cat > "$ECONOMICS_DIR/_category_.json" <<EOL
{
  "label": "Helios Economics",
  "position": 4,
  "collapsed": false
}
EOL

# Create all markdown files
touch "$ECONOMICS_DIR/tokenomics-overview.md"
touch "$ECONOMICS_DIR/minting-inflation-mechanics.md"
touch "$ECONOMICS_DIR/supply-reward-distribution.md"
touch "$ECONOMICS_DIR/whale-limit-apy-adjustment.md"
touch "$ECONOMICS_DIR/treasury-slashing-mechanisms.md"

# Populate each file with a basic template
echo -e "# Tokenomics Overview\n\n_Overview of the HELIOS token, its utility, and governance._" > "$ECONOMICS_DIR/tokenomics-overview.md"
echo -e "# Minting & Inflation Mechanics\n\n_Explanation of minting processes and inflation rates._" > "$ECONOMICS_DIR/minting-inflation-mechanics.md"
echo -e "# Supply & Reward Distribution\n\n_How staking rewards and token supply are managed._" > "$ECONOMICS_DIR/supply-reward-distribution.md"
echo -e "# Whale Limit & APY Adjustment\n\n_The anti-whale mechanisms and APY scaling model._" > "$ECONOMICS_DIR/whale-limit-apy-adjustment.md"
echo -e "# Treasury & Slashing Mechanisms\n\n_How slashed assets are handled and used within Helios._" > "$ECONOMICS_DIR/treasury-slashing-mechanisms.md"

# Confirm script execution
echo "Helios Economics documentation structure created successfully!"

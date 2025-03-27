# eth_getAllWhitelistedAssets

Returns a list of all whitelisted assets on the Helios network.

## Parameters

None.

## Returns

- `result`: *array* - A list of asset objects, each containing:
  - `denom`: The asset denomination.
  - `contractAddress`: The smart contract address.
  - `chainId`: The blockchain network identifier.
  - `decimals`: The number of decimals used by the asset.
  - `metadata`: Additional asset metadata.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getAllWhitelistedAssets", "params": [], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "denom": "SOL",
      "contractAddress": "0xd567B3d7B8FE3C79a1AD8dA978812cfC4Fa05e75",
      "chainId": "solana",
      "decimals": 8,
      "metadata": "SOL"
    },
    {
      "denom": "WETH",
      "contractAddress": "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd",
      "chainId": "ethereum",
      "decimals": 6,
      "metadata": "WETH stablecoin"
    }
  ]
}
```
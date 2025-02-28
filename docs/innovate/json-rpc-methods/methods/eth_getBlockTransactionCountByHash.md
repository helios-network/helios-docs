# eth_getBlockTransactionCountByHash

Returns the number of transactions in a block given its hash.

## Parameters

- `blockHash`: *[Required]* `string` - The hash of the block.

## Returns

- `result`: *integer* - The number of transactions in the block.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getBlockTransactionCountByHash", "params": ["0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x10"
}
```
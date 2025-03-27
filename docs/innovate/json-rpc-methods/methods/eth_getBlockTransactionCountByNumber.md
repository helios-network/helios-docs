# eth_getBlockTransactionCountByNumber

Returns the number of transactions in a block given its number.

## Parameters

- `blockNumber`: *[Required]* `string` - The block number or one of the string tags (`latest`, `earliest`, `pending`).

## Returns

- `result`: *integer* - The number of transactions in the block.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getBlockTransactionCountByNumber", "params": ["latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xa"
}
```
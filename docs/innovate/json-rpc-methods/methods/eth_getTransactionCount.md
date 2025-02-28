# eth_getTransactionCount

Returns the number of transactions sent from an address.

## Parameters

- `address`: *[Required]* `string` - The Ethereum address whose transaction count is to be retrieved.
- `block`: *[Required]* `string` - The block parameter, which can be:
  - `"latest"`: The latest mined block.
  - `"earliest"`: The first block.
  - `"pending"`: The pending state of the blockchain.

## Returns

- `result`: *string* - A hexadecimal string representing the number of transactions sent from the given address.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTransactionCount", "params": ["0x17267eB1FEC301848d4B5140eDDCFC48945427Ab", "latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```
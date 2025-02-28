# eth_getCode

Returns the smart contract code at a given address.

## Parameters

- `address`: *[Required]* `string` - The contract address.
- `block parameter`: *[Required]* A string representing a block number or a string tag (`latest`, `earliest`, `pending`).

## Returns

- `result`: *string* - The smart contract bytecode at the given address.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getCode", "params": ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045", "latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x6080604052348015600f57600080fd5b5060..."
}
```
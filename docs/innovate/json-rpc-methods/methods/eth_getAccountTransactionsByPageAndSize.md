# eth_getAccountTransactionsByPageAndSize

Retrieves a paginated list of transactions for a given account.

## Parameters

- `address`: *[Required]* `string` - The Ethereum address.
- `page`: *[Required]* `string` - The page number (hexadecimal).
- `size`: *[Required]* `string` - The number of transactions per page (hexadecimal).

## Returns

- `result`: *array* - An array of transaction objects.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getAccountTransactionsByPageAndSize", "params": ["0x17267eB1FEC301848d4B5140eDDCFC48945427Ab", "0x1", "0x5"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": []
}
```
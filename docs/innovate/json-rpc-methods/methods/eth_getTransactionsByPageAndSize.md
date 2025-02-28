# eth_getTransactionsByPageAndSize

Returns a paginated list of transactions.

## Parameters

- `page`: *[Required]* `integer` - The page number.
- `size`: *[Required]* `integer` - The number of transactions per page.

## Returns

- `result`: *array* - A list of transaction objects.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTransactionsByPageAndSize", "params": ["0x1", "0x1"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "transactionHash": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf",
      "blockHash": "0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732",
      "blockNumber": "0x1ef6"
    }
  ]
}
```
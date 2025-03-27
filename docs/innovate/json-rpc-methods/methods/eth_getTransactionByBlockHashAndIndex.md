# eth_getTransactionByBlockHashAndIndex

Returns information about a transaction by block hash and transaction index.

## Parameters

- `blockHash`: *[Required]* `string` - The block hash.
- `index`: *[Required]* `string` - The transaction index in hexadecimal format.

## Returns

- `result`: *object* - A transaction object containing details of the transaction.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTransactionByBlockHashAndIndex", "params": ["0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732", "0x0"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "hash": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf",
    "blockHash": "0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732",
    "transactionIndex": "0x0"
  }
}
```
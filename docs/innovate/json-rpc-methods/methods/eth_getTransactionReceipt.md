# eth_getTransactionReceipt

Returns the receipt of a transaction by its hash.

## Parameters

- `transactionHash`: *[Required]* `string` - The hash of the transaction.

## Returns

- `result`: *object* - A transaction receipt object containing:
  - `transactionHash`: The transaction hash.
  - `blockHash`: The block hash containing the transaction.
  - `blockNumber`: The number of the block containing the transaction.
  - `status`: The transaction status (1 for success, 0 for failure).

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTransactionReceipt", "params": ["0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "transactionHash": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf",
    "blockHash": "0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732",
    "blockNumber": "0x5BAD55",
    "status": "0x1"
  }
}
```
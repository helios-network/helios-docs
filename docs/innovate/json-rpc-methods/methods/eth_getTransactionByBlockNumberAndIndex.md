# eth_getTransactionByBlockNumberAndIndex

Returns information about a transaction by block number and transaction index.

## Parameters

- `blockNumber`: *[Required]* `string` - The block number in hexadecimal format.
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
  -d '{"jsonrpc": "2.0", "method": "eth_getTransactionByBlockNumberAndIndex", "params": ["0x5BAD55", "0x0"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "hash": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf",
    "blockNumber": "0x5BAD55",
    "transactionIndex": "0x0"
  }
}
```
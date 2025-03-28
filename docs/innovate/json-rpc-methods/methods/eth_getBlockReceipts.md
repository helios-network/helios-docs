# eth_getBlockReceipts

Returns all transaction receipts from a specific block.

## Parameters

- `blockHash`: *[Required]* `string` - The hash of the block.

## Returns

- `result`: *array* - A list of transaction receipt objects, each containing:
  - `transactionHash`: The hash of the transaction.
  - `status`: The status of the transaction (1 for success, 0 for failure).
  - `logs`: An array of logs generated by the transaction.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getBlockReceipts", "params": ["0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "transactionHash": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf",
      "status": "0x1",
      "logs": []
    }
  ]
}
```
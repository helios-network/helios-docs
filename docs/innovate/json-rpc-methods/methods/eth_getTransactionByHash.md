# eth_getTransactionByHash

Returns the information about a transaction requested by transaction hash.

## Parameters

- `transactionHash`: *[Required]* `string` - The hash of the transaction.

## Returns

- `result`: *object* - An object containing details of the transaction, including block number, sender, receiver, and value.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTransactionByHash", "params": ["0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "blockHash": "0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732",
    "blockNumber": "0x1ef6",
    "from": "0x17267eb1fec301848d4b5140eddcfc48945427ab",
    "gas": "0x2b636",
    "gasPrice": "0x0",
    "hash": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf",
    "input": "0xf5e56040...",
    "nonce": "0x7",
    "to": "0x0000000000000000000000000000000000000800",
    "transactionIndex": "0x0",
    "value": "0x0",
    "type": "0x0",
    "chainId": "0x1092"
  }
}
```
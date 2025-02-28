# eth_getBlockByHash

Returns information about a block by its hash.

## Parameters

- `blockHash`: *[Required]* `string` - The hash of the block.
- `fullTransactionObjects`: *[Optional]* `boolean` - If `true`, returns the full transaction objects; if `false`, only transaction hashes.

## Returns

- `result`: *object* - An object containing block information.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getBlockByHash", "params": ["0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732", true], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "number": "0x1ef6",
    "hash": "0xfd3c1bc0319e6b006b43b0cc356ab9b366150b3d4a664bd1fba73ba45ad3b732",
    "parentHash": "0x9a37029fb304637030b227ab5f1f0f280da303ea5576c06184b842ca5efe3fbb",
    "transactions": ["0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf"],
    "miner": "0x17267eB1FEC301848d4B5140eDDCFC48945427Ab",
    "timestamp": "0x67c0d291"
  }
}
```
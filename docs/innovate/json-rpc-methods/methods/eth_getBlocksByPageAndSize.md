# eth_getBlocksByPageAndSize

Returns a list of blocks from a paginated request.

## Parameters

- `page`: *[Required]* `integer` - The page number.
- `size`: *[Required]* `integer` - The number of blocks per page.

## Returns

- `result`: *array* - A list of block objects containing standard block data.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getBlocksByPageAndSize", "params": ["0x1", "0x20", true], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "number": "0x170d3",
      "hash": "0x813b24f822ac01534b0d6e9a12a9a41f3d63622c2228c2a0f6eb1d2df6f3fb17",
      "miner": "0x17267eb1fec301848d4b5140eddcfc48945427ab"
    }
  ]
}
```
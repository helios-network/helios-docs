# eth_getTokensBalance

Returns the balances of multiple tokens for a given address.

## Parameters

- `address`: *[Required]* `string` - The Ethereum address.
- `block`: *[Required]* `string` - The block parameter, which can be:
  - `"latest"`: The latest block.
  - `"earliest"`: The first block.
  - `"pending"`: The pending state of the blockchain.

## Returns

- `result`: *array* - An array of objects, each containing the token address, symbol, and balance.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTokensBalance", "params": ["0x17267eB1FEC301848d4B5140eDDCFC48945427Ab", "latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "address": "0x80b5a32e4f032b2a058b4f29ec95eefeeb87adcd",
      "symbol": "WETH",
      "balance": "0x422ca0042dd9f9b180000"
    },
    {
      "address": "0xd4949664cd82660aae99bedc034a0dea8a0bd517",
      "symbol": "ahelios",
      "balance": "0xd38befe2706ce9df4538"
    }
  ]
}
```
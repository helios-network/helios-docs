# eth_getTokensByPageAndSize

Returns a paginated list of tokens.

## Parameters

- `page`: *[Required]* `integer` - The page number.
- `size`: *[Required]* `integer` - The number of tokens per page.

## Returns

- `result`: *array* - A list of token objects.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTokensByPageAndSize", "params": ["0x1", "0x2"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "address": "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd",
      "symbol": "WETH"
    },
    {
      "address": "0xD4949664cD82660AaE99bEdc034a0deA8A0bd517",
      "symbol": "ahelios"
    }
  ]
}
```
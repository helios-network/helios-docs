# eth_getValidatorsByPageAndSize

Returns a list of validators in a paginated manner.

## Parameters

- `page`: *[Required]* `integer` - The page number.
- `size`: *[Required]* `integer` - The number of validators per page.

## Returns

- `result`: *array* - A list of validator objects.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getValidatorsByPageAndSize", "params": ["0x1", "0x1"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "moniker": "helios-main-node",
      "validatorAddress": "0x17267eB1FEC301848d4B5140eDDCFC48945427Ab",
      "status": 3,
      "shares": "1702462250000000000000.000000000000000000"
    }
  ]
}
```
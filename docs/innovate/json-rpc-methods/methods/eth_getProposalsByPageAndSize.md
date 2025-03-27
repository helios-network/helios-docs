# eth_getProposalsByPageAndSize

Returns a paginated list of governance proposals.

## Parameters

- `page`: *[Required]* `integer` - The page number.
- `size`: *[Required]* `integer` - The number of proposals per page.

## Returns

- `result`: *array* - A list of proposal objects.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getProposalsByPageAndSize", "params": ["0x1", "0x1"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "id": 1,
      "title": "Whitelist WETH into the consensus",
      "status": "PASSED"
    }
  ]
}
```
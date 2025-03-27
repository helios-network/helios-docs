# eth_getHeliosValoperAddress

Returns the Helios-formatted validator address for a given Ethereum address.

## Parameters

- `ethAddress`: *[Required]* `string` - The Ethereum address to convert.

## Returns

- `result`: *string* - The Helios validator formatted address.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getHeliosValoperAddress", "params": ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "heliosvaloper1zun8av07cvqcfr2t29qwmh8ufz29gfat770rla"
}
```
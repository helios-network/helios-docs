# eth_gasPrice

Returns the current gas price in wei.

## Parameters

None.

## Returns

A hexadecimal equivalent of an integer representing the current gas price in wei.

## Example

Replace https://testnet1.helioschainlabs.org with your node rpc url.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_gasPrice", "params": [], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x6bcc886e7"
}
```

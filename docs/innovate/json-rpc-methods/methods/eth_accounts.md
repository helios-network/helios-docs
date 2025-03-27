# eth_accounts

Returns a list of addresses owned by the client.

## Parameters

None

## Returns

An array of hexadecimals as strings representing the addresses owned by the client.

## Example

Replace https://testnet1.helioschainlabs.org with your node rpc url.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_accounts", "params": [], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": []
}
```
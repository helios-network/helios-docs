# eth_maxPriorityFeePerGas

Returns an estimate of the max priority fee per gas.

## Parameters

- No parameters required.

## Returns

- `result`: *string* - The max priority fee per gas in wei.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_maxPriorityFeePerGas", "params": [], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x9502f900"
}
```
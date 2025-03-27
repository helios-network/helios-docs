# eth_getTokenBalance

Returns the balance of a specific token for a given address.

## Parameters

- `address`: *[Required]* `string` - The account address.
- `tokenAddress`: *[Required]* `string` - The token contract address.
- `block`: *[Required]* `string` - The block number or `latest`.

## Returns

- `result`: *string* - The token balance in hexadecimal format.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getTokenBalance", "params": ["0x17267eB1FEC301848d4B5140eDDCFC48945427Ab", "0xd4949664cd82660aae99bedc034a0dea8a0bd517", "latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x17cd41f6514deb3972c09"
}
```
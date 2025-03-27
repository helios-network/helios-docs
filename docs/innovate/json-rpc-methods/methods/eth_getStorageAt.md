# eth_getStorageAt

Returns the value from a storage position at a given address.

## Parameters

- `address`: *[Required]* `string` - The account address.
- `position`: *[Required]* `string` - The position in storage.
- `block`: *[Required]* `string` - The block number or `latest`.

## Returns

- `result`: *string* - The storage value in hexadecimal format.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getStorageAt", "params": ["0x9cE564c7d09f88E7d8233Cdd3A4d7AC42aBFf3aC", "0x0", "latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x000000000000000000000000000000000000000000000000000000000000000f"
}
```
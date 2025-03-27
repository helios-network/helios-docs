# eth_sign

Signs a message with the private key of a given account.

## Parameters

- `address`: *[Required]* `string` - The address of the account to sign with.
- `message`: *[Required]* `string` - The message to sign.

## Returns

- `result`: *string* - The signed message in hexadecimal format.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_sign", "params": ["0x9cE564c7d09f88E7d8233Cdd3A4d7AC42aBFf3aC", "0xdeadbeef"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5d3b206d8c9d6d5ebf56c0dc9b7403b81dbeb94884d7b6b6e7bb4cf6dbf9ed2f2b4e89b7b3153de20dbaacadbebf7c0f5bfb2d9c46f34b9f6d6be349f2bd53c91c"
}
```
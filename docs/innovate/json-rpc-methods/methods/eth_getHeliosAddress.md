# eth_getHeliosAddress

Returns the Helios-formatted address for a given Ethereum address.

## Parameters

- `ethAddress`: *[Required]* `string` - The Ethereum address to convert.

## Returns

- `result`: *string* - The Helios-formatted address.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getHeliosAddress", "params": ["0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "helios1q4h5dlr9y8uq3wzjkv4pvxgsx2wwssktzzm2zp"
}
```
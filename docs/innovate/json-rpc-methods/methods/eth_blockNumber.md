# eth_blockNumber

Returns the current latest block number.

## Parameters

None

## Returns

A hexadecimal of an integer representing the current block number the client is on.

## Example

Replace https://dataseed-testnet.helioschain.network with your node rpc url.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x65a8db"
}
```

> *Convert hexadecimal to integer* - On macOS in Term or iTerm, you can use `printf "%d\n" 0x65a8db` to convert the above hexadecimal number into an integer number.

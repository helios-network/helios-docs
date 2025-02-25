# eth_chainId

Returns the currently configured chain ID, a value used in replay-protected transaction signing as introduced by [EIP-155](https://eips.ethereum.org/EIPS/eip-155).

## Parameters

None

## Returns

A hexadecimal of the current chain ID.

## Example

Replace https://dataseed-testnet.helioschain.network with your node rpc url.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_chainId", "params": [], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1092"
}
```

> *Convert hexadecimal to integer* - On macOS in Term or iTerm, you can use `printf "%d\n" 0x1092` (4242) to convert the above hexadecimal number into an integer number.

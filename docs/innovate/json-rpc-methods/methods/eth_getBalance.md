# eth_getBalance

Returns the balance of the account of a given address.

## Parameters

None.

## Returns

- `address`: *[Required]* A string representing the address (20 bytes) to check for balance.
- `block parameter`: *[Required]* A hexadecimal block number, or one of the string tags `latest`, `earliest`, `pending`, `safe`, or `finalized`. See the [default block parameter](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block).

## Example

Replace https://dataseed-testnet.helioschain.network with your node rpc url.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0","method": "eth_getBalance", "params": ["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x7c2562030800"
}
```

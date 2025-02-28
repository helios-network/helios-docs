# eth_getProposal

Returns details about a specific governance proposal.

## Parameters

- `proposalId`: *[Required]* `integer` - The ID of the proposal.

## Returns

- `result`: *object* - A proposal object containing details of the proposal.

## Example

Replace `https://dataseed-testnet.helioschain.network` with your node RPC URL.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getProposal", "params": ["0x1"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "title": "Whitelist WETH into the consensus",
    "status": "PASSED"
  }
}
```
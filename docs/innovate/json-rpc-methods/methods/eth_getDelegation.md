# eth_getDelegation

Returns delegation details for a given address and validator.

## Parameters

- `delegatorAddress`: *[Required]* `string` - The address of the delegator.
- `validatorAddress`: *[Required]* `string` - The validator's address.

## Returns

- `result`: *object* - Delegation details including assets, rewards, shares, and validator address.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_getDelegation", "params": ["0x17267eB1FEC301848d4B5140eDDCFC48945427Ab", "0x17267eB1FEC301848d4B5140eDDCFC48945427Ab"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "assets": [
      {
        "amount": "1000000000000000000000",
        "symbol": "ahelios"
      }
    ],
    "rewards": {
      "amount": "267595990179343305922375",
      "denom": "ahelios"
    },
    "shares": "1702462250000000000000",
    "validator_address": "0x17267eB1FEC301848d4B5140eDDCFC48945427Ab"
  }
}
```
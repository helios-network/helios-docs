# eth_sendTransaction

Sends a transaction to the network.

## Parameters

- `transactionObject`: *[Required]* `object` - The transaction object containing:
  - `from`: *[Required]* `string` - The sender's address.
  - `to`: *[Optional]* `string` - The recipient's address.
  - `gas`: *[Optional]* `string` - Gas limit for the transaction.
  - `gasPrice`: *[Optional]* `string` - Gas price in wei.
  - `value`: *[Optional]* `string` - Value transferred in wei.
  - `data`: *[Optional]* `string` - Additional data.

## Returns

- `result`: *string* - The transaction hash.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_sendTransaction", "params": [{
  "from": "0x9cE564c7d09f88E7d8233Cdd3A4d7AC42aBFf3aC",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "value": "0x9184e72a"
}], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf"
}
```
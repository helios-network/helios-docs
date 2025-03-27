# eth_sendRawTransaction

Submits a raw transaction for broadcast to the network.

## Parameters

- `signedTransactionData`: *[Required]* `string` - The signed raw transaction data in hexadecimal format.

## Returns

- `result`: *string* - The transaction hash.

## Example

Replace `https://testnet1.helioschainlabs.org` with your node RPC URL.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_sendRawTransaction", "params": ["0xf86b808504a817c80082520894d46e8dd67c5d32be8058bb8eb970870f07244567880de0b6b3a76400008025a0b0e65b2a3e5dc09c2f1f902e292f5e9c06f39fda078d1c3f9db32e1b3095bda0b7b10b2be86ffb1107df32edaf3732d4eeb68ddc017f3dbe4db0375a7bca5b5da"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0xbe1c7aed91b45511341a27aaedf63afd370afb9e2c01c593fb02804d0325debf"
}
```
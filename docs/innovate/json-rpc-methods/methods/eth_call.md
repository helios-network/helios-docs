# eth_call

Executes a new message call immediately without creating a transaction on the blockchain.

> Gas parameter is capped, To prevent API abuse, the gas parameter in eth_estimateGas and this eth_call method is capped at 10x (1000%) the current block gas limit.

## Parameters

- `from`: 20 bytes [Required] Address the transaction is sent from.
- `to`: 20 bytes - Address the transaction is directed to.
- `gas`: Hexadecimal value of the gas provided for the transaction execution. `eth_call` consumes zero gas, but this parameter may be needed by some executions.
- `gasPrice`: Hexadecimal value of the gasPrice used for each paid gas.
- `maxPriorityFeePerGas`: Maximum fee, in wei, the sender is willing to pay per gas above the base fee. See [EIP-1559 transactions](https://docs.metamask.io/services/concepts/transaction-types/#eip-1559-transactions).
- `maxFeePerGas`: Maximum total fee (base fee + priority fee), in wei, the sender is willing to pay per gas. See [EIP-1559 transactions](https://docs.metamask.io/services/concepts/transaction-types/#eip-1559-transactions).
- `value`: Hexadecimal of the value sent with this transaction.
- `data`: Hash of the method signature and encoded parameters. See [Ethereum contract ABI specification](https://docs.soliditylang.org/en/latest/abi-spec.html).
- `block parameter`: *[Required]* A hexadecimal block number, or one of the string tags `latest`, `earliest`, `pending`, `safe`, or `finalized`. See the [default block parameter](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block).

## Returns
The returned value of the executed contract.

If this call causes the EVM to execute a REVERT operation, an error response of the following form is returned, with the revert reason pre-decoded as a string:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": 3,
    "message": "execution reverted: Dai/insufficient-balance",
    "data": "0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000184461692f696e73756666696369656e742d62616c616e63650000000000000000"
  }
}
```

## Example

Replace https://testnet1.helioschainlabs.org with your node rpc url.

## Request curl
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_call", "params": [{"from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155", "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567", "gas": "0x76c0", "gasPrice": "0x9184e72a000", "value": "0x9184e72a", "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}, "latest"], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x"
}
```
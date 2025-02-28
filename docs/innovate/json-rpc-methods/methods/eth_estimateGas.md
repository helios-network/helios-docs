# eth_estimateGas

Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.

## Parameters

- TRANSACTION CALL OBJECT *[required]*
    - `from`: *[optional]* 20 Bytes - The address the transaction is sent from.
    - `to`: 20 Bytes - The address the transaction is directed to.
    - `gas`: *[optional]* Hexadecimal value of the gas provided for the transaction execution. `eth_estimateGas` consumes zero gas, but this parameter may be needed by some executions.
    - `gasPrice`: *[optional]* Hexadecimal value of the gas price used for each paid gas.
    - `maxPriorityFeePerGas`: *[optional]* Maximum fee, in wei, the sender is willing to pay per gas above the base fee. See [EIP-1559 transactions](https://docs.metamask.io/services/concepts/transaction-types/#eip-1559-transactions).
    - `maxFeePerGas`: *[optional]* Maximum total fee (base fee + priority fee), in wei, the sender is willing to pay per gas. See [EIP-1559 transactions](https://docs.metamask.io/services/concepts/transaction-types/#eip-1559-transactions).
    - `value`: *[optional]* Hexadecimal value of the value sent with this transaction.
    - `data`: *[optional]* Hash of the method signature and encoded parameters. See the [Ethereum contract ABI specification](https://docs.soliditylang.org/en/latest/abi-spec.html).
    - `block number`: *[required]* A string representing a block number, or one of the string tags `latest`, `earliest`, `pending`, `safe`, or `finalized`. See the default [block parameter](https://ethereum.org/en/developers/docs/apis/json-rpc/#default-block).

## Returns

A hexadecimal of the estimate of the gas for the given transaction.

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

Replace https://dataseed-testnet.helioschain.network with your node rpc url.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_estimateGas", "params": [{"from": "0x9cE564c7d09f88E7d8233Cdd3A4d7AC42aBFf3aC", "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567", "value": "0x9184e72a"}], "id": 1}'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5cec"
}
```
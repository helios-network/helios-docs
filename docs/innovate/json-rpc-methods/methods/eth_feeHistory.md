# eth_feeHistory

Returns historical gas information, allowing you to track trends over time.

## Parameters

- `blockCount`: (integer) Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. If blocks in the specified block range are not available, then only the fee history for available blocks is returned.
- `newestBlock`: (string) Integer representing the highest number block of the requested range, or one of the string tags `latest`, `earliest`, or `pending`.
- `array of integers`: (optional) A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used.

## Returns

`oldestBlock`: Lowest number block of the returned range expressed as a hexadecimal number.
`baseFeePerBlobGas`: Array of base fees per blob gas. Returns zeroes for blocks created before EIP-4844.
`blobGasUsedRatio`: Array of blob gas used ratios. These are calculated as the ratio of blobGasUsed and the max blob gas per block.
`baseFeePerGas`: An array of block base fees per gas, including an extra block value. The extra value is the next block after the newest block in the returned range. Returns zeroes for blocks created before EIP-1559.
`gasUsedRatio`: An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit.
`reward`: An array of effective priority fee per gas data points from a single block. All zeroes are returned if the block is empty.

## Example

Replace https://dataseed-testnet.helioschain.network with your node rpc url.

## Request curl
```sh
curl https://dataseed-testnet.helioschain.network \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "jsonrpc": "2.0", "method": "eth_feeHistory", "params": ["0x5", "latest", [20,30]] }'
```

## JSON Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "baseFeePerBlobGas": [
      "0xe3f5193b",
      "0xf6942037",
      "0xdb2e5553",
      "0xc2d3d9e8",
      "0xdb2e5553",
      "0xed15d41e"
    ],
    "baseFeePerGas": [
      "0x279c70a9b",
      "0x2a63ee068",
      "0x2a01a5449",
      "0x299fc09af",
      "0x29aa0b0c5",
      "0x28b21aaec"
    ],
    "blobGasUsedRatio": [
      0.8333333333333334,
      0,
      0,
      1,
      0.8333333333333334
    ],
    "gasUsedRatio": [
      0.7806543666666667,
      0.46377263333333335,
      0.46358696666666666,
      0.503863,
      0.40701746666666666
    ],
    "oldestBlock": "0x14535f8",
    "reward": [
      [
        "0x5f5e100",
        "0x34142698"
      ],
      [
        "0x5f5e100",
        "0x1f619e76"
      ],
      [
        "0x5f5e100",
        "0x39d10680"
      ],
      [
        "0x6824280",
        "0x214c9a15"
      ],
      [
        "0x4b571c0",
        "0x1ac123d6"
      ]
    ]
  }
}
```
# Quickstart

This quickstart guide will help you set up and make calls on the Helios network using the rpc and grpc endpoints.

## Prerequisites

Ensure you have a private node or a dedicated node running on Helios network.

## Make calls

## [Option 1] With curl

Run the following command in your terminal, replacing https://testnet1.helioschainlabs.org with your node rpc url:
```sh
curl https://testnet1.helioschainlabs.org \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "eth_chainId", "params": [], "id": 1}'
```

> Note - In Windows Powershell, quotations in curl commands can behave differently than expected. We recommend using Postman on Windows systems.

## [Option 2] With Node (JavaScript) Using fetch:

In these examples, you'll use [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) as your package manager.

1. In your project folder, install the node-fetch package using npm:

```sh
npm i node-fetch
```

2. Create your JavaScript file and copy the following code:

Replace https://testnet1.helioschainlabs.org with your node rpc url:
```js
const fetch = require("node-fetch");

fetch("https://testnet1.helioschainlabs.org", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    method: "eth_chainId",
    params: [],
    id: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```

3. Run the code using the following command:

```js
node index.js
```

## [Option 3] With Node (JavaScript) Using Ethers:

1. In your project folder, install the ethers package using npm:

```sh
npm install ethers
```

2. Create your JavaScript file and copy the following code:

Replace https://testnet1.helioschainlabs.org with your node rpc url:
```js
const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(
  "https://testnet1.helioschainlabs.org"
)

provider
  .getBlockNumber()
  .then((blockNumber) => {
    console.log(blockNumber)
  })
  .catch((error) => {
    console.error(error)
  })
```

3. Run the code using the following command:

```js
node index.js
```

## [Option 4] With Web3.js (Front-end):

1. In your project folder, [install the latest version of the web3.js library](https://www.npmjs.com/package/web3?activeTab=versions)

2. Create your JavaScript file and copy the following code:

Replace https://testnet1.helioschainlabs.org with your node rpc url:
```js
var { Web3 } = require("web3")
var provider = "https://testnet1.helioschainlabs.org"
var web3Provider = new Web3.providers.HttpProvider(provider)
var web3 = new Web3(web3Provider)

web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Helios Block is ", result)
})
```

3. Run the code using the following command:

```js
node index.js
```

## [Option 5] Python:

1. In your project folder, install the `requests` library:

```sh
pip install requests
```

2. Create your Python file and copy the following code:

Replace https://testnet1.helioschainlabs.org with your node rpc url:
```js
import requests
import json

url = "https://testnet1.helioschainlabs.org"

payload = {
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}

headers = {'content-type': 'application/json'}

response = requests.post(url, data=json.dumps(payload), headers=headers).json()

print(response)
```

3. Run the code using the following command:

```js
python index.py
```

## Next steps

Now that you have successfully made a call to the Helios network, you can explore more functionalities and APIs provided. Here are some suggestions:

- Explore other Json RPC Methods: Helios supports a wide range of APIs. You can find more information in the [JSON-RPC API method documentation](../json-rpc-methods/methods/eth_chainId).

- Monitor your usage: Monitor your usage on the [MetaMask Developer dashboard](https://docs.metamask.io/developer-tools/dashboard/how-to/dashboard-stats/) to ensure you're not hitting your rate limits.

Remember, the Helios community is here to help. If you have any questions or run into any issues, check out the Helios community for help and answers to common questions.


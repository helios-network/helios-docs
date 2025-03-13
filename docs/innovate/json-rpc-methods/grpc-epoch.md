# Query for Epoch-Based Validator Rotation

## Overview

The Helios blockchain's staking module provides a set of **gRPC query endpoints** to interact with its **epoch-based validator rotation system**. These endpoints allow you to retrieve data such as **the current epoch, active and historical validator sets, epoch configuration, and system status**.

This guide is tailored for developers building on the **Helios blockchain**, offering a technical overview of how to query these endpoints via a **node's RPC interface** using gRPC or RESTful HTTP GET requests.

All endpoints are accessible through a Helios node's RPC server, with **gRPC on port 9090** and **REST on port 1317** by default. This dual-access design supports a wide range of applications, from **blockchain explorers to monitoring tools**.

---

## Overview of Available Endpoints

The following **gRPC endpoints** are available in the **Helios staking module** for epoch-related queries:

1. **EpochInfo** - Detailed information about the current epoch.
2. **GetCurrentEpochHandler** - Current epoch number and basic details.
3. **GetEpochValidatorsHandler** - List of validators active in the current epoch.
4. **GetPreviousEpochValidatorsHandler** - Validators from previous epochs.
5. **GetEpochLengthHandler** - Configured epoch length in blocks.
6. **GetValidatorsPerEpochHandler** - Number of validators per epoch.
7. **GetIsEpochEnabledHandler** - Status of epoch-based rotation.

Each endpoint has a corresponding **HTTP GET path** for REST access.

---

## Endpoint Details

### 1. **EpochInfo**

**Description:** Returns a **detailed overview** of the current epoch.

- **gRPC Method:** `EpochInfo`
- **HTTP GET Path:** `/helios/staking/v1beta1/epoch_info`

#### **Request: QueryEpochInfoRequest**
- No parameters required.

#### **Response: QueryEpochInfoResponse**
- `current_epoch` (uint64): Current epoch number.
- `epoch_length` (uint64): Blocks per epoch.
- `last_epoch_height` (uint64): Block height when the last epoch started.
- `validators_per_epoch` (uint64): Maximum validators per epoch.
- `epoch_enabled` (bool): Epoch rotation status.
- `current_height` (uint64): Current block height.
- `blocks_until_next_epoch` (uint64): Blocks remaining until the next epoch.

#### **Example HTTP Call:**

```bash
curl http://localhost:1317/helios/staking/v1beta1/epoch_info
```

#### **Sample Response:**

```json
{
  "current_epoch": "5",
  "epoch_length": "1000",
  "last_epoch_height": "4000",
  "validators_per_epoch": "100",
  "epoch_enabled": true,
  "current_height": "4500",
  "blocks_until_next_epoch": "500"
}
```

---

### 2. **GetCurrentEpochHandler**

**Description:** Retrieves **basic information** about the current epoch.

- **gRPC Method:** `GetCurrentEpochHandler`
- **HTTP GET Path:** `/helios/staking/v1beta1/current_epoch`

#### **Request: QueryCurrentEpochRequest**
- No parameters required.

#### **Response: QueryCurrentEpochResponse**
- `current_epoch` (uint64): Current epoch number.
- `epoch_length` (uint64): Blocks per epoch.
- `last_epoch_height` (uint64): Block height of the last epoch start.
- `validators_per_epoch` (uint64): Maximum validators per epoch.
- `epoch_enabled` (bool): Epoch rotation status.

#### **Example gRPC Call (Go):**

```go
client := stakingtypes.NewQueryClient(grpcConn)
resp, err := client.GetCurrentEpochHandler(context.Background(), &stakingtypes.QueryCurrentEpochRequest{})
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Current Epoch: %d
", resp.CurrentEpoch)
```

---

### 3. **GetEpochValidatorsHandler**

**Description:** Fetches the list of validators **active in the current epoch**.

- **gRPC Method:** `GetEpochValidatorsHandler`
- **HTTP GET Path:** `/helios/staking/v1beta1/epoch_validators`

#### **Request: QueryEpochValidatorsRequest**
- **Pagination (optional):**
  - `offset` (uint64): Starting index.
  - `limit` (uint64): Results per page.

#### **Response: QueryEpochValidatorsResponse**
- `validators` ([]Validator): List of active validators.
- `pagination`:
  - `next_key` ([]byte): Key for the next page.
  - `total` (uint64): Total number of validators.

#### **Example HTTP Call:**

```bash
curl "http://localhost:1317/helios/staking/v1beta1/epoch_validators?pagination.offset=0&pagination.limit=10"
```

---

### 4. **GetPreviousEpochValidatorsHandler**

**Description:** Retrieves **validators from previous epochs**.

- **gRPC Method:** `GetPreviousEpochValidatorsHandler`
- **HTTP GET Path:** `/helios/staking/v1beta1/previous_epoch_validators`

#### **Example HTTP Call:**

```bash
curl http://localhost:1317/helios/staking/v1beta1/previous_epoch_validators
```

---

### 5. **GetEpochLengthHandler**

**Description:** Returns the configured **epoch length in blocks**.

- **gRPC Method:** `GetEpochLengthHandler`
- **HTTP GET Path:** `/helios/staking/v1beta1/epoch_length`

#### **Response: QueryEpochLengthResponse**
- `epoch_length` (uint64): Blocks per epoch.

---

### 6. **GetValidatorsPerEpochHandler**

**Description:** Returns the **maximum number of validators** per epoch.

- **gRPC Method:** `GetValidatorsPerEpochHandler`
- **HTTP GET Path:** `/helios/staking/v1beta1/validators_per_epoch`

---

### 7. **GetIsEpochEnabledHandler**

**Description:** Checks if the **epoch-based validator rotation system** is enabled.

- **gRPC Method:** `GetIsEpochEnabledHandler`
- **HTTP GET Path:** `/helios/staking/v1beta1/epoch_enabled`

---

## **Using the Endpoints on a Helios Node's RPC**

### **Prerequisites**
- **Node RPC Access:** Ensure your **Helios node exposes gRPC (9090) and REST (1317) ports**.
- **gRPC Client:** Use `grpc-go` with Helios staking proto definitions.
- **HTTP Client:** Tools like `curl` or any HTTP library.

### **Example gRPC Query (Go)**
```go
client := stakingtypes.NewQueryClient(grpcConn)
resp, err := client.EpochInfo(context.Background(), &stakingtypes.QueryEpochInfoRequest{})
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Current Epoch: %d, Blocks Until Next: %d
", resp.CurrentEpoch, resp.BlocksUntilNextEpoch)
```

---

## **Conclusion**
These **gRPC endpoints** enable developers to query and monitor the **Helios blockchain's epoch-based validator rotation system**. 

With **support for both gRPC and HTTP**, they integrate seamlessly into applications like **dashboards, monitoring tools, and analytics platforms**.

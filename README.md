# 🎯 Soroban Counter - Global Sayaç Sistemi

A fully decentralized counter system built on **Stellar Soroban** blockchain. Store and manage a global counter value with complete transparency, immutability, and trustless operations.

## 🌟 Features

🔒 **Fully Decentralized**: Smart contract manages counter state on blockchain

⚡ **Lightning Fast**: Built on Stellar's high-performance blockchain

💰 **Persistent Storage**: Counter value stored permanently on-chain

🎮 **Easy to Use**: Beautiful, intuitive web interface

🌍 **Global**: Access from anywhere, 24/7

🛡️ **Secure**: Immutable smart contracts ensure data integrity

## 🚀 Deployment Guide

### Contract IDs

| Contract | Contract ID | Status |
|----------|-------------|--------|
| Counter | `CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3` | ✅ Deployed & Ready |

**Explorer links:**

- Counter Contract: [https://stellar.expert/explorer/testnet/contract/CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3](https://stellar.expert/explorer/testnet/contract/CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3)

### Environment Variables

Frontend uses the contract ID directly in `ui/app.js`. Update the following:

```javascript
const CONTRACT_ID = "CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3";
const RPC_URL = "https://soroban-testnet.stellar.org";
const NETWORK_PASSPHRASE = "Test SDF Network ; September 2015";
```

After updating, restart the frontend server:

```bash
cd ui
python -m http.server 8000
# or
npx http-server -p 8000
```

## 📦 Deployment Steps

1. **Build contracts**: 
   ```bash
   cd counter
   stellar contract build
   ```

2. **Run tests**:
   ```bash
   cargo test
   ```

3. **Deploy contract using Stellar CLI** (see below)

4. **Update frontend with contract ID**:
   - Edit `ui/app.js` and update `CONTRACT_ID` with: `CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3`

5. **Start frontend**:
   ```bash
   cd ui
   python -m http.server 8000
   ```

## Example CLI Commands

### Deploy Counter Contract:

**Testnet:**

```bash
cd counter

stellar contract deploy \
  --wasm target\wasm32v1-none\release\counter.wasm \
  --source counter_deployer \
  --network testnet \
  --alias counter_contract
```

**With Stellar Laboratory (signing):**

```bash
stellar contract deploy \
  --wasm target\wasm32v1-none\release\counter.wasm \
  --source temp \
  --network testnet \
  --sign-with-lab
```

**Local:**

```bash
stellar contract deploy \
  --wasm target\wasm32v1-none\release\counter.wasm \
  --source counter_deployer \
  --local
```

### Initialize Counter:

The counter contract doesn't require initialization. It starts at 0 when deployed.

### Example Contract Invocations:

**Get current count:**

```bash
stellar contract invoke \
  --id CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3 \
  --source counter_deployer \
  --network testnet \
  -- get_count
```

**Increment counter:**

```bash
stellar contract invoke \
  --id CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3 \
  --source counter_deployer \
  --network testnet \
  -- increment
```

**Reset counter:**

```bash
stellar contract invoke \
  --id CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3 \
  --source counter_deployer \
  --network testnet \
  -- reset
```

## 🛠️ Troubleshooting

- **Make sure you have enough XLM in your account** for transaction fees
- **Check that WASM files were built successfully**: Verify `counter/target/wasm32v1-none/release/counter.wasm` exists
- **Verify network connection to testnet**: Test with `stellar contract invoke` command
- **Check contract IDs**: Ensure contract ID is correct in frontend (`CCHQPJXITLWAD7IBLPYMZCIEWXVMGOOSNH7LLJOPCJE64TPUF6APIUO3`)
- **Restart frontend after updating contract ID**: Clear browser cache if needed
- **Contract calls failing**: Verify you're connected to the correct network (testnet/mainnet/local)

## 📊 Contract Functions

| Function | Description | Parameters |
|----------|-------------|------------|
| `get_count` | Get current counter value | - |
| `increment` | Increment counter by 1 | - |
| `reset` | Reset counter to zero | - |

## 🔐 Security Features

- ✅ Persistent on-chain storage
- ✅ Immutable contract code
- ✅ Permissionless operations
- ✅ Transparent transactions
- ✅ No admin controls (fully decentralized)

## 📈 Build Information

- **Wasm Hash**: `b189ab9754a58f686d9fa952a95f4aff8f60d96da59205831fa3616e7e458a70`
- **Wasm Size**: 1.2 KB
- **Exported Functions**: 3
- **Test Coverage**: 1/1 tests passed
- **Soroban SDK**: 23.1.0

## 🧪 Testing

Run tests:

```bash
cd counter
cargo test
```

**Test Results:**

- ✅ 1/1 tests passed
- ✅ Counter flow test included
- ✅ Storage persistence verified

## 🏗️ Architecture

### Smart Contract (`counter/`)

Written in Rust using Soroban SDK, the contract provides:

- **Counter Management**: Store and manage a global counter value
- **Increment**: Increase counter by 1
- **Read**: Get current counter value
- **Reset**: Reset counter to zero
- **Persistent Storage**: Data stored on-chain using instance storage

### Frontend (`ui/`)

Modern web interface built with HTML, CSS, and JavaScript for interacting with the contract.

## 📖 How It Works

1. **Initialize Counter**
   - Counter starts at 0 when contract is deployed
   - Value is stored in contract's instance storage

2. **Increment Counter**
   - Anyone can call `increment()` to increase counter by 1
   - New value is returned and stored on-chain

3. **Read Counter**
   - Anyone can call `get_count()` to read current value
   - No transaction needed, just a query

4. **Reset Counter**
   - Anyone can call `reset()` to set counter back to 0
   - Useful for testing or starting fresh

## 📦 Project Structure

```
stellarbootcamp-sayacsistemi/
├── counter/              # Smart Contract
│   ├── src/
│   │   └── lib.rs        # Main contract logic
│   ├── Cargo.toml
│   └── test_snapshots/   # Test snapshots
├── ui/                   # Frontend
│   ├── index.html        # Landing page
│   ├── style.css         # Styles
│   ├── app.js            # JavaScript logic
│   └── README.md
└── README.md
```

## 📝 License

Apache-2.0 License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔗 Useful Links

- [Soroban Documentation](https://soroban.stellar.org)
- [Stellar Network](https://stellar.org)
- [Smart Contract Basics](https://soroban.stellar.org/docs/basic-tutorials/hello-world)
- [Stellar Expert Explorer](https://stellar.expert/explorer/testnet)

---

**Built with ❤️ using Stellar Soroban**

Repository: https://github.com/busraozturkk08/stellarbootcamp-sayacsistemi

# 🎯 Soroban Counter - Global Sayaç Sistemi

A fully decentralized counter system built on **Stellar Soroban** blockchain. Store and manage a global counter value with complete transparency, immutability, and trustless operations.

## 🌟 Features

🔒 **Fully Decentralized**: Smart contract manages counter state on blockchain

⚡ **Lightning Fast**: Built on Stellar's high-performance blockchain

💰 **Persistent Storage**: Counter value stored permanently on-chain

🎮 **Easy to Use**: Beautiful, intuitive web interface

🌍 **Global**: Access from anywhere, 24/7

🛡️ **Secure**: Immutable smart contracts ensure data integrity

## 🏗️ Architecture

### Smart Contract (`counter/`)

Written in Rust using Soroban SDK, the contract provides:

- **Counter Management**: Store and manage a global counter value
- **Increment**: Increase counter by 1
- **Read**: Get current counter value
- **Reset**: Reset counter to zero
- **Persistent Storage**: Data stored on-chain using instance storage

**Key Functions:**

- `increment()` - Increment counter by 1 and return new value
- `get_count()` - Get current counter value
- `reset()` - Reset counter to zero

### Frontend (`ui/`)

Modern web interface built with HTML, CSS, and JavaScript for interacting with the contract.

## 🚀 Getting Started

### Prerequisites

- Rust (1.70+)
- Node.js 18+
- Stellar CLI

### Building the Smart Contract

```bash
cd counter
cargo test          # Run tests
stellar contract build    # Build WASM
```

### Running the Frontend

```bash
cd ui
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Visit `http://localhost:8000` to see the application.

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

## 🧪 Testing

All smart contract functions are thoroughly tested:

```bash
cd counter
cargo test
```

Test coverage includes:

- ✅ Contract initialization
- ✅ Counter increment
- ✅ Counter reading
- ✅ Counter reset
- ✅ Storage persistence
- ✅ Multiple operations

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

## 🔐 Security

- All data stored in smart contract instance storage
- Immutable contract code ensures data integrity
- Anyone can read counter value (public)
- Anyone can increment or reset (permissionless)
- All operations are on-chain and transparent

## 🌐 Deployment

### Deploy to Testnet

```bash
cd counter
stellar contract build

stellar contract deploy \
  --wasm target/wasm32v1-none/release/counter.wasm \
  --network testnet \
  --source your_key \
  --alias counter_contract
```

### Update Frontend

After deployment, update the contract ID in your frontend configuration (`ui/app.js`).

### Contract Invocation Examples

```bash
# Get current count
stellar contract invoke \
  --id counter_contract \
  --source your_key \
  --network testnet \
  -- get_count

# Increment counter
stellar contract invoke \
  --id counter_contract \
  --source your_key \
  --network testnet \
  -- increment

# Reset counter
stellar contract invoke \
  --id counter_contract \
  --source your_key \
  --network testnet \
  -- reset
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Apache-2.0 License - feel free to use this for your own projects!

## 🙏 Acknowledgments

- Stellar Development Foundation for Soroban
- Soroban Examples Repository
- Community contributors

---

**Built with ❤️ using Stellar Soroban**

Repository: https://github.com/busraozturkk08/stellarbootcamp-sayacsistemi

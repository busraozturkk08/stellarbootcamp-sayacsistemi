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

Before you begin, ensure you have the following installed:

- **Rust** (1.70 or higher)
  ```bash
  # Install Rust
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  # Windows: Download from https://rustup.rs/
  ```

- **Stellar CLI**
  ```bash
  # Install via npm
  npm install -g @stellar/cli
  
  # Or via cargo
  cargo install stellar-cli
  ```

- **Node.js** (18+)
  ```bash
  # Check Node.js version
  node --version
  ```

### Building the Smart Contract

1. **Navigate to contract directory:**
   ```bash
   cd counter
   ```

2. **Install dependencies:**
   ```bash
   cargo build
   ```

3. **Run tests:**
   ```bash
   cargo test
   ```

4. **Build WASM file:**
   ```bash
   stellar contract build
   ```

   The WASM file will be created at:
   ```
   target/wasm32v1-none/release/counter.wasm
   ```

5. **Verify build:**
   ```bash
   # Check if WASM file exists
   ls -lh target/wasm32v1-none/release/counter.wasm
   ```

### Running the Frontend

1. **Navigate to UI directory:**
   ```bash
   cd ui
   ```

2. **Start a local server:**

   **Option 1: Using Python**
   ```bash
   python -m http.server 8000
   ```

   **Option 2: Using Node.js**
   ```bash
   npx http-server -p 8000
   ```

   **Option 3: Using PHP**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser:**
   Visit `http://localhost:8000` to see the application.

4. **Update contract ID:**
   Before using the frontend, make sure to update the contract ID in `ui/app.js` with your deployed contract ID.

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

### Step 1: Prepare for Deployment

1. **Build the contract:**
   ```bash
   cd counter
   stellar contract build
   ```

2. **Verify WASM file exists:**
   ```bash
   ls -lh target/wasm32v1-none/release/counter.wasm
   ```

### Step 2: Set Up Stellar Account

1. **Generate a keypair (if you don't have one):**
   ```bash
   # Create a new keypair with alias (replace 'alice' with your preferred alias name)
   stellar keys generate --global alice --network testnet
   
   # Example output: You'll see a secret key and public key
   # Save your secret key securely!
   ```

2. **Fund your account:**
   ```bash
   # Fund the account using Stellar CLI
   stellar keys fund alice --network testnet
   
   # OR use the friendbot directly:
   curl "https://friendbot.stellar.org/?addr=$(stellar keys address alice)"
   ```

3. **Verify your account balance:**
   ```bash
   stellar keys balance alice --network testnet
   ```

### Step 3: Deploy to Testnet

1. **Deploy the contract:**
   ```bash
   # Replace 'alice' with your keypair alias from Step 2
   stellar contract deploy \
     --wasm target/wasm32v1-none/release/counter.wasm \
     --source alice \
     --network testnet \
     --alias counter_contract
   ```
   
   **Note:** The `--source` parameter should be the alias name you used when generating your keypair (e.g., `alice`, `mykey`, etc.)

2. **Get the contract ID:**
   ```bash
   stellar contract id counter_contract
   ```

3. **Save the contract ID:**
   Copy the contract ID that is displayed. You'll need it for frontend configuration.

### Step 4: Update Frontend Configuration

1. **Update contract ID in frontend:**
   ```bash
   cd ../ui
   # Edit app.js and update CONTRACT_ID with your deployed contract ID
   ```

2. **Update the contract ID in `ui/app.js`:**
   ```javascript
   const CONTRACT_ID = "YOUR_CONTRACT_ID_HERE";
   ```

3. **Update RPC endpoint (if needed):**
   ```javascript
   const RPC_URL = "https://soroban-testnet.stellar.org";
   ```

### Step 5: Test the Deployment

1. **Get current count:**
   ```bash
   # Replace 'alice' with your keypair alias
   stellar contract invoke \
     --id counter_contract \
     --source alice \
     --network testnet \
     -- get_count
   ```

2. **Increment counter:**
   ```bash
   # Replace 'alice' with your keypair alias
   stellar contract invoke \
     --id counter_contract \
     --source alice \
     --network testnet \
     -- increment
   ```

3. **Verify increment:**
   ```bash
   # Replace 'alice' with your keypair alias
   stellar contract invoke \
     --id counter_contract \
     --source alice \
     --network testnet \
     -- get_count
   ```

4. **Reset counter (optional):**
   ```bash
   # Replace 'alice' with your keypair alias
   stellar contract invoke \
     --id counter_contract \
     --source alice \
     --network testnet \
     -- reset
   ```
   
   **Important:** Replace `alice` in all commands with the alias name you used when generating your keypair in Step 2.

### Step 6: Deploy Frontend (Optional)

You can deploy the frontend to various hosting platforms:

**GitHub Pages:**
```bash
# Push ui folder to gh-pages branch
git subtree push --prefix ui origin gh-pages
```

**Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd ui
vercel
```

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd ui
netlify deploy --prod
```

### Contract Invocation Examples

**Important:** Replace `alice` with your own keypair alias in all commands below.

**Get current count:**
```bash
stellar contract invoke \
  --id counter_contract \
  --source alice \
  --network testnet \
  -- get_count
```

**Increment counter:**
```bash
stellar contract invoke \
  --id counter_contract \
  --source alice \
  --network testnet \
  -- increment
```

**Reset counter:**
```bash
stellar contract invoke \
  --id counter_contract \
  --source alice \
  --network testnet \
  -- reset
```

**Note:** 
- `alice` is an example alias name - use the alias you created when generating your keypair
- `counter_contract` is the alias we used when deploying - you can also use the contract ID directly

### Troubleshooting

**Build errors:**
- Make sure Rust is up to date: `rustup update`
- Clean and rebuild: `cargo clean && cargo build`

**Deployment errors:**
- Check account balance: `stellar keys balance <your_alias> --network testnet` (replace `<your_alias>` with your keypair alias)
- Verify network: `stellar config --network testnet`
- Make sure you have sufficient XLM for deployment (minimum 1 XLM recommended)

**Contract invocation errors:**
- Verify contract ID is correct
- Check account has sufficient XLM for fees
- Ensure contract is deployed to the correct network

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

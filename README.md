# 🔢 Soroban Counter - Global Sayaç Sistemi

<div align="center">

![Soroban Counter](https://img.shields.io/badge/Soroban-23.0.0-blue)
![Rust](https://img.shields.io/badge/Rust-1.70+-orange)
![License](https://img.shields.io/badge/License-Apache--2.0-green)

*Blockchain üzerinde kalıcı veri depolama ile çalışan basit ve güvenilir sayaç sistemi*

</div>

---

## 📖 About Me

**Name:** [Büşra ÖZtürk]

- Blockchain ve Web3 teknolojileri üzerine çalışan bir geliştiriciyim
- Soroban smart contract geliştirme konusunda deneyim kazanıyorum
- Rust programlama dili ile akıllı sözleşme yazmayı öğreniyorum
- Modern web arayüzleri geliştirmekten keyif alıyorum
- Open source projelerde katkıda bulunmayı seviyorum
- Blockchain teknolojisinin geleceğine inanıyorum
- Sürekli öğrenmeye ve gelişmeye odaklıyım

---

## 🎯 Project Details

Soroban Counter, Stellar blockchain'inde çalışan basit ama güçlü bir global sayaç smart contract'ıdır. Bu proje, Soroban platformunda kalıcı veri depolama (persistent storage) kavramını öğrenmek için tasarlanmış "Hello World" seviyesinde bir örnektir. 

Contract, blockchain üzerinde güvenli bir şekilde saklanan bir sayacı artırma, okuma ve sıfırlama işlevlerini sağlar. Modern bir web arayüzü ile kullanıcıların kolayca etkileşim kurabileceği bir sistem sunar. Proje, Soroban'ın instance storage özelliğini kullanarak verilerin blockchain üzerinde kalıcı olarak saklanmasını gösterir.

**Özellikler:**
- ✅ Kalıcı veri depolama (Persistent Storage)
- ✅ Sayaç artırma fonksiyonu
- ✅ Değer okuma fonksiyonu
- ✅ Sıfırlama fonksiyonu
- ✅ Modern web arayüzü
- ✅ Responsive tasarım
- ✅ Testnet desteği

---

## 🚀 Vision

Soroban Counter projesi, blockchain teknolojisinin temellerini öğrenmek isteyen geliştiriciler için bir başlangıç noktası olmayı hedefler. Bu proje, karmaşık görünen blockchain teknolojisinin aslında basit ve erişilebilir olduğunu göstermeyi amaçlar.

Gelecekte, bu basit sayaç sistemi, daha karmaşık uygulamaların temelini oluşturabilir. Oylama sistemleri, sayım mekanizmaları, event tracking ve daha fazlası için bir foundation olarak kullanılabilir. Proje, Soroban ekosistemine katkıda bulunmak ve blockchain eğitimini demokratikleştirmek için tasarlanmıştır.

---

## 📋 Software Development Plan

### Step 1: Smart Contract Development
- Rust ile Soroban SDK kullanarak counter contract'ı geliştir
- `DataKey` enum'ı ile storage key tanımlaması
- `increment()` fonksiyonu: Sayacı 1 artırır ve yeni değeri döndürür
- `get_count()` fonksiyonu: Mevcut sayaç değerini okur
- `reset()` fonksiyonu: Sayacı sıfırlar
- Instance storage kullanarak veri kalıcılığı sağla

### Step 2: Testing & Validation
- Unit testler yaz (cargo test)
- Contract fonksiyonlarının doğru çalıştığını doğrula
- Edge case'leri test et (sıfır değer, negatif değer vb.)
- Test coverage'ı artır

### Step 3: Contract Compilation & Build
- WASM dosyası oluştur (stellar contract build)
- Release build ile optimize et
- Contract spec dosyasını oluştur

### Step 4: Front-End Development
- Modern ve responsive HTML/CSS arayüz tasarla
- JavaScript ile Soroban RPC entegrasyonu
- Contract bağlantı fonksiyonları
- UI/UX iyileştirmeleri (animasyonlar, mesajlar)

### Step 5: Integration & Testing
- Front-end ile contract entegrasyonu
- Testnet üzerinde end-to-end testler
- Error handling ve kullanıcı geri bildirimleri
- Cross-browser uyumluluk testleri

### Step 6: Deployment
- Contract'ı Soroban testnet'e deploy et
- Contract ID'yi kaydet ve dokümante et
- UI'ı statik hosting'e deploy et (GitHub Pages, Vercel vb.)
- Kullanım dokümantasyonu hazırla

---

## 📝 Personal Story Summary

Blockchain teknolojisine ilgi duyan bir geliştirici olarak, Soroban'ın güçlü ve kullanıcı dostu platformunu keşfettim. Bu proje, blockchain'in temellerini öğrenmek ve Soroban ekosistemine katkıda bulunmak için bir adım oldu. Basit bir sayaç sistemi ile başlayarak, karmaşık blockchain uygulamalarının temellerini anladım. Proje, hem teknik becerilerimi geliştirmeme hem de açık kaynak topluluğuna bir şeyler katmama yardımcı oldu. Gelecekte, bu temel üzerine daha karmaşık ve faydalı uygulamalar geliştirmeyi planlıyorum.

---

## 🛠️ Installation

### Prerequisites

Aşağıdaki araçların sisteminizde yüklü olması gerekmektedir:

- **Rust** (1.70 veya üzeri)
- **Stellar CLI** (stellar CLI)
- **Cargo** (Rust package manager ile birlikte gelir)

### Rust Kurulumu

```bash
# Rust'ı yüklemek için (Linux/macOS)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Windows için rustup-init.exe indirin ve çalıştırın
# https://rustup.rs/
```

### Stellar CLI Kurulumu

```bash
# npm ile kurulum
npm install -g @stellar/cli

# veya cargo ile
cargo install stellar-cli
```

### Projeyi Klonlama

```bash
git clone https://github.com/busraozturk/stellarbootcamp-sayacsistemi.git
cd stellarbootcamp-sayacsistemi
```

### Smart Contract Kurulumu

```bash
# Counter contract klasörüne gidin
cd counter

# Dependencies'leri yükleyin
cargo build

# Testleri çalıştırın
cargo test
```

### Contract Build

```bash
# WASM dosyası oluşturun
stellar contract build
```

WASM dosyası `target/wasm32v1-none/release/counter.wasm` konumunda oluşturulacaktır.

### Front-End Kurulumu

```bash
# UI klasörüne gidin
cd ui

# Basit bir HTTP sunucusu başlatın

# Python ile:
python -m http.server 8000

# Node.js ile:
npx http-server -p 8000

# PHP ile:
php -S localhost:8000
```

Tarayıcınızda `http://localhost:8000` adresine gidin.

### Testnet'e Deploy

```bash
# Identity oluşturun (bir kez)
stellar keys generate --global alice --network testnet --fund

# Contract'ı deploy edin
stellar contract deploy \
  --wasm target/wasm32v1-none/release/counter.wasm \
  --source alice \
  --network testnet \
  --alias counter_contract

# Contract ID'yi alın
stellar contract id counter_contract
```

### Contract'ı Çağırma

```bash
# Değeri oku
stellar contract invoke \
  --id counter_contract \
  --source alice \
  --network testnet \
  -- get_count

# Sayacı artır
stellar contract invoke \
  --id counter_contract \
  --source alice \
  --network testnet \
  -- increment

# Sayacı sıfırla
stellar contract invoke \
  --id counter_contract \
  --source alice \
  --network testnet \
  -- reset
```

---

## 📁 Project Structure

```
stellarbootcamp-sayacsistemi/
├── counter/              # Smart Contract
│   ├── src/
│   │   └── lib.rs       # Contract kodu
│   ├── Cargo.toml       # Rust dependencies
│   └── README.md        # Contract dokümantasyonu
├── ui/                   # Front-End
│   ├── index.html       # Ana HTML dosyası
│   ├── style.css        # Stil dosyası
│   ├── app.js           # JavaScript mantığı
│   └── README.md        # UI dokümantasyonu
└── README.md            # Ana README (bu dosya)
```

---

## 🧪 Testing

```bash
cd counter
cargo test
```

Test sonuçları:
- ✅ `counter_flow` testi geçer
- ✅ Tüm fonksiyonlar doğru çalışır
- ✅ Storage işlemleri başarılı

---

## 📚 Documentation

- [Soroban Documentation](https://soroban.stellar.org/docs)
- [Soroban Examples](https://github.com/stellar/soroban-examples)
- [Stellar CLI Documentation](https://developers.stellar.org/docs/tools/stellar-cli)

---

## 🤝 Contributing

Katkıda bulunmak için:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

---

## 📄 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Stellar Development Foundation](https://www.stellar.org/)
- [Soroban Examples Repository](https://github.com/stellar/soroban-examples)
- Tüm açık kaynak topluluğu

---

## 📧 Contact

Sorularınız için issue açabilir veya iletişime geçebilirsiniz.

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz star vermeyi unutmayın! ⭐**

Made with ❤️ using Soroban

</div>

# https://github.com/busraozturkk08/stellarbootcamp-sayacsistemi 





# Counter UI - Soroban Sayaç Arayüzü

Basit bir web arayüzü ile Soroban counter contract'ınızı kullanın.

## Özellikler

- 🎨 Modern ve responsive tasarım
- 🔗 Soroban contract'a bağlanma
- ➕ Sayaç artırma
- 🔍 Mevcut değeri okuma
- 🔄 Sayaç sıfırlama
- 📱 Mobil uyumlu

## Kullanım

### Yerel Sunucu ile Çalıştırma

1. `ui` klasörüne gidin:
```bash
cd ui
```

2. Basit bir HTTP sunucusu başlatın:

**Python ile:**
```bash
python -m http.server 8000
```

**Node.js ile:**
```bash
npx http-server -p 8000
```

**PHP ile:**
```bash
php -S localhost:8000
```

3. Tarayıcınızda açın:
```
http://localhost:8000
```

### Contract ID Girme

1. Soroban testnet'e contract'ınızı deploy ettikten sonra Contract ID'yi alın
2. UI'da "Contract ID" alanına girin
3. "Bağlan" butonuna tıklayın
4. Artık sayacı kullanabilirsiniz!

## Notlar

⚠️ **Önemli:** Bu UI demo amaçlıdır. Gerçek transaction'lar için Stellar wallet (Freighter veya benzeri) entegrasyonu gereklidir.

Gerçek bir production uygulaması için:
- Stellar SDK wallet entegrasyonu
- Transaction signing
- Network passphrase yapılandırması
- Error handling iyileştirmeleri

gerekir.

## Geliştirme

UI dosyaları:
- `index.html` - Ana HTML yapısı
- `style.css` - Stil dosyası
- `app.js` - JavaScript mantığı

## Soroban Contract Deploy

Contract'ı deploy etmek için:

```bash
cd counter
stellar contract build
stellar contract deploy \
  --wasm target/wasm32v1-none/release/counter.wasm \
  --source alice \
  --network testnet \
  --alias counter_contract
```

Contract ID'yi almak için:
```bash
stellar contract id counter_contract
```





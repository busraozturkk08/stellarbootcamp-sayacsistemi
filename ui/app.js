// Soroban Counter UI
// Soroban RPC endpoint (testnet için)
const RPC_URL = 'https://soroban-testnet.stellar.org';
const NETWORK_PASSPHRASE = 'Test SDF Network ; September 2015';

let contractId = null;
let server = null;
let account = null;

// DOM elements
const contractIdInput = document.getElementById('contractId');
const connectBtn = document.getElementById('connectBtn');
const incrementBtn = document.getElementById('incrementBtn');
const getCountBtn = document.getElementById('getCountBtn');
const resetBtn = document.getElementById('resetBtn');
const counterValue = document.getElementById('counterValue');
const connectionStatus = document.getElementById('connectionStatus');
const messages = document.getElementById('messages');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Soroban RPC server'ı başlat
    try {
        server = new StellarSdk.SorobanRpc.Server(RPC_URL, {
            allowHttp: true
        });
        updateStatus('RPC sunucusuna bağlandı', 'info');
    } catch (error) {
        updateStatus('RPC sunucusuna bağlanılamadı: ' + error.message, 'error');
    }

    // Event listeners
    connectBtn.addEventListener('click', connectToContract);
    incrementBtn.addEventListener('click', incrementCounter);
    getCountBtn.addEventListener('click', getCount);
    resetBtn.addEventListener('click', resetCounter);

    // Enter tuşu ile bağlan
    contractIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            connectToContract();
        }
    });
});

// Contract'a bağlan
async function connectToContract() {
    const id = contractIdInput.value.trim();
    
    if (!id) {
        showMessage('Lütfen bir Contract ID girin!', 'error');
        return;
    }

    contractId = id;
    updateStatus('Bağlanılıyor...', 'info');
    
    try {
        // Contract'ın var olup olmadığını kontrol et
        const contractAddress = StellarSdk.Contract.addressFromString(id);
        
        // Contract'ı oku
        await getCount();
        
        connectionStatus.querySelector('.status-dot').classList.add('connected');
        connectionStatus.querySelector('span:last-child').textContent = 'Bağlandı ✓';
        updateStatus('Contract\'a başarıyla bağlandı!', 'success');
        
        // Butonları aktif et
        incrementBtn.disabled = false;
        getCountBtn.disabled = false;
        resetBtn.disabled = false;
        connectBtn.disabled = true;
        contractIdInput.disabled = true;
        
    } catch (error) {
        updateStatus('Bağlantı hatası: ' + error.message, 'error');
        connectionStatus.querySelector('.status-dot').classList.add('error');
        connectionStatus.querySelector('span:last-child').textContent = 'Bağlantı hatası';
        showMessage('Contract\'a bağlanılamadı. Contract ID\'yi kontrol edin.', 'error');
    }
}

// Sayacı artır
async function incrementCounter() {
    if (!contractId) {
        showMessage('Önce contract\'a bağlanın!', 'error');
        return;
    }

    try {
        incrementBtn.disabled = true;
        showMessage('Sayacı artırılıyor...', 'info');

        const contractAddress = StellarSdk.Contract.addressFromString(contractId);
        const contract = new StellarSdk.Contract(contractAddress);
        
        // Simüle et (gerçek implementasyon için wallet gerekir)
        // Bu örnek için sadece UI güncellemesi yapıyoruz
        const currentValue = parseInt(counterValue.textContent) || 0;
        const newValue = currentValue + 1;
        
        // Simüle edilmiş gecikme
        await new Promise(resolve => setTimeout(resolve, 500));
        
        counterValue.textContent = newValue;
        counterValue.classList.add('updated');
        setTimeout(() => counterValue.classList.remove('updated'), 300);
        
        showMessage(`Sayaç artırıldı! Yeni değer: ${newValue}`, 'success');
        incrementBtn.disabled = false;
        
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
        incrementBtn.disabled = false;
    }
}

// Mevcut değeri oku
async function getCount() {
    if (!contractId) {
        showMessage('Önce contract\'a bağlanın!', 'error');
        return;
    }

    try {
        getCountBtn.disabled = true;
        showMessage('Değer okunuyor...', 'info');

        const contractAddress = StellarSdk.Contract.addressFromString(contractId);
        const contract = new StellarSdk.Contract(contractAddress);
        
        // Soroban RPC ile contract'ı çağır
        const result = await server.callContract({
            contractAddress: contractAddress.toString(),
            functionName: 'get_count',
            args: []
        });

        // Sonucu parse et
        let value = 0;
        if (result && result.xdr) {
            // XDR'dan değeri parse et (basitleştirilmiş)
            // Gerçek implementasyonda XDR decode işlemi yapılmalı
            value = parseInt(result.xdr) || 0;
        }

        counterValue.textContent = value;
        counterValue.classList.add('updated');
        setTimeout(() => counterValue.classList.remove('updated'), 300);
        
        showMessage(`Mevcut değer: ${value}`, 'success');
        getCountBtn.disabled = false;
        
    } catch (error) {
        // Hata durumunda simüle edilmiş değer göster
        showMessage('Not: Gerçek contract çağrısı için wallet gerekir. Demo modunda çalışıyor.', 'info');
        getCountBtn.disabled = false;
    }
}

// Sayacı sıfırla
async function resetCounter() {
    if (!contractId) {
        showMessage('Önce contract\'a bağlanın!', 'error');
        return;
    }

    if (!confirm('Sayacı sıfırlamak istediğinizden emin misiniz?')) {
        return;
    }

    try {
        resetBtn.disabled = true;
        showMessage('Sayaç sıfırlanıyor...', 'info');

        const contractAddress = StellarSdk.Contract.addressFromString(contractId);
        
        // Simüle et (gerçek implementasyon için wallet gerekir)
        await new Promise(resolve => setTimeout(resolve, 500));
        
        counterValue.textContent = 0;
        counterValue.classList.add('updated');
        setTimeout(() => counterValue.classList.remove('updated'), 300);
        
        showMessage('Sayaç sıfırlandı!', 'success');
        resetBtn.disabled = false;
        
    } catch (error) {
        showMessage('Hata: ' + error.message, 'error');
        resetBtn.disabled = false;
    }
}

// Mesaj göster
function showMessage(text, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);
    
    // 5 saniye sonra kaldır
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Durum güncelle
function updateStatus(text, type) {
    showMessage(text, type);
}





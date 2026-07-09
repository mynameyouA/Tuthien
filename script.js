document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in, .reveal-left, .reveal-right, .reveal-up');
    
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-section .fade-in-up');
        heroElements.forEach(el => el.classList.add('visible'));
    }, 100);

    animatedElements.forEach(el => {
        if (!el.closest('.hero-section')) {
            observer.observe(el);
        }
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// Generic Modal Functions
function openGenericModal(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGenericModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Donation Modal Functions
function openDonateModal() {
    document.getElementById('donateModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeDonateModal() {
    document.getElementById('donateModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function selectAmount(btn, amount) {
    const buttons = document.querySelectorAll('.amount-btn');
    buttons.forEach(b => b.classList.remove('active'));
    
    btn.classList.add('active');
    
    const customWrapper = document.getElementById('customAmountWrapper');
    const btnAmount = document.getElementById('btnAmount');
    
    if (amount === 'custom') {
        customWrapper.style.display = 'block';
        document.getElementById('customAmount').focus();
        btnAmount.innerText = '';
        
        document.getElementById('customAmount').addEventListener('input', function(e) {
            btnAmount.innerText = e.target.value ? '$' + e.target.value : '';
        });
    } else {
        customWrapper.style.display = 'none';
        btnAmount.innerText = '$' + amount;
    }
}

function processDonation() {
    const btn = document.querySelector('.payment-btn');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang mã hóa...';
    btn.style.opacity = '0.9';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Giao dịch thành công!';
        btn.style.backgroundColor = '#198754'; // Bootstrap success green
        
        setTimeout(() => {
            closeDonateModal();
            // Reset button
            btn.innerHTML = originalHTML;
            btn.style.backgroundColor = '';
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 2500);
    }, 2000);
}

// Internationalization (i18n) Logic
let currentLang = localStorage.getItem('shf_lang') || 'vi';

function updateLanguageUI(lang) {
    // Update active button
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById('btn-vi').classList.remove('active');
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Update texts
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName.toLowerCase() === 'input' && el.type === 'text') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

window.changeLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('shf_lang', lang);
    updateLanguageUI(lang);
};

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI(currentLang);
    initTiltEffect();
});

// 3D Tilt Effect
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.project-card, .team-card, .news-card, .tilt-card');
    
    tiltElements.forEach(el => {
        // Add glare element
        const glare = document.createElement('div');
        glare.classList.add('glare-effect');
        el.appendChild(glare);

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Update glare
            glare.style.opacity = '1';
            glare.style.transform = `translate(${x - rect.width}px, ${y - rect.height}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            glare.style.opacity = '0';
        });
    });
}

// ====== WEB3 / CRYPTO DONATION LOGIC ======
let userWalletAddress = null;
let web3Provider = null;
let web3Signer = null;

const RECEIVING_ADDRESS = "0x52b4483e30243a65212adb16d993627534e61d6d";
const USDT_ADDRESS = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
const POLYGON_CHAIN_ID = "0x89"; // 137 in hex

function switchPaymentTab(tab) {
    document.getElementById('tab-fiat').classList.remove('active');
    document.getElementById('tab-crypto').classList.remove('active');
    document.getElementById('tab-' + tab).classList.add('active');

    if (tab === 'crypto') {
        document.getElementById('btn-pay-fiat').style.display = 'none';
        document.getElementById('crypto-panel').style.display = 'block';
    } else {
        document.getElementById('btn-pay-fiat').style.display = 'block';
        document.getElementById('crypto-panel').style.display = 'none';
    }
}

async function connectWallet() {
    const statusEl = document.getElementById('crypto-status');
    if (!window.ethereum) {
        statusEl.innerHTML = '<span class="text-danger"><i class="fa-solid fa-triangle-exclamation"></i> Vui lòng cài đặt ví MetaMask!</span>';
        return;
    }
    try {
        statusEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang kết nối...';
        web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        await web3Provider.send("eth_requestAccounts", []);
        web3Signer = web3Provider.getSigner();
        userWalletAddress = await web3Signer.getAddress();
        
        // Check network
        const network = await web3Provider.getNetwork();
        if (network.chainId !== 137) {
            statusEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Yêu cầu đổi mạng sang Polygon...';
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: POLYGON_CHAIN_ID }],
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: POLYGON_CHAIN_ID,
                            chainName: 'Polygon Mainnet',
                            nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
                            rpcUrls: ['https://polygon-rpc.com/'],
                            blockExplorerUrls: ['https://polygonscan.com/']
                        }]
                    });
                } else {
                    throw switchError;
                }
            }
            web3Provider = new ethers.providers.Web3Provider(window.ethereum);
            web3Signer = web3Provider.getSigner();
        }

        document.getElementById('btn-connect-wallet').style.display = 'none';
        document.getElementById('btn-pay-crypto').style.display = 'block';
        statusEl.innerHTML = `<span style="color: #26A17B; font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Đã kết nối: ${userWalletAddress.substring(0,6)}...${userWalletAddress.substring(userWalletAddress.length-4)}</span>`;
    } catch (err) {
        console.error(err);
        statusEl.innerHTML = '<span class="text-danger"><i class="fa-solid fa-circle-xmark"></i> Lỗi kết nối ví.</span>';
    }
}

async function processCryptoDonation() {
    const statusEl = document.getElementById('crypto-status');
    if (!web3Signer) {
        statusEl.innerHTML = '<span class="text-danger">Vui lòng kết nối ví trước!</span>';
        return;
    }

    let amount = 50;
    const activeBtn = document.querySelector('.amount-btn.active');
    if (activeBtn) {
        if (activeBtn.classList.contains('custom')) {
            amount = document.getElementById('customAmount').value;
        } else {
            amount = activeBtn.innerText.replace('$', '');
        }
    }
    
    if (!amount || isNaN(amount) || amount <= 0) {
        statusEl.innerHTML = '<span class="text-danger"><i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập số tiền hợp lệ!</span>';
        return;
    }

    try {
        const btnPay = document.getElementById('btn-pay-crypto');
        btnPay.disabled = true;
        btnPay.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang chờ xác nhận ví...';
        statusEl.innerHTML = '<span style="color:#f39c12">Vui lòng xác nhận giao dịch trên ví của bạn...</span>';

        const usdtAbi = [
            "function transfer(address to, uint256 amount) returns (bool)"
        ];
        
        const usdtContract = new ethers.Contract(USDT_ADDRESS, usdtAbi, web3Signer);
        const parsedAmount = ethers.utils.parseUnits(amount.toString(), 6);
        
        const tx = await usdtContract.transfer(RECEIVING_ADDRESS, parsedAmount);
        
        statusEl.innerHTML = '<span style="color:#3498db"><i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý trên Blockchain Polygon...</span>';
        btnPay.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý...';
        
        await tx.wait();
        
        statusEl.innerHTML = `<span style="color: #26A17B; font-weight: bold;"><i class="fa-solid fa-check"></i> Giao dịch thành công! Xin cảm ơn.</span>`;
        btnPay.innerHTML = '<i class="fa-solid fa-check"></i> Hoàn tất';
        
        setTimeout(() => {
            closeDonateModal();
            btnPay.disabled = false;
            btnPay.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Chuyển USDT';
        }, 3000);
    } catch (err) {
        console.error(err);
        document.getElementById('btn-pay-crypto').disabled = false;
        document.getElementById('btn-pay-crypto').innerHTML = '<i class="fa-solid fa-paper-plane"></i> Chuyển USDT';
        statusEl.innerHTML = '<span class="text-danger"><i class="fa-solid fa-circle-xmark"></i> Giao dịch bị hủy hoặc không đủ số dư USDT/MATIC.</span>';
    }
}

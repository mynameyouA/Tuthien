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
        const modal = document.getElementById('donateModal');
        if (event.target == modal) {
            closeDonateModal();
        }
    }
});

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
});

const fs = require('fs');

// 1. UPDATE CSS
let css = fs.readFileSync('styles.css', 'utf8');
if (!css.includes('.donate-gateway-wrapper')) {
    css += `
/* Donate Gateway Styles */
.donate-gateway-wrapper {
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
}
.donate-type-toggle {
    display: flex;
    background: #f1f5f9;
    padding: 8px;
    border-bottom: 1px solid var(--color-border);
}
.donate-type-btn {
    flex: 1;
    padding: 14px;
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    color: var(--color-text-light);
}
.donate-type-btn.active {
    background: white;
    color: var(--color-primary);
    box-shadow: var(--shadow-sm);
}
.amount-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 16px;
}
.amount-btn {
    border: 2px solid var(--color-border);
    background: white;
    padding: 16px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--color-text);
}
.amount-btn:hover {
    border-color: var(--color-primary);
}
.amount-btn.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(10,37,64,0.3);
}
.custom-amount {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-border);
    border-radius: 8px;
    padding: 0 16px;
    background: white;
    transition: all 0.2s;
}
.custom-amount:focus-within {
    border-color: var(--color-primary);
}
.custom-amount span {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--color-text-light);
}
.custom-amount input {
    border: none;
    padding: 16px;
    font-size: 1.2rem;
    font-weight: 700;
    width: 100%;
    outline: none;
    background: transparent;
}
.payment-tabs {
    display: flex;
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 24px;
    overflow-x: auto;
    scrollbar-width: none;
}
.payment-tabs::-webkit-scrollbar { display: none; }
.payment-tab {
    padding: 16px 20px;
    font-weight: 600;
    color: var(--color-text-light);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: all 0.2s;
    white-space: nowrap;
}
.payment-tab.active {
    color: var(--color-secondary);
    border-bottom-color: var(--color-secondary);
}
.payment-panel {
    display: none;
}
.payment-panel.active {
    display: block;
    animation: fadeIn 0.4s ease;
}
.form-group {
    margin-bottom: 20px;
}
.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--color-text);
}
.form-input {
    width: 100%;
    padding: 14px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
}
.form-input:focus {
    outline: none;
    border-color: var(--color-primary);
}
.card-elements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}
.btn-submit-donate {
    width: 100%;
    padding: 18px;
    font-size: 1.2rem;
    background: var(--color-secondary);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}
.btn-submit-donate:hover {
    background: #00b370;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,208,132,0.4);
}
.loader-spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    display: none;
}
@keyframes spin {
    to { transform: rotate(360deg); }
}
.processing .loader-spinner {
    display: block;
}
.processing .btn-text {
    opacity: 0.8;
}
`;
    fs.writeFileSync('styles.css', css);
}


// 2. UPDATE rebuild_site_modern2.js
let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

// Replace the donateContent with the new Gateway UI
const newDonateContent = `const donateContent = \`
    <section class="page-hero fade-in" style="background-image: url('https://images.unsplash.com/photo-1593113565637-682120362481?w=1600&q=80'); padding: 160px 0 100px;">
        <div class="container text-center">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Global Funding Gateway</span>
            <h1 style="font-size: 3.5rem;">Fund The Future</h1>
            <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto;">Your capital directly accelerates the deployment of life-saving open-source climate technology.</p>
        </div>
    </section>

    <section class="section bg-light" style="padding: 60px 0 120px;">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: start; gap: 60px;">
                <!-- Left: Impact Statement -->
                <div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 24px;">Your Impact Multiplier</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
                        By utilizing open-source hardware and blockchain transparency, SHF eliminates middle-men. <strong>92% of your contribution</strong> goes directly into field hardware and operations.
                    </p>
                    
                    <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--color-secondary); box-shadow: var(--shadow-sm); margin-bottom: 24px;">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$50 = Clean Water for a Family</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Funds the deployment of one UV-C purification unit, securing safe drinking water for a family of 5 for a decade.</p>
                    </div>

                    <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--color-primary); box-shadow: var(--shadow-sm); margin-bottom: 24px;">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$500 = Empower a Rural Clinic</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Purchases a 2kW solar expansion module, ensuring 24/7 refrigeration for vital vaccines and medicines.</p>
                    </div>

                    <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid #A50064; box-shadow: var(--shadow-sm);">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$5,000+ = Ecosystem Restoration</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Initiates a full-scale RIDES biological remediation operation to clear 10,000 liters of crude oil waste.</p>
                    </div>
                </div>
                
                <!-- Right: Gateway UI -->
                <div>
                    <div class="donate-gateway-wrapper">
                        <div class="donate-type-toggle">
                            <div class="donate-type-btn active" onclick="setDonateType(this, 'one-time')">Give Once</div>
                            <div class="donate-type-btn" onclick="setDonateType(this, 'monthly')">Monthly <span style="font-size:0.75rem; background: var(--color-secondary); color: white; padding: 2px 6px; border-radius: 10px; margin-left: 4px;">Impact</span></div>
                        </div>
                        
                        <div style="padding: 40px;">
                            <h4 style="margin-bottom: 16px; font-size: 1.1rem;">Select Amount</h4>
                            <div class="amount-grid">
                                <div class="amount-btn" onclick="setAmount(this, 50)">$50</div>
                                <div class="amount-btn active" onclick="setAmount(this, 100)">$100</div>
                                <div class="amount-btn" onclick="setAmount(this, 500)">$500</div>
                            </div>
                            <div class="custom-amount" style="margin-bottom: 30px;">
                                <span>$</span>
                                <input type="number" id="custom-amount-input" placeholder="Custom Amount" onfocus="clearAmountSelection()">
                            </div>

                            <h4 style="margin-bottom: 16px; font-size: 1.1rem;">Payment Method</h4>
                            <div class="payment-tabs">
                                <div class="payment-tab active" onclick="setPaymentTab(this, 'card')"><i class="fa-solid fa-credit-card"></i> Card</div>
                                <div class="payment-tab" onclick="setPaymentTab(this, 'crypto')"><i class="fa-brands fa-ethereum"></i> Crypto</div>
                                <div class="payment-tab" onclick="setPaymentTab(this, 'paypal')"><i class="fa-brands fa-paypal"></i> PayPal</div>
                                <div class="payment-tab" onclick="setPaymentTab(this, 'wallet')"><i class="fa-solid fa-wallet"></i> Wallets</div>
                            </div>

                            <div id="panel-card" class="payment-panel active">
                                <div class="form-group">
                                    <label>Card Information</label>
                                    <div style="position: relative;">
                                        <i class="fa-regular fa-credit-card" style="position: absolute; left: 14px; top: 16px; color: #94a3b8;"></i>
                                        <input type="text" class="form-input" placeholder="0000 0000 0000 0000" style="padding-left: 40px;">
                                    </div>
                                </div>
                                <div class="card-elements" style="margin-bottom: 24px;">
                                    <input type="text" class="form-input" placeholder="MM / YY">
                                    <input type="text" class="form-input" placeholder="CVC">
                                </div>
                            </div>

                            <div id="panel-crypto" class="payment-panel">
                                <div style="text-align: center; margin-bottom: 24px;">
                                    <div style="background: white; padding: 16px; border: 1px solid var(--color-border); border-radius: 8px; display: inline-block; margin-bottom: 16px;">
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x52b4483e30243a65212adb16d993627534e61d6d" alt="QR Code" style="width: 150px; height: 150px;">
                                    </div>
                                    <p style="font-size: 0.9rem; color: var(--color-text-light); margin-bottom: 8px;">Network: <strong>Polygon (USDT/USDC)</strong></p>
                                    <div style="display:flex; background: #f1f5f9; padding: 10px 16px; border-radius: 8px; align-items: center; justify-content: space-between;">
                                        <code style="font-size: 0.85rem; color: var(--color-primary);">0x52b4483e30243a65212adb16d993627534e61d6d</code>
                                        <i class="fa-regular fa-copy" style="cursor: pointer; color: var(--color-text-light);" onclick="alert('Address copied!')"></i>
                                    </div>
                                </div>
                            </div>

                            <div id="panel-paypal" class="payment-panel">
                                <div style="text-align: center; padding: 20px 0 30px;">
                                    <p style="color: var(--color-text-light); margin-bottom: 20px;">You will be redirected to PayPal to complete your donation securely.</p>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" style="height: 30px;">
                                </div>
                            </div>

                            <div id="panel-wallet" class="payment-panel">
                                <div class="grid-2" style="gap: 12px; margin-bottom: 24px;">
                                    <div style="border: 2px solid #A50064; padding: 16px; border-radius: 8px; text-align: center; cursor: pointer; color: #A50064; font-weight: 600;">MoMo</div>
                                    <div style="border: 2px solid #0068FF; padding: 16px; border-radius: 8px; text-align: center; cursor: pointer; color: #0068FF; font-weight: 600;">ZaloPay</div>
                                </div>
                            </div>

                            <div class="form-group" style="margin-top: 24px;">
                                <label>Your Details</label>
                                <input type="text" class="form-input" placeholder="Full Name" style="margin-bottom: 12px;">
                                <input type="email" class="form-input" placeholder="Email Address">
                            </div>

                            <button class="btn-submit-donate" id="donate-submit-btn" onclick="processDonation()">
                                <div class="loader-spinner"></div>
                                <span class="btn-text">Donate $100</span>
                                <i class="fa-solid fa-lock" style="font-size: 0.9rem;"></i>
                            </button>
                            <p style="text-align: center; font-size: 0.8rem; color: #94a3b8; margin-top: 16px; margin-bottom: 0;">
                                <i class="fa-solid fa-shield-halved"></i> 256-bit Secure Encryption
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Gateway Script -->
    <script>
        let currentAmount = 100;

        function setDonateType(element, type) {
            document.querySelectorAll('.donate-type-btn').forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
        }

        function setAmount(element, amount) {
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
            document.getElementById('custom-amount-input').value = '';
            currentAmount = amount;
            updateSubmitButton();
        }

        function clearAmountSelection() {
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
        }

        document.getElementById('custom-amount-input').addEventListener('input', function(e) {
            currentAmount = e.target.value || 0;
            updateSubmitButton();
        });

        function setPaymentTab(element, panelId) {
            document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.payment-panel').forEach(p => p.classList.remove('active'));
            
            element.classList.add('active');
            document.getElementById('panel-' + panelId).classList.add('active');
            
            const btnText = document.querySelector('#donate-submit-btn .btn-text');
            if(panelId === 'crypto') {
                btnText.textContent = "I have transferred Crypto";
            } else if(panelId === 'paypal') {
                btnText.textContent = "Continue to PayPal";
            } else {
                updateSubmitButton();
            }
        }

        function updateSubmitButton() {
            const activeTab = document.querySelector('.payment-tab.active');
            if(activeTab && activeTab.textContent.includes('Crypto')) return;
            if(activeTab && activeTab.textContent.includes('PayPal')) return;
            
            const btnText = document.querySelector('#donate-submit-btn .btn-text');
            btnText.textContent = "Donate $" + currentAmount;
        }

        function processDonation() {
            const btn = document.getElementById('donate-submit-btn');
            btn.classList.add('processing');
            
            // Mock processing
            setTimeout(() => {
                btn.classList.remove('processing');
                alert("Thank you! This is a mock interactive UI. In production, this will trigger the real payment gateway (Stripe/PayPal/MoMo).");
            }, 1500);
        }
    </script>
\`;`;

// Inject into script
r2 = r2.replace(/const donateContent = `[\s\S]*?`;/g, newDonateContent);

r2 = r2.replace(/v=7/g, 'v=8');
fs.writeFileSync('rebuild_site_modern2.js', r2);

// Also update cache in rebuild_site_modern.js
let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/v=7/g, 'v=8');
fs.writeFileSync('rebuild_site_modern.js', r1);

console.log('donate gateway rebuilt');

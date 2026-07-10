const fs = require('fs');

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

// Update cache version v=6 -> v=7
r2 = r2.replace(/v=6/g, 'v=7');

// Update Donate.html with mock payment gateways
if (!r2.includes('gateway-btn')) {
    r2 = r2.replace(
        /<div style="margin-top: 30px; text-align: center;">\s*<h4 style="margin-bottom: 16px;">Verified Contract Address<\/h4>/,
        `<div style="margin-top: 40px; border-top: 1px solid var(--color-border); padding-top: 40px;">
                    <h3 style="margin-bottom: 24px; text-align: center;">Other Payment Methods</h3>
                    <div class="grid-2" style="gap: 16px; margin-bottom: 30px;">
                        <button class="gateway-btn" onclick="alert('Integration pending. Please use bank transfer or crypto for now.')">
                            <i class="fa-brands fa-cc-paypal" style="color: #003087; font-size: 1.5rem;"></i> PayPal
                        </button>
                        <button class="gateway-btn" onclick="alert('Integration pending. Please use bank transfer or crypto for now.')">
                            <i class="fa-brands fa-cc-stripe" style="color: #6366f1; font-size: 1.5rem;"></i> Credit Card
                        </button>
                        <button class="gateway-btn gateway-momo" onclick="alert('Integration pending. Please use bank transfer or crypto for now.')">
                            <i class="fa-solid fa-wallet"></i> MoMo E-Wallet
                        </button>
                        <button class="gateway-btn gateway-zalo" onclick="alert('Integration pending. Please use bank transfer or crypto for now.')">
                            <i class="fa-solid fa-qrcode"></i> ZaloPay
                        </button>
                    </div>
                </div>
                <div style="margin-top: 30px; text-align: center;">
                    <h4 style="margin-bottom: 16px;">Verified Crypto Address</h4>`
    );
}

// Update Contact.html with Google Maps
if (!r2.includes('iframe src="https://www.google.com/maps')) {
    r2 = r2.replace(
        /<div class="grid-2" style="gap: 40px;">\s*<div class="card">\s*<h3 style="font-size: 1\.8rem; margin-bottom: 24px;">Global Headquarters<\/h3>/,
        `<div class="grid-2" style="gap: 40px;">
                <div class="card">
                    <h3 style="font-size: 1.8rem; margin-bottom: 24px;">Global Headquarters</h3>`
    );
    // Find where the card ends and insert iframe
    r2 = r2.replace(
        /<\/ul>\s*<\/div>\s*<div>\s*<div class="card">/,
        `</ul>
                    <div style="margin-top: 30px; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-sm); height: 250px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2sThu%20Duc%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div>
                    <div class="card">`
    );
}

fs.writeFileSync('rebuild_site_modern2.js', r2);
console.log('rebuild_site_modern2.js updated');

const fs = require('fs');

// 1. Fix CSS
let css = fs.readFileSync('styles.css', 'utf8');

// Add new classes for mobile fixes
const newCss = `
.donate-gateway-inner {
    padding: 40px;
}
.sponsor-gold {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.15);
    z-index: 10;
}
.address-code {
    word-break: break-all;
}

@media (max-width: 768px) {
    .donate-gateway-inner {
        padding: 20px !important;
    }
    .sponsor-gold {
        transform: scale(1) !important;
    }
}
`;
if (!css.includes('.donate-gateway-inner')) {
    css += newCss;
    fs.writeFileSync('styles.css', css);
}

// 2. Fix HTML in rebuild_site_modern2.js
let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace('<div style="padding: 40px;">', '<div class="donate-gateway-inner">');
r2 = r2.replace(/<div class="card" style="padding: 40px 30px; text-align: center; border-top: 8px solid #ffd700; display: flex; flex-direction: column; transform: scale\(1\.05\); box-shadow: 0 20px 40px rgba\(255, 215, 0, 0\.15\); z-index: 10;">/g, 
                '<div class="card sponsor-gold" style="padding: 40px 30px; text-align: center; border-top: 8px solid #ffd700; display: flex; flex-direction: column;">');
r2 = r2.replace(/<code style="font-size: 0\.85rem; color: var\(--color-primary\);">/g, 
                '<code class="address-code" style="font-size: 0.85rem; color: var(--color-primary);">');
r2 = r2.replace(/v=20/g, 'v=21');
fs.writeFileSync('rebuild_site_modern2.js', r2);

// Fix in rebuild_site_modern.js (for the quick donate section padding)
let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace('<div style="background: white; border-radius: 20px; box-shadow: var(--shadow-md); padding: 40px; max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">', 
                '<div class="donate-gateway-inner" style="background: white; border-radius: 20px; box-shadow: var(--shadow-md); max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">');
r1 = r1.replace(/v=20/g, 'v=21');
fs.writeFileSync('rebuild_site_modern.js', r1);

// Update version in other files
['rebuild_site.js', 'rebuild_site2.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/v=20/g, 'v=21');
        fs.writeFileSync(file, content);
    }
});

console.log('Fixed mobile overflow issues.');

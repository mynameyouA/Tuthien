const fs = require('fs');

// 1. Fix CSS
let css = fs.readFileSync('styles.css', 'utf8');

// Add new classes for mobile fixes
const newCss = `
html, body {
    overflow-x: hidden;
}

.email-btn {
    word-break: break-all;
    white-space: normal;
    height: auto;
}
`;
if (!css.includes('overflow-x: hidden;')) {
    css += newCss;
    fs.writeFileSync('styles.css', css);
}

// 2. Fix HTML in rebuild_site_modern2.js
let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace('<div style="text-align: center; margin-top: 60px; background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow-sm);">', '<div class="donate-gateway-inner" style="text-align: center; margin-top: 60px; background: white; border-radius: var(--radius); box-shadow: var(--shadow-sm);">');
r2 = r2.replace('<a href="mailto:partnerships@sustainablehumanity.org" class="btn btn-outline" style="font-size: 1.1rem; padding: 12px 32px;">', '<a href="mailto:partnerships@sustainablehumanity.org" class="btn btn-outline email-btn" style="font-size: 1.1rem; padding: 12px 32px;">');
r2 = r2.replace(/v=21/g, 'v=22');
fs.writeFileSync('rebuild_site_modern2.js', r2);

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/v=21/g, 'v=22');
fs.writeFileSync('rebuild_site_modern.js', r1);

// Update version in other files
['rebuild_site.js', 'rebuild_site2.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/v=21/g, 'v=22');
        fs.writeFileSync(file, content);
    }
});

console.log('Fixed additional mobile overflow issues.');

const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// Replace the max-width: 992px header-container rule
const oldHeaderMobile = `.header-container {
        flex-direction: column;
        gap: 20px;
    }`;

const newHeaderMobile = `.header-container {
        flex-direction: column;
        gap: 20px;
        height: auto;
        padding: 20px 0;
    }`;

css = css.replace(oldHeaderMobile, newHeaderMobile);
fs.writeFileSync('styles.css', css);

// Bump version in js files
let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/v=13/g, 'v=14');
fs.writeFileSync('rebuild_site_modern.js', r1);

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace(/v=13/g, 'v=14');
fs.writeFileSync('rebuild_site_modern2.js', r2);

console.log('Mobile menu CSS fixed.');

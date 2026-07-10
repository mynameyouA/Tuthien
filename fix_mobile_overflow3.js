const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

const aggressiveCss = `
/* AGGRESSIVE MOBILE OVERFLOW FIXES */
* {
    box-sizing: border-box;
}

img, video, iframe {
    max-width: 100%;
}

html, body {
    overflow-x: hidden !important;
    width: 100%;
    position: relative;
    max-width: 100vw;
}

/* Fix flexbox intrinsic width bug */
.custom-amount, .donate-type-toggle, .payment-tabs, .card-elements {
    min-width: 0;
}
.custom-amount input {
    min-width: 0;
}

/* Safe padding for sponsor cards */
.sponsor-card {
    padding: 40px 30px !important;
}

@media (max-width: 768px) {
    .sponsor-card {
        padding: 24px 16px !important;
    }
    .donate-gateway-inner {
        padding: 16px !important;
    }
    .amount-btn {
        padding: 12px 8px !important;
        font-size: 1rem !important;
    }
    .payment-tab {
        padding: 12px 16px !important;
        font-size: 0.9rem !important;
    }
    .page-hero {
        padding: 80px 16px 60px !important;
    }
    .page-hero h1 {
        font-size: 2.2rem !important;
        word-wrap: break-word;
    }
}
`;

if (!css.includes('AGGRESSIVE MOBILE OVERFLOW FIXES')) {
    css += aggressiveCss;
    fs.writeFileSync('styles.css', css);
}

// Update JS files to apply the new sponsor-card class
let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace(/<div class="card" style="padding: 40px 30px;/g, '<div class="card sponsor-card" style="');
r2 = r2.replace(/<div class="card sponsor-gold" style="padding: 40px 30px;/g, '<div class="card sponsor-gold sponsor-card" style="');
r2 = r2.replace(/v=22/g, 'v=24');
fs.writeFileSync('rebuild_site_modern2.js', r2);

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/v=22/g, 'v=24');
fs.writeFileSync('rebuild_site_modern.js', r1);

['rebuild_site.js', 'rebuild_site2.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/v=22/g, 'v=24');
        fs.writeFileSync(file, content);
    }
});

console.log('Applied aggressive mobile overflow fixes.');

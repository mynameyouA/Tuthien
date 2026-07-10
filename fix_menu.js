const fs = require('fs');

// 1. Force CSS display block !important
let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace('.main-nav.active {\n        display: block;', '.main-nav.active {\n        display: block !important;');
fs.writeFileSync('styles.css', css);

// 2. Bump script and css versions to force cache reload
['rebuild_site_modern.js', 'rebuild_site_modern2.js', 'rebuild_site.js', 'rebuild_site2.js'].forEach(file => {
    if(fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/v=15/g, 'v=16');
        fs.writeFileSync(file, content);
    }
});

console.log('Fixed cache and CSS for mobile menu.');

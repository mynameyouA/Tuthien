const fs = require('fs');

['rebuild_site_modern.js', 'rebuild_site_modern2.js'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove top-bar from header (accounting for possible whitespace variations)
    const topBarRegex = /<div class="top-bar">[\s\S]*?<\/div>\n\s*<\/div>/;
    content = content.replace(topBarRegex, '');
    
    // Add to footer in rebuild_site_modern.js
    if (file === 'rebuild_site_modern.js') {
        const footerBottomRegex = /<div class="footer-bottom">\s*<p>/;
        content = content.replace(footerBottomRegex, `<div class="footer-bottom">
                <p style="margin-bottom: 8px; color: rgba(255,255,255,0.8);"><strong>US 501(c)(3) Nonprofit - Audited to USAID/GEF Standards</strong></p>
                <p>`);
    }
    
    fs.writeFileSync(file, content);
});
console.log('Modified build scripts.');

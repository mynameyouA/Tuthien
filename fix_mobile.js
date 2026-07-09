const fs = require('fs');

// 1. Update rebuild scripts to script.js?v=3
['rebuild_site_modern.js', 'rebuild_site_modern2.js'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/script\.js\?v=2/g, 'script.js?v=3');
    fs.writeFileSync(file, content);
});
console.log('Updated cache busters to v=3');

// 2. Add mobile responsive CSS
let css = fs.readFileSync('styles.css', 'utf8');
if (!css.includes('@media (max-width: 992px)')) {
    css += `\n
/* Responsive Mobile Fixes */
@media (max-width: 992px) {
    .header-container {
        flex-direction: column;
        gap: 20px;
    }
    .main-nav ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    .news-item {
        grid-template-columns: 1fr;
    }
    .news-item img {
        height: 250px !important;
    }
    .grid-2, .grid-4 {
        grid-template-columns: 1fr !important;
    }
    .page-hero {
        padding: 100px 20px 80px !important;
    }
    .page-hero h1 {
        font-size: 2.5rem !important;
    }
}
`;
    fs.writeFileSync('styles.css', css);
    console.log('Added responsive CSS');
}

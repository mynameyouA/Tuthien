const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(/gap: 24px;\s*flex-wrap: wrap;/g, 'gap: 12px;\n    flex-wrap: wrap;');
css = css.replace(/font-size: 0\.95rem;/g, 'font-size: 0.85rem;');
css = css.replace(/padding: 12px 28px;/g, 'padding: 10px 24px;'); // slightly smaller button to save space

fs.writeFileSync('styles.css', css);

// We should also bump v=5 to v=6 across all HTMLs to force the cache
['rebuild_site_modern.js', 'rebuild_site_modern2.js'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/v=5/g, 'v=6');
    fs.writeFileSync(file, content);
});

const fs = require('fs');
['rebuild_site_modern.js', 'rebuild_site_modern2.js', 'rebuild_site.js', 'rebuild_site2.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/v=19/g, 'v=20');
        fs.writeFileSync(file, content);
    }
});

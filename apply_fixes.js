const fs = require('fs');

['rebuild_site_modern.js', 'rebuild_site_modern2.js'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix the index.html CTA
    content = content.replace(/<button onclick="openGenericModal\('donateModal'\)"([^>]+)>([^<]+)<\/button>/g, '<a href="donate.html"$1>$2</a>');
    
    // Fix Cache Busting for JS
    content = content.replace(/script\.js\?v=\d+/g, 'script.js?v=5');
    
    // Fix Cache Busting for CSS
    content = content.replace(/href="styles\.css(\?v=\d+)?"/g, 'href="styles.css?v=5"');
    
    fs.writeFileSync(file, content);
});

let scriptContent = fs.readFileSync('script.js', 'utf8');

if (!scriptContent.includes("item.className = 'news-item fade-in';")) {
    scriptContent = scriptContent.replace(/item\.className = 'news-item';/g, "item.className = 'news-item fade-in';");
}

if (!scriptContent.includes('const newAnimated = document.querySelectorAll')) {
    scriptContent = scriptContent.replace(/if \(newsDetailContainer\) {\n\s*renderNewsDetail\(data\);\n\s*}/g, 
        `if (newsDetailContainer) {
                renderNewsDetail(data);
            }
            // Trigger animation on newly added elements
            setTimeout(() => {
                const newAnimated = document.querySelectorAll('.fade-in:not(.visible)');
                newAnimated.forEach(el => {
                    const fallbackObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                fallbackObserver.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.1 });
                    fallbackObserver.observe(el);
                });
            }, 100);`);
}

fs.writeFileSync('script.js', scriptContent);
console.log('Scripts updated.');

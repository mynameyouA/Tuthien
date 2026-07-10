const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const oldRenderNewsDetail = /function renderNewsDetail[\s\S]*?}\n}/;
const newRenderNewsDetail = `function renderNewsDetail(articles) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const article = articles.find(a => a.id === id);
    const container = document.getElementById('news-detail-container');
    
    if (article) {
        // Simple markdown parsing for the body
        let htmlBody = article.body
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^\\* (.*$)/gim, '<ul><li>$1</li></ul>')
            .replace(/<\\/ul>\\n<ul>/gim, '')
            .replace(/\\*\\*(.*?)\\*\\*/gim, '<strong>$1</strong>')
            .replace(/\\n/gim, '<br>');

        container.innerHTML = \`
            <h1>\${article.title}</h1>
            <p style="color: var(--color-text-light); font-size: 0.9rem; margin-bottom: 20px;">\${new Date(article.date).toLocaleDateString()}</p>
            <img src="\${article.thumbnail}" alt="\${article.title}" style="width:100%; max-height:400px; object-fit:cover; margin-bottom:30px; border: 1px solid var(--color-border);">
            <div style="font-size: 1.1rem; line-height: 1.8;">\${htmlBody}</div>
        \`;
    } else {
        container.innerHTML = '<p>Article not found.</p>';
    }
}`;

content = content.replace(oldRenderNewsDetail, newRenderNewsDetail);
fs.writeFileSync('script.js', content);

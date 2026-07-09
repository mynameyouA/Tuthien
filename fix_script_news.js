const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

// Add cache buster to fetch
content = content.replace(/fetch\('news-data\.json'\)/g, "fetch('news-data.json?v=' + new Date().getTime())");

// Fix renderNewsList to include thumbnail and wrapper div
const replaceRegex = /item\.innerHTML = `[\s\S]*?`;/;

const newInnerHTML = "item.innerHTML = `\n" +
"            <a href=\"news-detail.html?id=${article.id}\" style=\"display: block; overflow: hidden; border-radius: var(--radius);\"><img src=\"${article.thumbnail}\" alt=\"${article.title}\" style=\"width: 100%; height: 180px; object-fit: cover; transition: transform 0.3s ease;\" onmouseover=\"this.style.transform='scale(1.05)'\" onmouseout=\"this.style.transform='scale(1)'\"></a>\n" +
"            <div>\n" +
"                <h2 style=\"font-size: 1.5rem; margin-bottom: 8px; line-height: 1.4;\"><a href=\"news-detail.html?id=${article.id}\" style=\"color: var(--color-primary); text-decoration: none;\">${article.title}</a></h2>\n" +
"                <p style=\"color: var(--color-text-light); font-size: 0.95rem; margin-bottom: 12px;\"><i class=\"fa-regular fa-calendar\" style=\"color: var(--color-secondary); margin-right: 6px;\"></i> ${new Date(article.date).toLocaleDateString()}</p>\n" +
"                <p style=\"line-height: 1.7; color: #4a5568;\">${article.description}</p>\n" +
"            </div>\n" +
"        `;";

content = content.replace(replaceRegex, newInnerHTML);

fs.writeFileSync('script.js', content);
console.log('script.js updated to bypass cache and fix grid layout');

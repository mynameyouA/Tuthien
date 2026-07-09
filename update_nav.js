const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldNavRegex = /<nav class="main-nav">[\s\S]*?<\/nav>/;
const newNav = `<nav class="main-nav">
                <ul>
                    <li><a href="about.html" data-i18n="nav_about">Về quỹ SHF</a></li>
                    <li><a href="projects.html" data-i18n="nav_projects">Dự án trọng điểm</a></li>
                    <li><a href="financials.html" data-i18n="nav_transparency">Minh bạch</a></li>
                    <li><a href="news.html" data-i18n="nav_news">Tin tức</a></li>
                    <li><a href="join-us.html" data-i18n="join_label">Tham gia</a></li>
                    <li><a href="contact.html" data-i18n="nav_contact">Liên hệ</a></li>
                </ul>
            </nav>`;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update Header Nav
    if (content.match(oldNavRegex)) {
        content = content.replace(oldNavRegex, newNav);
    }
    
    // Update Footer Links
    // In footer we have hardcoded links like <li><a href="about.html#transparency"
    content = content.replace(/<a href="about\.html#transparency"/g, '<a href="financials.html"');
    content = content.replace(/<a href="#contact"/g, '<a href="contact.html"');
    content = content.replace(/<a href="index\.html#contact"/g, '<a href="contact.html"');
    content = content.replace(/<a href="index\.html#join"/g, '<a href="join-us.html"');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated navigation in ${file}`);
});

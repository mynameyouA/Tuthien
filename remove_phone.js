const fs = require('fs');

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/<li><i class="fa-solid fa-phone".*?\+84 975 709 643<\/li>\s*/g, '');
r1 = r1.replace(/v=11/g, 'v=12');
fs.writeFileSync('rebuild_site_modern.js', r1);

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
const phoneBlockRegex = /<div style="display: flex; gap: 20px; margin-bottom: 40px;">\s*<div[^>]*><i class="fa-solid fa-phone"><\/i><\/div>\s*<div>\s*<strong[^>]*>Direct Line<\/strong>\s*<span[^>]*>\+84 975 709 643<\/span>\s*<\/div>\s*<\/div>/;
r2 = r2.replace(phoneBlockRegex, '');
r2 = r2.replace(/v=11/g, 'v=12');
fs.writeFileSync('rebuild_site_modern2.js', r2);

console.log('Phone numbers removed successfully.');

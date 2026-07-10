const fs = require('fs');

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace(/<section class="page-hero fade-in"/g, '<section class="page-hero"');
r2 = r2.replace(/<section class="section">/g, '<section class="section" style="overflow-x: hidden;">');
fs.writeFileSync('rebuild_site_modern2.js', r2);

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/<section class="page-hero fade-in"/g, '<section class="page-hero"');
fs.writeFileSync('rebuild_site_modern.js', r1);

// Also remove fade-in from the top-most containers if they exist
r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace(/<div class="container fade-in" style="max-width: 800px; padding-top: 40px;">/g, '<div class="container" style="max-width: 800px; padding-top: 40px;">');
fs.writeFileSync('rebuild_site_modern2.js', r2);

console.log('Removed fade-in from hero sections.');

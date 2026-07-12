const fs = require('fs');

const seoHeadTemplate = `const head = (title) => \`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>\${title} - Sustainable Humanity Foundation</title>
    
    <!-- Primary Meta Tags -->
    <meta name="title" content="\${title} - Sustainable Humanity Foundation">
    <meta name="description" content="The Sustainable Humanity Foundation applies scientific and technological solutions to solve pollution, provide clean energy, and develop sustainable livelihoods.">
    <meta name="keywords" content="nonprofit, charity, climate change, solar energy, water purification, sustainable development, ESG, philanthropy">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://tuthien-eight.vercel.app/">
    <meta property="og:title" content="\${title} - Sustainable Humanity Foundation">
    <meta property="og:description" content="Bringing breakthrough scientific solutions to vulnerable communities. 100% of public donations fund field operations.">
    <meta property="og:image" content="https://tuthien-eight.vercel.app/hero.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://tuthien-eight.vercel.app/">
    <meta property="twitter:title" content="\${title} - Sustainable Humanity Foundation">
    <meta property="twitter:description" content="Bringing breakthrough scientific solutions to vulnerable communities. 100% of public donations fund field operations.">
    <meta property="twitter:image" content="https://tuthien-eight.vercel.app/hero.jpg">
    
    <!-- Theme & Icons -->
    <meta name="theme-color" content="#0a2540">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>">
    
    <!-- Preconnect -->
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://images.unsplash.com">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css?v=25">
</head>
<body>
\`;`;

// Process files
['rebuild_site_modern.js', 'rebuild_site_modern2.js'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace head function
    content = content.replace(/const head = \(title\) => `<!DOCTYPE html>[\s\S]*?<body>\n`;/, seoHeadTemplate);
    
    // Inject loading="lazy" into img tags that don't already have it
    content = content.replace(/<img (?!.*?loading="lazy")(.*?)(>)/g, '<img $1 loading="lazy"$2');
    
    // Version bump just in case
    content = content.replace(/v=24/g, 'v=25');
    
    fs.writeFileSync(file, content);
});

// Update CSS for smooth scrolling and scrollbar
let css = fs.readFileSync('styles.css', 'utf8');
if (!css.includes('scroll-behavior: smooth')) {
    const scrollCSS = `
/* Smooth Scrolling & Scrollbar */
html {
    scroll-behavior: smooth;
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f5f9;
}
::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
}
`;
    css += scrollCSS;
    fs.writeFileSync('styles.css', css);
}

// Update script.js for back-to-top button
let script = fs.readFileSync('script.js', 'utf8');
if (!script.includes('back-to-top')) {
    const bttScript = `
    // Back to Top Button
    const bttBtn = document.createElement('button');
    bttBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    bttBtn.id = 'back-to-top';
    bttBtn.setAttribute('aria-label', 'Back to top');
    bttBtn.style.cssText = 'position:fixed; bottom:30px; right:30px; background:var(--color-secondary); color:white; border:none; border-radius:50%; width:50px; height:50px; font-size:1.2rem; cursor:pointer; opacity:0; visibility:hidden; transition:all 0.3s ease; z-index:999; box-shadow:var(--shadow-md); display:flex; align-items:center; justify-content:center;';
    document.body.appendChild(bttBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            bttBtn.style.opacity = '1';
            bttBtn.style.visibility = 'visible';
        } else {
            bttBtn.style.opacity = '0';
            bttBtn.style.visibility = 'hidden';
        }
    });

    bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
`;
    // Insert into DOMContentLoaded
    script = script.replace(/document.addEventListener\('DOMContentLoaded', \(\) => \{/, "document.addEventListener('DOMContentLoaded', () => {" + bttScript);
    fs.writeFileSync('script.js', script);
}

console.log('Applied SEO, lazy loading, scrollbar, and back-to-top button.');

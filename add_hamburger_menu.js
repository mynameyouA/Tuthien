const fs = require('fs');

// 1. Update HTML Header in rebuild scripts
const oldHeaderRegex = /<div class="container header-container">\s*<a href="index\.html" class="logo">[\s\S]*?<\/div>\s*<\/header>/;

const newHeaderHtml = `<div class="container header-container">
            <div class="logo-and-toggle" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <a href="index.html" class="logo">
                    <i class="fa-solid fa-leaf"></i>
                    <div class="logo-text">
                        <span class="logo-title">Sustainable Humanity</span>
                        <span class="logo-subtitle">Foundation</span>
                    </div>
                </a>
                <button class="mobile-menu-toggle" id="mobileMenuBtn" aria-label="Toggle Menu" style="display: none; background: none; border: none; font-size: 1.8rem; color: var(--color-primary); cursor: pointer;">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <nav class="main-nav" id="mainNav">
                <ul>
                    <li><a href="about.html">About SHF</a></li>
                    <li><a href="projects.html">Key Projects</a></li>
                    <li><a href="financials.html">Financials</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="join-us.html">Join Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li class="mobile-donate-li" style="display: none;"><a href="donate.html" class="btn btn-primary btn-donate" style="padding: 10px 20px;">Donate Now</a></li>
                </ul>
            </nav>
            <div class="header-actions desktop-donate">
                <a href="donate.html" class="btn btn-primary btn-donate">Donate Now</a>
            </div>
        </div>
    </header>`;

['rebuild_site_modern.js', 'rebuild_site_modern2.js', 'rebuild_site.js', 'rebuild_site2.js'].forEach(file => {
    if(fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(oldHeaderRegex, newHeaderHtml);
        content = content.replace(/v=14/g, 'v=15'); // bump version
        fs.writeFileSync(file, content);
    }
});

// 2. Update CSS
let css = fs.readFileSync('styles.css', 'utf8');

// Replace the max-width: 992px header block we added previously
const cssToReplace = `.header-container {
        flex-direction: column;
        gap: 20px;
        height: auto;
        padding: 20px 0;
    }`;

const newCssBlock = `.header-container {
        flex-wrap: wrap;
        height: auto;
        padding: 15px 24px;
        flex-direction: row;
    }
    .logo-and-toggle {
        width: 100% !important;
    }
    .mobile-menu-toggle {
        display: block !important;
    }
    .main-nav {
        display: none; /* hidden by default on mobile */
        width: 100%;
        margin-top: 15px;
        text-align: center;
    }
    .main-nav.active {
        display: block;
        animation: fadeIn 0.3s ease;
    }
    .main-nav ul {
        flex-direction: column;
        gap: 15px;
    }
    .desktop-donate {
        display: none !important;
    }
    .mobile-donate-li {
        display: block !important;
        margin-top: 10px;
    }`;

css = css.replace(cssToReplace, newCssBlock);
fs.writeFileSync('styles.css', css);

// 3. Add JS toggle logic to script.js
let js = fs.readFileSync('script.js', 'utf8');
const toggleJs = `
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if(mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});
`;
if (!js.includes('mobileMenuBtn')) {
    fs.writeFileSync('script.js', js + '\\n' + toggleJs);
}

console.log('Mobile hamburger menu implemented.');

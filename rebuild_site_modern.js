const fs = require('fs');

const head = (title) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Sustainable Humanity Foundation</title>
    <meta name="description" content="The Sustainable Humanity Foundation applies scientific and technological solutions to solve pollution, provide clean energy, and develop sustainable livelihoods.">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
`;

const header = `
    <!-- Header -->
    <header class="main-header">
        <div class="top-bar">
            <div class="container">
                US 501(c)(3) Nonprofit - Audited to USAID/GEF Standards
            </div>
        </div>
        <div class="container header-container">
            <a href="index.html" class="logo">
                <i class="fa-solid fa-leaf"></i>
                <div class="logo-text">
                    <span class="logo-title">Sustainable Humanity</span>
                    <span class="logo-subtitle">Foundation</span>
                </div>
            </a>
            <nav class="main-nav">
                <ul>
                    <li><a href="about.html">About SHF</a></li>
                    <li><a href="projects.html">Key Projects</a></li>
                    <li><a href="financials.html">Financials</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="join-us.html">Join Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <button class="btn btn-primary" onclick="openGenericModal('donateModal')">Donate Now</button>
            </div>
        </div>
    </header>
`;

const footer = `
    <!-- Footer -->
    <footer class="main-footer">
        <div class="container">
            <div class="grid-4">
                <div>
                    <h4>Sustainable Humanity Foundation</h4>
                    <p style="font-size: 0.95rem; margin-top: 16px;">Bringing breakthrough scientific solutions to solve pollution, provide clean energy, and develop sustainable livelihoods for vulnerable communities.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul style="list-style:none; line-height: 2.2;">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="projects.html">Key Projects</a></li>
                        <li><a href="financials.html">Financials & Transparency</a></li>
                        <li><a href="news.html">News & Updates</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <ul style="list-style:none; line-height: 2.2; font-size: 0.95rem;">
                        <li><i class="fa-solid fa-location-dot" style="margin-right:8px; color:var(--color-secondary)"></i> Thu Duc City, HCMC, VN</li>
                        <li><i class="fa-solid fa-phone" style="margin-right:8px; color:var(--color-secondary)"></i> +84 975 709 643</li>
                        <li><i class="fa-solid fa-envelope" style="margin-right:8px; color:var(--color-secondary)"></i> contact@sh.fund</li>
                    </ul>
                </div>
                <div>
                    <h4>Newsletter</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 16px;">Subscribe to receive our latest impact reports.</p>
                    <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                        <input type="email" name="email" class="form-control" placeholder="Your Email Address" style="margin-bottom: 12px; border:none;" required>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 The Sustainable Humanity Foundation. All rights reserved. 501(c)(3) Nonprofit.</p>
            </div>
        </div>
    </footer>

    <!-- Donate Modal -->
    <div id="donateModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content" style="text-align: center;">
                <button onclick="closeGenericModal('donateModal')" style="position: absolute; right: 24px; top: 24px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-light);"><i class="fa-solid fa-xmark"></i></button>
                <h2>Make a Donation</h2>
                <p style="color: var(--color-text-light); margin-bottom: 24px;">Your contribution directly funds clean energy and pollution treatment projects.</p>
                
                <h4 style="margin-top: 24px; margin-bottom: 16px; color: var(--color-primary);">Crypto Contribution (Polygon USDT)</h4>
                <div style="background: var(--color-bg-light); padding: 24px; border: 1px solid var(--color-border); border-radius: var(--radius);">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=0x52b4483e30243a65212adb16d993627534e61d6d" alt="QR Code" style="margin-bottom: 16px; border-radius: 8px;">
                    <p style="font-family: monospace; font-size: 0.95rem; background: #fff; padding: 12px; border: 1px solid var(--color-border); border-radius: 4px; word-break: break-all;">0x52b4483e30243a65212adb16d993627534e61d6d</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="script.js"></script>
</body>
</html>
`;

// Index
const indexContent = `
    <!-- Hero -->
    <section class="page-hero fade-in" style="background-image: url('shf_hero_1783587711643.jpg'); padding: 200px 0 160px;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: var(--color-secondary); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; letter-spacing: 1px;">Empowering Communities</span>
            <h1>Science for a Sustainable Humanity</h1>
            <p style="margin-bottom: 40px; font-size: 1.25rem;">We leverage breakthrough environmental technologies to mitigate climate risks and develop sustainable livelihoods for vulnerable communities globally.</p>
            <div style="display: flex; gap: 16px; justify-content: center;">
                <a href="projects.html" class="btn btn-primary">Explore Our Impact</a>
                <a href="about.html" class="btn btn-outline" style="color: #fff; border-color: rgba(255,255,255,0.5);">Read Our Story</a>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container fade-in">
            <div style="text-align: center; margin-bottom: 60px;">
                <span class="section-label">Core Focus Areas</span>
                <h2>Three Pillars of Change</h2>
            </div>
            <div class="grid-3">
                <div class="card text-center">
                    <div style="width: 80px; height: 80px; background: var(--color-bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                        <i class="fa-solid fa-leaf" style="font-size: 2rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3>Environmental Restoration</h3>
                    <p style="color: var(--color-text-light);">Deploying bio-technologies to safely process industrial waste and restore polluted ecosystems.</p>
                </div>
                <div class="card text-center">
                    <div style="width: 80px; height: 80px; background: var(--color-bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                        <i class="fa-solid fa-solar-panel" style="font-size: 2rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3>Renewable Energy</h3>
                    <p style="color: var(--color-text-light);">Installing off-grid solar solutions for remote villages lacking basic power infrastructure.</p>
                </div>
                <div class="card text-center">
                    <div style="width: 80px; height: 80px; background: var(--color-bg-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                        <i class="fa-solid fa-seedling" style="font-size: 2rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3>Sustainable Livelihoods</h3>
                    <p style="color: var(--color-text-light);">Funding circular agriculture cooperatives to ensure long-term food security and income.</p>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('index.html', head('Home') + header + indexContent + footer);

// About
const aboutContent = `
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 120px 0; min-height: 400px; display:flex; align-items:center;">
        <div class="container">
            <h1>About The Foundation</h1>
            <p>Bridging the gap between high-tech environmental solutions and vulnerable communities.</p>
        </div>
    </section>
    
    <section class="section">
        <div class="container fade-in">
            <div class="grid-2">
                <div>
                    <span class="section-label">Our Mission</span>
                    <h2 style="margin-bottom: 24px;">Humanity is not just about emergency relief.</h2>
                    <p style="font-size: 1.1rem; color: var(--color-text-light); line-height: 1.8;">The Sustainable Humanity Foundation (SHF) believes that providing scientific and technological solutions is the only way to permanently break the cycle of poverty and environmental disaster. We partner with leading research institutes to bring theoretical science into practical, life-saving field applications.</p>
                </div>
                <div class="card" style="background: var(--color-primary); color: #fff; padding: 48px;">
                    <i class="fa-solid fa-quote-left" style="font-size: 3rem; color: var(--color-secondary); opacity: 0.5; margin-bottom: 20px; display:block;"></i>
                    <blockquote style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 500; margin-bottom: 30px; line-height: 1.4;">
                        "Scientific solutions are the only path to resolving the cycle of poverty and environmental disasters."
                    </blockquote>
                    <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px;">
                        <strong style="font-size: 1.1rem;">Prof. Dr. Duong Van Sinh</strong><br>
                        <span style="color: var(--color-secondary); font-size: 0.9rem;">President, SHF</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in">
            <div style="text-align: center; margin-bottom: 60px;">
                <span class="section-label">Leadership</span>
                <h2>Our Global Team</h2>
            </div>
            <div class="grid-3">
                <div class="card text-center" style="padding: 40px 24px;">
                    <div style="width: 100px; height: 100px; background: var(--color-primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 2.5rem;"><i class="fa-solid fa-user-tie"></i></div>
                    <h4>Prof. Dr. Duong Van Sinh</h4>
                    <p style="color: var(--color-secondary); font-weight: 500; margin: 0;">President</p>
                </div>
                <div class="card text-center" style="padding: 40px 24px;">
                    <div style="width: 100px; height: 100px; background: var(--color-primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 2.5rem;"><i class="fa-solid fa-flask"></i></div>
                    <h4>Assoc. Prof. Elena Rodriguez</h4>
                    <p style="color: var(--color-secondary); font-weight: 500; margin: 0;">Director of Environmental Science</p>
                </div>
                <div class="card text-center" style="padding: 40px 24px;">
                    <div style="width: 100px; height: 100px; background: var(--color-primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 2.5rem;"><i class="fa-solid fa-chart-line"></i></div>
                    <h4>Michael Chen, CPA</h4>
                    <p style="color: var(--color-secondary); font-weight: 500; margin: 0;">Chief Financial Officer</p>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('about.html', head('About Us') + header + aboutContent + footer);

// Financials
const financialsContent = `
    <section class="page-hero fade-in" style="background-image: url('financials_hero.jpg');">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 4px 12px; border-radius: 20px;">Financial Transparency</span>
            <h1>Transparency is the Foundation of Trust</h1>
            <p>Discover how we allocate every donation to maximize our positive impact on the environment and livelihoods.</p>
        </div>
    </section>

    <section class="section">
        <div class="container fade-in">
            <div class="grid-2">
                <div>
                    <h2>Fund Allocation</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; margin-bottom: 40px;">We take pride in maintaining exceptionally low overhead. The vast majority of our budget goes directly to field operations.</p>
                    
                    <div class="progress-container">
                        <div class="progress-label"><span>Field Programs & Relief</span> <span style="color: var(--color-primary); font-weight: 700;">92%</span></div>
                        <div class="progress-bar"><div class="progress-fill" style="width: 92%;"></div></div>
                    </div>
                    
                    <div class="progress-container">
                        <div class="progress-label"><span>Operations & Management</span> <span style="color: var(--color-primary); font-weight: 700;">5%</span></div>
                        <div class="progress-bar"><div class="progress-fill" style="width: 5%; background: var(--color-primary);"></div></div>
                    </div>
                    
                    <div class="progress-container">
                        <div class="progress-label"><span>Fundraising</span> <span style="color: var(--color-primary); font-weight: 700;">3%</span></div>
                        <div class="progress-bar"><div class="progress-fill" style="width: 3%; background: var(--color-text-light);"></div></div>
                    </div>
                </div>
                
                <div class="card bg-light" style="padding: 48px;">
                    <div style="display: flex; gap: 20px; margin-bottom: 30px; opacity: 0.8; justify-content: center;">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/1200px-USAID-Identity.svg.png" height="40" alt="USAID">
                        <img src="https://www.thegef.org/sites/default/files/gef_logo_0.png" height="40" alt="GEF">
                    </div>
                    <h3 style="text-align: center;">Auditing & Compliance</h3>
                    <p style="text-align: center; color: var(--color-text-light); margin-bottom: 32px;">SHF is a proposed 501(c)(3) organization. All financial statements are audited annually by independent firms complying with strict USAID and GEF standards.</p>
                    <a href="#" class="btn btn-navy" style="width: 100%;"><i class="fa-solid fa-file-pdf" style="margin-right: 10px;"></i> Download 2025 Annual Report</a>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('financials.html', head('Financials') + header + financialsContent + footer);

console.log('Main pages generated with new CSS.');

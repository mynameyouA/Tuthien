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
                <small>US 501(c)(3) Nonprofit - Audited to USAID/GEF Standards</small>
                <div id="google_translate_element"></div>
            </div>
        </div>
        <div class="container header-container" style="padding-top: 20px; padding-bottom: 20px;">
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
                <button class="btn btn-primary" onclick="openGenericModal('donateModal')">Donate</button>
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
                    <p style="font-size: 0.85rem; margin-top: 10px;">Bringing breakthrough scientific solutions to solve pollution, provide clean energy, and develop sustainable livelihoods for vulnerable communities.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul style="list-style:none; line-height: 2;">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="financials.html">Financials</a></li>
                        <li><a href="news.html">News</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <ul style="list-style:none; line-height: 2; font-size: 0.9rem;">
                        <li><i class="fa-solid fa-location-dot"></i> Thu Duc City, HCMC, Vietnam</li>
                        <li><i class="fa-solid fa-phone"></i> +84 975 709 643</li>
                        <li><i class="fa-solid fa-envelope"></i> contact@sh.fund</li>
                    </ul>
                </div>
                <div>
                    <h4>Newsletter</h4>
                    <form action="https://formsubmit.co/contact@sh.fund" method="POST" style="display:flex; margin-top: 10px;">
                        <input type="email" name="email" class="form-control" placeholder="Your Email" style="margin:0; border-radius: 2px 0 0 2px;" required>
                        <button type="submit" class="btn btn-primary" style="border-radius: 0 2px 2px 0;">Subscribe</button>
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
                <button onclick="closeGenericModal('donateModal')" style="position: absolute; right: 20px; top: 20px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
                <h2>Make a Donation</h2>
                <p style="color: var(--color-text-light); margin-bottom: 20px;">Your contribution helps us implement clean energy and treat pollution globally.</p>
                
                <h4 style="margin-top: 20px; margin-bottom: 10px;">Crypto Contribution (Polygon USDT)</h4>
                <div style="background: var(--color-bg-light); padding: 20px; border: 1px solid var(--color-border); border-radius: 4px;">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x52b4483e30243a65212adb16d993627534e61d6d" alt="QR Code" style="margin-bottom: 15px;">
                    <p style="font-family: monospace; font-size: 0.9rem; background: #fff; padding: 10px; border: 1px solid #ccc;">0x52b4483e30243a65212adb16d993627534e61d6d</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }
        function openGenericModal(id) {
            document.getElementById(id).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        function closeGenericModal(id) {
            document.getElementById(id).style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script src="script.js"></script>
</body>
</html>
`;

// Index Page
const indexContent = `
    <section class="section">
        <div class="container text-center" style="padding: 80px 0;">
            <h1 style="font-size: 3.5rem; border: none; margin-bottom: 10px;">Empowering Humanity Through Science</h1>
            <p style="font-size: 1.2rem; color: var(--color-text-light); max-width: 700px; margin: 0 auto 30px;">We leverage breakthrough environmental technologies to mitigate climate risks and develop sustainable livelihoods for vulnerable communities globally.</p>
            <div>
                <a href="projects.html" class="btn btn-primary" style="margin-right: 10px;">Explore Our Work</a>
                <a href="about.html" class="btn btn-outline">Read Our Story</a>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container">
            <h2 style="text-align: center; border: none; margin-bottom: 40px;">Core Focus Areas</h2>
            <div class="grid-3">
                <div class="card text-center">
                    <i class="fa-solid fa-leaf" style="font-size: 2.5rem; color: var(--color-accent); margin-bottom: 20px;"></i>
                    <h3>Environmental Restoration</h3>
                    <p>Deploying bio-technologies to safely process industrial waste and restore polluted ecosystems.</p>
                </div>
                <div class="card text-center">
                    <i class="fa-solid fa-solar-panel" style="font-size: 2.5rem; color: var(--color-accent); margin-bottom: 20px;"></i>
                    <h3>Renewable Energy</h3>
                    <p>Installing off-grid solar solutions for remote villages lacking basic power infrastructure.</p>
                </div>
                <div class="card text-center">
                    <i class="fa-solid fa-seedling" style="font-size: 2.5rem; color: var(--color-accent); margin-bottom: 20px;"></i>
                    <h3>Sustainable Livelihoods</h3>
                    <p>Funding circular agriculture cooperatives to ensure long-term food security and income.</p>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('index.html', head('Home') + header + indexContent + footer);

// About Page
const aboutContent = `
    <section class="section">
        <div class="container">
            <h1>About The Foundation</h1>
            <p class="lead" style="font-size: 1.2rem; margin-bottom: 30px;">Humanity is not just about emergency relief. It is about equipping the vulnerable with the foundations for autonomous development.</p>
            
            <div class="grid-2">
                <div>
                    <h2>Our Mission</h2>
                    <p>The Sustainable Humanity Foundation (SHF) believes that providing scientific and technological solutions is the only way to permanently break the cycle of poverty and environmental disaster. We partner with leading research institutes to bring theoretical science into practical, life-saving field applications.</p>
                    <p>Founded in response to the growing climate crisis, we act as a bridge between high-tech environmental solutions and the communities that need them the most.</p>
                </div>
                <div class="card" style="background: var(--color-bg-light); border: none; padding: 30px;">
                    <blockquote style="font-family: var(--font-serif); font-size: 1.3rem; font-style: italic; margin-bottom: 20px; border-left: 4px solid var(--color-accent); padding-left: 20px;">
                        "Scientific solutions are the only path to resolving the cycle of poverty and environmental disasters."
                    </blockquote>
                    <strong>Prof. Dr. Duong Van Sinh</strong><br>
                    <span style="color: var(--color-text-light);">President, SHF</span>
                </div>
            </div>

            <h2 style="margin-top: 60px;">Our Leadership Team</h2>
            <div class="grid-3" style="margin-top: 30px;">
                <div class="card text-center">
                    <h4>Prof. Dr. Duong Van Sinh</h4>
                    <p style="color: var(--color-text-light);">President</p>
                </div>
                <div class="card text-center">
                    <h4>Assoc. Prof. Elena Rodriguez</h4>
                    <p style="color: var(--color-text-light);">Director of Environmental Science</p>
                </div>
                <div class="card text-center">
                    <h4>Michael Chen, CPA</h4>
                    <p style="color: var(--color-text-light);">Chief Financial Officer</p>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('about.html', head('About Us') + header + aboutContent + footer);

// Financials Page
const financialsContent = `
    <section class="section">
        <div class="container">
            <h1>Financial Transparency</h1>
            <p style="font-size: 1.2rem; margin-bottom: 40px;">Trust is our most valuable asset. We are committed to radical transparency in how every donated dollar is utilized.</p>

            <div class="grid-2">
                <div>
                    <h2>Fund Allocation</h2>
                    <p>We take pride in maintaining exceptionally low overhead. The vast majority of our budget goes directly to field operations and community aid.</p>
                    <div style="margin-top: 30px;">
                        <div style="margin-bottom: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;"><strong>92%</strong> <span>Field Programs & Relief</span></div>
                            <div style="width: 100%; background: var(--color-border); height: 10px;"><div style="width: 92%; background: var(--color-accent); height: 100%;"></div></div>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;"><strong>5%</strong> <span>Operations & Management</span></div>
                            <div style="width: 100%; background: var(--color-border); height: 10px;"><div style="width: 5%; background: var(--color-accent); height: 100%;"></div></div>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;"><strong>3%</strong> <span>Fundraising</span></div>
                            <div style="width: 100%; background: var(--color-border); height: 10px;"><div style="width: 3%; background: var(--color-accent); height: 100%;"></div></div>
                        </div>
                    </div>
                </div>
                <div class="card bg-light">
                    <h2>Auditing & Compliance</h2>
                    <p>SHF is a proposed 501(c)(3) organization. All financial statements are audited annually by independent firms complying with strict USAID and Global Environment Facility (GEF) standards.</p>
                    <div style="margin-top: 30px; text-align: center;">
                        <a href="#" class="btn btn-primary" style="margin-bottom: 20px;">Download 2025 Annual Report (PDF)</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('financials.html', head('Financials') + header + financialsContent + footer);

// Contact Page
const contactContent = `
    <section class="section">
        <div class="container">
            <h1>Contact Us</h1>
            <p style="font-size: 1.2rem; margin-bottom: 40px;">We welcome inquiries, feedback, and collaboration proposals from around the globe.</p>

            <div class="grid-2">
                <div>
                    <h2>Send a Message</h2>
                    <form action="https://formsubmit.co/contact@sh.fund" method="POST" class="card" style="margin-top: 20px;">
                        <input type="text" name="_honey" style="display:none">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                        <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                        <textarea name="message" class="form-control" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div>
                    <h2>Headquarters</h2>
                    <p><strong>Address:</strong><br>Tang Nhon Phu Ward, Thu Duc City,<br>Ho Chi Minh City, Vietnam</p>
                    <p><strong>Phone:</strong><br>+84 975 709 643</p>
                    <p><strong>Email:</strong><br>contact@sh.fund</p>

                    <div style="margin-top: 30px; border: 1px solid var(--color-border);">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.42765379058!2d106.78248901533423!3d10.854974760706427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e0a811c79%3A0xc0083236e8b4e724!2zUGjGsOG7nW5nIFTDom5nIE5oxqFuIFBow7osIFRQLiBUaOG7pyDEkOG7qWMsIFRQLiBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1690000000000!5m2!1svi!2s" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('contact.html', head('Contact') + header + contactContent + footer);

// Join Us Page
const joinContent = `
    <section class="section">
        <div class="container">
            <h1>Join Our Mission</h1>
            <p style="font-size: 1.2rem; margin-bottom: 40px;">Whether you are an individual looking to volunteer your time, or an organization seeking to partner with us, your contribution is vital.</p>

            <div class="grid-2">
                <div class="card text-center">
                    <i class="fa-solid fa-hands-holding-child" style="font-size: 3rem; color: var(--color-accent); margin-bottom: 20px;"></i>
                    <h2>Become a Volunteer</h2>
                    <p style="margin-bottom: 30px;">Contribute your skills and time to support vulnerable communities directly in the field.</p>
                    <button onclick="openGenericModal('volunteerModal')" class="btn btn-outline">Apply to Volunteer</button>
                </div>
                <div class="card text-center">
                    <i class="fa-solid fa-handshake" style="font-size: 3rem; color: var(--color-accent); margin-bottom: 20px;"></i>
                    <h2>Become a Partner</h2>
                    <p style="margin-bottom: 30px;">Collaborate with SHF to build breakthrough energy and environmental projects.</p>
                    <button onclick="openGenericModal('partnerModal')" class="btn btn-outline">Propose a Partnership</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Volunteer Modal -->
    <div id="volunteerModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <button onclick="closeGenericModal('volunteerModal')" style="position: absolute; right: 20px; top: 20px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
                <h2>Volunteer Application</h2>
                <form action="https://formsubmit.co/contact@sh.fund" method="POST" style="margin-top: 20px;">
                    <input type="hidden" name="_subject" value="New Volunteer Application">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                    <input type="text" name="profession" class="form-control" placeholder="Profession / Skills" required>
                    <textarea name="message" class="form-control" rows="4" placeholder="Why do you want to join SHF?" required></textarea>
                    <button type="submit" class="btn btn-primary">Submit Application</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Partner Modal -->
    <div id="partnerModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <button onclick="closeGenericModal('partnerModal')" style="position: absolute; right: 20px; top: 20px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
                <h2>Partnership Proposal</h2>
                <form action="https://formsubmit.co/contact@sh.fund" method="POST" style="margin-top: 20px;">
                    <input type="hidden" name="_subject" value="New Partnership Proposal">
                    <input type="text" name="org_name" class="form-control" placeholder="Organization Name" required>
                    <input type="text" name="contact_person" class="form-control" placeholder="Contact Person" required>
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                    <textarea name="message" class="form-control" rows="4" placeholder="Proposal Details" required></textarea>
                    <button type="submit" class="btn btn-primary">Submit Proposal</button>
                </form>
            </div>
        </div>
    </div>
`;
fs.writeFileSync('join-us.html', head('Join Us') + header + joinContent + footer);

console.log('Site rebuilt.');

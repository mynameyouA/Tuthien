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

const footerHtml = fs.readFileSync('index.html', 'utf8').split('<!-- Footer -->')[1]; 

// Projects Page
const projectsContent = `
    <section class="section bg-light">
        <div class="container">
            <div style="text-align: center; margin-bottom: 60px;">
                <span class="section-label">Our Impact</span>
                <h1>Key Projects</h1>
                <p style="font-size: 1.1rem; color: var(--color-text-light); max-width: 600px; margin: 0 auto;">Our active technological initiatives deployed across developing regions.</p>
            </div>

            <div class="grid-3">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80" alt="Waste Oil" class="card-img">
                    <h3>Industrial Waste Oil Treatment</h3>
                    <p style="color: var(--color-text-light); flex-grow: 1;">Utilizing RIDES microbiological technology to safely degrade toxic hydrocarbon radicals in industrial waste oil.</p>
                    <a href="#" style="font-weight: 600; text-decoration: underline; margin-top: 16px; display: inline-block;">View Report &rarr;</a>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" alt="Solar" class="card-img">
                    <h3>Sun of the Village (Solar)</h3>
                    <p style="color: var(--color-text-light); flex-grow: 1;">Installing off-grid solar power systems in remote areas, providing stable electricity to schools and clinics.</p>
                    <a href="#" style="font-weight: 600; text-decoration: underline; margin-top: 16px; display: inline-block;">View Report &rarr;</a>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80" alt="Agriculture" class="card-img">
                    <h3>Circular Agriculture (Aquaponics)</h3>
                    <p style="color: var(--color-text-light); flex-grow: 1;">Funding sustainable farming models that reuse water and eliminate chemical fertilizers to support poor farmers.</p>
                    <a href="#" style="font-weight: 600; text-decoration: underline; margin-top: 16px; display: inline-block;">View Report &rarr;</a>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('projects.html', head('Key Projects') + header + projectsContent + footerHtml);

// Contact Page
const contactContent = `
    <section class="page-hero fade-in" style="background-image: url('contact_hero.jpg'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 4px 12px; border-radius: 20px;">Contact Us</span>
            <h1>Speak Up, We Are Listening</h1>
            <p>We welcome inquiries, feedback, and collaboration proposals from around the globe.</p>
        </div>
    </section>

    <section class="section">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: start;">
                <div class="card">
                    <h3 style="margin-bottom: 24px;">Send a Message</h3>
                    <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                        <input type="text" name="_honey" style="display:none">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                        <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                        <textarea name="message" class="form-control" rows="6" placeholder="How can we help you?" required></textarea>
                        <button type="submit" class="btn btn-navy" style="width: 100%;">Send Message</button>
                    </form>
                </div>
                <div>
                    <h3 style="margin-bottom: 24px;">Headquarters</h3>
                    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                        <div style="width: 50px; height: 50px; background: var(--color-bg-light); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.25rem;"><i class="fa-solid fa-location-dot"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary);">Address</strong>
                            <span style="color: var(--color-text-light);">Tang Nhon Phu Ward, Thu Duc City, HCMC, Vietnam</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
                        <div style="width: 50px; height: 50px; background: var(--color-bg-light); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.25rem;"><i class="fa-solid fa-envelope"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary);">Email</strong>
                            <span style="color: var(--color-text-light);">contact@sh.fund</span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 16px; margin-bottom: 32px;">
                        <div style="width: 50px; height: 50px; background: var(--color-bg-light); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.25rem;"><i class="fa-solid fa-phone"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary);">Phone</strong>
                            <span style="color: var(--color-text-light);">+84 975 709 643</span>
                        </div>
                    </div>

                    <div style="border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border);">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.42765379058!2d106.78248901533423!3d10.854974760706427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e0a811c79%3A0xc0083236e8b4e724!2zUGjGsOG7nW5nIFTDom5nIE5oxqFuIFBow7osIFRQLiBUaOG7pyDEkOG7qWMsIFRQLiBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1690000000000!5m2!1svi!2s" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('contact.html', head('Contact') + header + contactContent + footerHtml);

// Join Us Page
const joinContent = `
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 4px 12px; border-radius: 20px;">Join Us</span>
            <h1>Together, We Change The World</h1>
            <p>Contribute your skills and time to support vulnerable communities directly in the field.</p>
        </div>
    </section>

    <section class="section">
        <div class="container fade-in">
            <div class="grid-2">
                <div class="card text-center" style="padding: 60px 40px;">
                    <div style="width: 100px; height: 100px; background: rgba(0, 208, 132, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; font-size: 3rem; color: var(--color-secondary);"><i class="fa-solid fa-hands-holding-child"></i></div>
                    <h2 style="margin-bottom: 16px;">Become a Volunteer</h2>
                    <p style="color: var(--color-text-light); margin-bottom: 40px;">Join our field teams to install solar panels, build aquaponics systems, and educate local communities.</p>
                    <button onclick="openGenericModal('volunteerModal')" class="btn btn-navy">Apply to Volunteer</button>
                </div>
                <div class="card text-center" style="padding: 60px 40px;">
                    <div style="width: 100px; height: 100px; background: rgba(10, 37, 64, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; font-size: 3rem; color: var(--color-primary);"><i class="fa-solid fa-handshake"></i></div>
                    <h2 style="margin-bottom: 16px;">Become a Partner</h2>
                    <p style="color: var(--color-text-light); margin-bottom: 40px;">Are you a corporation or research institute? Collaborate with SHF to fund or build breakthrough environmental projects.</p>
                    <button onclick="openGenericModal('partnerModal')" class="btn btn-outline">Propose a Partnership</button>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 100px; margin-bottom: 60px;">
                <span class="section-label">The Process</span>
                <h2>Volunteer Journey</h2>
            </div>
            <div class="grid-3 text-center">
                <div>
                    <div style="width: 60px; height: 60px; background: var(--color-primary); color: white; border-radius: 50%; line-height: 60px; font-size: 1.5rem; font-weight: 700; margin: 0 auto 24px;">1</div>
                    <h4 style="margin-bottom: 12px;">Apply</h4>
                    <p style="color: var(--color-text-light); font-size: 0.95rem;">Submit your profile and share your motivation to join the SHF foundation.</p>
                </div>
                <div>
                    <div style="width: 60px; height: 60px; background: var(--color-secondary); color: white; border-radius: 50%; line-height: 60px; font-size: 1.5rem; font-weight: 700; margin: 0 auto 24px;">2</div>
                    <h4 style="margin-bottom: 12px;">Train</h4>
                    <p style="color: var(--color-text-light); font-size: 0.95rem;">Participate in safety and technical training before deployment.</p>
                </div>
                <div>
                    <div style="width: 60px; height: 60px; background: var(--color-bg-light); color: var(--color-primary); border: 2px solid var(--color-primary); border-radius: 50%; line-height: 56px; font-size: 1.5rem; font-weight: 700; margin: 0 auto 24px;">3</div>
                    <h4 style="margin-bottom: 12px;">Deploy</h4>
                    <p style="color: var(--color-text-light); font-size: 0.95rem;">Travel to vulnerable regions and make a direct, lasting impact.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Volunteer Modal -->
    <div id="volunteerModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <button onclick="closeGenericModal('volunteerModal')" style="position: absolute; right: 24px; top: 24px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-light);"><i class="fa-solid fa-xmark"></i></button>
                <h3 style="margin-bottom: 24px;">Volunteer Application</h3>
                <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                    <input type="hidden" name="_subject" value="New Volunteer Application">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                    <input type="text" name="profession" class="form-control" placeholder="Profession / Skills" required>
                    <textarea name="message" class="form-control" rows="4" placeholder="Why do you want to join SHF?" required></textarea>
                    <button type="submit" class="btn btn-navy" style="width: 100%;">Submit Application</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Partner Modal -->
    <div id="partnerModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <button onclick="closeGenericModal('partnerModal')" style="position: absolute; right: 24px; top: 24px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-light);"><i class="fa-solid fa-xmark"></i></button>
                <h3 style="margin-bottom: 24px;">Partnership Proposal</h3>
                <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                    <input type="hidden" name="_subject" value="New Partnership Proposal">
                    <input type="text" name="org_name" class="form-control" placeholder="Organization Name" required>
                    <input type="text" name="contact_person" class="form-control" placeholder="Contact Person" required>
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                    <textarea name="message" class="form-control" rows="4" placeholder="Proposal Details" required></textarea>
                    <button type="submit" class="btn btn-navy" style="width: 100%;">Submit Proposal</button>
                </form>
            </div>
        </div>
    </div>
`;
fs.writeFileSync('join-us.html', head('Join Us') + header + joinContent + footerHtml);

// News List Page
const newsContent = `
    <section class="section bg-light">
        <div class="container fade-in">
            <div style="text-align: center; margin-bottom: 60px;">
                <span class="section-label">Media Center</span>
                <h1>Foundation News</h1>
                <p style="font-size: 1.1rem; color: var(--color-text-light); max-width: 600px; margin: 0 auto;">Updates, press releases, and field reports from SHF.</p>
            </div>
            <div id="news-container">
                <!-- Filled by script.js -->
            </div>
        </div>
    </section>
`;
fs.writeFileSync('news.html', head('News') + header + newsContent + footerHtml);

// News Detail Page
const newsDetailContent = `
    <section class="section">
        <div class="container fade-in" style="max-width: 800px;">
            <div id="news-detail-container">
                <!-- Filled by script.js -->
                <p>Loading article...</p>
            </div>
            <a href="news.html" class="btn btn-outline" style="margin-top: 40px;">&larr; Back to News</a>
        </div>
    </section>
`;
fs.writeFileSync('news-detail.html', head('Article') + header + newsDetailContent + footerHtml);

console.log('Secondary pages generated with new CSS.');

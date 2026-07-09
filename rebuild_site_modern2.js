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

// Projects Page - Vastly expanded
const projectsContent = `
    <section class="page-hero fade-in" style="background-image: url('shf_hero_1783587711643.jpg'); padding: 200px 0 140px;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Field Operations</span>
            <h1 style="font-size: 4rem;">Key Scientific Projects</h1>
            <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto;">We don't just research solutions; we deploy them at scale. Explore our active technological initiatives across developing regions.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container">
            
            <!-- Project 1 -->
            <div class="card fade-in" style="margin-bottom: 60px; overflow: hidden; padding: 0;">
                <div class="grid-2" style="gap: 0; align-items: stretch;">
                    <div style="background: url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80') center/cover; min-height: 400px;"></div>
                    <div style="padding: 60px;">
                        <span class="section-label" style="margin-bottom: 12px; display: block;">Environmental Restoration • Active</span>
                        <h2 style="font-size: 2.2rem; margin-bottom: 20px;">Industrial Waste Oil Remediation (RIDES Tech)</h2>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">The illegal dumping of industrial lubricants is poisoning watersheds across Southeast Asia. Traditional burning methods release highly toxic furans and dioxins into the atmosphere.</p>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px;"><strong>The SHF Solution:</strong> We deploy the proprietary RIDES microbiological process—a consortium of engineered bacteria that safely metabolize long-chain hydrocarbon radicals. This process breaks down toxic oil waste into harmless organic compounds (water and trace carbon) within 72 hours, leaving zero secondary pollution.</p>
                        
                        <div style="display: flex; gap: 32px; border-top: 1px solid var(--color-border); padding-top: 24px;">
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">500,000+</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">Liters Processed</p>
                            </div>
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">12</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">Treatment Sites</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Project 2 -->
            <div class="card fade-in" style="margin-bottom: 60px; overflow: hidden; padding: 0;">
                <div class="grid-2" style="gap: 0; align-items: stretch; direction: rtl;">
                    <div style="background: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80') center/cover; min-height: 400px;"></div>
                    <div style="padding: 60px; direction: ltr;">
                        <span class="section-label" style="margin-bottom: 12px; display: block;">Renewable Energy • Active</span>
                        <h2 style="font-size: 2.2rem; margin-bottom: 20px;">"Sun of the Village" Microgrids</h2>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">Remote mountainous and island communities often exist entirely off the national power grid. The reliance on diesel generators and kerosene is both economically crippling and highly polluting.</p>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px;"><strong>The SHF Solution:</strong> We engineer and install localized, weather-resilient solar photovoltaic (PV) microgrids equipped with advanced LiFePO4 battery storage. These systems are specifically designed for low-maintenance in harsh environments, providing 24/7 stable electricity to schools, clinics, and community centers.</p>
                        
                        <div style="display: flex; gap: 32px; border-top: 1px solid var(--color-border); padding-top: 24px;">
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">450kW</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">Total Capacity</p>
                            </div>
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">8,500</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">People Electrified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="card fade-in" style="margin-bottom: 60px; overflow: hidden; padding: 0;">
                <div class="grid-2" style="gap: 0; align-items: stretch;">
                    <div style="background: url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80') center/cover; min-height: 400px;"></div>
                    <div style="padding: 60px;">
                        <span class="section-label" style="margin-bottom: 12px; display: block;">Sustainable Livelihoods • Active</span>
                        <h2 style="font-size: 2.2rem; margin-bottom: 20px;">Closed-Loop Aquaponics Cooperatives</h2>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">Traditional agriculture in arid regions is failing due to prolonged droughts and soil degradation from excessive chemical fertilizer use, driving farmers into extreme poverty.</p>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px;"><strong>The SHF Solution:</strong> We construct commercial-scale aquaponics facilities—a symbiotic system where fish waste provides organic nutrients for hydroponic plants, and the plants filter the water for the fish. This method uses 90% less water than traditional farming, requires zero chemical fertilizers, and generates dual income streams (fish and produce) for local farming cooperatives.</p>
                        
                        <div style="display: flex; gap: 32px; border-top: 1px solid var(--color-border); padding-top: 24px;">
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">-90%</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">Water Usage</p>
                            </div>
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">15</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">Cooperatives Built</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Project 4 (New) -->
            <div class="card fade-in" style="overflow: hidden; padding: 0;">
                <div class="grid-2" style="gap: 0; align-items: stretch; direction: rtl;">
                    <div style="background: url('https://images.unsplash.com/photo-1541888081628-98e945c55455?w=800&q=80') center/cover; min-height: 400px;"></div>
                    <div style="padding: 60px; direction: ltr;">
                        <span class="section-label" style="margin-bottom: 12px; display: block;">Clean Water • In Development</span>
                        <h2 style="font-size: 2.2rem; margin-bottom: 20px;">Solar-Powered Reverse Osmosis (Desalination)</h2>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">Coastal communities in the Mekong Delta are facing catastrophic freshwater shortages due to rising sea levels and deep saltwater intrusion into aquifers.</p>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px;"><strong>The SHF Solution:</strong> Currently in the prototyping phase, we are engineering containerized, solar-powered Reverse Osmosis (RO) desalination units. These modular plants can be rapidly deployed to disaster zones, utilizing exclusively renewable energy to convert brackish groundwater into WHO-standard drinking water.</p>
                        
                        <div style="display: flex; gap: 32px; border-top: 1px solid var(--color-border); padding-top: 24px;">
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">Phase 2</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">Prototype Testing</p>
                            </div>
                            <div>
                                <h4 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 4px;">Q4 2026</h4>
                                <p style="font-size: 0.85rem; color: var(--color-text-light); text-transform: uppercase;">Expected Launch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
`;
fs.writeFileSync('projects.html', head('Key Projects') + header + projectsContent + footerHtml);

// Contact Page - Expanded
const contactContent = `
    <section class="page-hero fade-in" style="background-image: url('contact_hero.jpg'); padding: 160px 0 120px;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Global Communications</span>
            <h1 style="font-size: 4rem;">Get in Touch</h1>
            <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto;">Whether you represent an institutional donor, a research laboratory, or a local community in need, we want to hear from you.</p>
        </div>
    </section>

    <section class="section">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: start; gap: 60px;">
                <div class="card" style="padding: 50px;">
                    <h3 style="font-size: 2rem; margin-bottom: 10px;">Send a Direct Message</h3>
                    <p style="color: var(--color-text-light); margin-bottom: 30px;">Our communications team typically responds within 24-48 business hours.</p>
                    <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                        <input type="text" name="_honey" style="display:none">
                        <input type="hidden" name="_captcha" value="false">
                        
                        <div style="margin-bottom: 20px;">
                            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 0.95rem;">Subject / Inquiry Type</label>
                            <select name="subject" class="form-control" required style="cursor: pointer;">
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Donation/Funding">Donation & Funding</option>
                                <option value="Project Proposal">Propose a Field Project</option>
                                <option value="Press/Media">Press & Media</option>
                            </select>
                        </div>

                        <div class="grid-2" style="gap: 20px; margin-bottom: 20px;">
                            <div>
                                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 0.95rem;">Full Name</label>
                                <input type="text" name="name" class="form-control" style="margin-bottom: 0;" required>
                            </div>
                            <div>
                                <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 0.95rem;">Organization (Optional)</label>
                                <input type="text" name="organization" class="form-control" style="margin-bottom: 0;">
                            </div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 0.95rem;">Email Address</label>
                            <input type="email" name="email" class="form-control" style="margin-bottom: 0;" required>
                        </div>
                        
                        <div style="margin-bottom: 24px;">
                            <label style="display: block; font-weight: 500; margin-bottom: 8px; font-size: 0.95rem;">Detailed Message</label>
                            <textarea name="message" class="form-control" rows="6" style="margin-bottom: 0;" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 16px;">Send Message</button>
                    </form>
                </div>
                
                <div>
                    <h3 style="font-size: 2rem; margin-bottom: 30px;">Global Headquarters</h3>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 40px;">SHF operates out of Southeast Asia to maintain direct, rapid access to our primary field operation zones across the developing world.</p>
                    
                    <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                        <div style="width: 60px; height: 60px; background: rgba(0, 208, 132, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.5rem; flex-shrink: 0;"><i class="fa-solid fa-location-dot"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary); font-size: 1.2rem; margin-bottom: 4px;">Primary Operations Center</strong>
                            <span style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.5; display: block;">Tang Nhon Phu Ward, Thu Duc City,<br>Ho Chi Minh City, Vietnam</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                        <div style="width: 60px; height: 60px; background: rgba(0, 208, 132, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.5rem; flex-shrink: 0;"><i class="fa-solid fa-envelope"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary); font-size: 1.2rem; margin-bottom: 4px;">Electronic Mail</strong>
                            <span style="color: var(--color-text-light); font-size: 1.05rem;">contact@sh.fund</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 20px; margin-bottom: 40px;">
                        <div style="width: 60px; height: 60px; background: rgba(0, 208, 132, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.5rem; flex-shrink: 0;"><i class="fa-solid fa-phone"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary); font-size: 1.2rem; margin-bottom: 4px;">Direct Line</strong>
                            <span style="color: var(--color-text-light); font-size: 1.05rem;">+84 975 709 643</span>
                        </div>
                    </div>

                    <div style="border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--color-border); height: 300px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.42765379058!2d106.78248901533423!3d10.854974760706427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e0a811c79%3A0xc0083236e8b4e724!2zUGjGsOG7nW5nIFTDom5nIE5oxqFuIFBow7osIFRQLiBUaOG7pyDEkOG7qWMsIFRQLiBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1690000000000!5m2!1svi!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('contact.html', head('Contact') + header + contactContent + footerHtml);

// Join Us Page - Expanded
const joinContent = `
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 160px 0 120px;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Join The Movement</span>
            <h1 style="font-size: 4rem;">Action, Not Just Words</h1>
            <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto;">We rely on a global network of dedicated scientists, engineers, corporate partners, and volunteers to deploy our technologies worldwide.</p>
        </div>
    </section>

    <section class="section">
        <div class="container fade-in">
            <div class="grid-2" style="gap: 40px;">
                <div class="card text-center" style="padding: 60px 40px; border-top: 5px solid var(--color-secondary);">
                    <div style="width: 100px; height: 100px; background: rgba(0, 208, 132, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; font-size: 3rem; color: var(--color-secondary);"><i class="fa-solid fa-hard-hat"></i></div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 16px;">Field Volunteers</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 40px; min-height: 120px;">Are you an engineer, agronomist, or logistics expert? We need skilled professionals to travel to our deployment zones. Help us install solar panels, set up water filtration units, and train local communities.</p>
                    <button onclick="openGenericModal('volunteerModal')" class="btn btn-navy" style="font-size: 1.1rem; padding: 16px 40px;">Apply for Field Deployment</button>
                </div>
                <div class="card text-center" style="padding: 60px 40px; border-top: 5px solid var(--color-primary);">
                    <div style="width: 100px; height: 100px; background: rgba(10, 37, 64, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; font-size: 3rem; color: var(--color-primary);"><i class="fa-solid fa-handshake"></i></div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 16px;">Corporate Partners</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 40px; min-height: 120px;">We collaborate with ESG-focused corporations, hardware manufacturers, and research universities. Co-fund a specific project or donate advanced technological hardware to accelerate our mission.</p>
                    <button onclick="openGenericModal('partnerModal')" class="btn btn-outline" style="font-size: 1.1rem; padding: 16px 40px;">Propose a Partnership</button>
                </div>
            </div>
            
            <div style="margin-top: 100px; padding-top: 80px; border-top: 1px solid var(--color-border);">
                <div style="text-align: center; margin-bottom: 60px;">
                    <span class="section-label">Common Questions</span>
                    <h2 style="font-size: 2.5rem;">Volunteer FAQ</h2>
                </div>
                
                <div class="grid-2" style="gap: 40px;">
                    <div>
                        <h4 style="font-size: 1.2rem; margin-bottom: 12px; color: var(--color-primary);"><i class="fa-solid fa-circle-question" style="color: var(--color-secondary); margin-right: 8px;"></i> Do I need technical experience?</h4>
                        <p style="color: var(--color-text-light); line-height: 1.7; margin-bottom: 30px;">While technical skills (engineering, medical, agricultural) are highly prioritized for our field deployments, we also require logistics, translation, and administrative volunteers for our headquarters operations.</p>

                        <h4 style="font-size: 1.2rem; margin-bottom: 12px; color: var(--color-primary);"><i class="fa-solid fa-circle-question" style="color: var(--color-secondary); margin-right: 8px;"></i> Does SHF cover travel costs?</h4>
                        <p style="color: var(--color-text-light); line-height: 1.7; margin-bottom: 30px;">For highly specialized technical deployments (e.g., senior electrical engineers), SHF may subsidize travel and lodging. General volunteers are required to self-fund their flights, though we provide secure housing and food on-site.</p>
                    </div>
                    <div>
                        <h4 style="font-size: 1.2rem; margin-bottom: 12px; color: var(--color-primary);"><i class="fa-solid fa-circle-question" style="color: var(--color-secondary); margin-right: 8px;"></i> How long is a deployment?</h4>
                        <p style="color: var(--color-text-light); line-height: 1.7; margin-bottom: 30px;">Project installations usually take between 2 to 6 weeks depending on the complexity (e.g., a large aquaponics facility takes longer than a microgrid). We ask for a minimum commitment of 3 weeks.</p>
                        
                        <h4 style="font-size: 1.2rem; margin-bottom: 12px; color: var(--color-primary);"><i class="fa-solid fa-circle-question" style="color: var(--color-secondary); margin-right: 8px;"></i> Is it safe?</h4>
                        <p style="color: var(--color-text-light); line-height: 1.7; margin-bottom: 30px;">Safety is our absolute priority. We perform rigorous risk assessments for all deployment zones. However, volunteers must be prepared to work in rugged, off-grid environments with limited modern amenities.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Volunteer Modal -->
    <div id="volunteerModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content" style="max-width: 700px;">
                <button onclick="closeGenericModal('volunteerModal')" style="position: absolute; right: 24px; top: 24px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-light);"><i class="fa-solid fa-xmark"></i></button>
                <h3 style="font-size: 2rem; margin-bottom: 10px;">Volunteer Application</h3>
                <p style="color: var(--color-text-light); margin-bottom: 30px;">Fill out your technical profile below. Our HR team will contact you if your skills match an upcoming project.</p>
                <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                    <input type="hidden" name="_subject" value="New Volunteer Application">
                    <div class="grid-2" style="gap: 16px; margin-bottom: 16px;">
                        <input type="text" name="name" class="form-control" placeholder="Full Name" style="margin: 0;" required>
                        <input type="email" name="email" class="form-control" placeholder="Email Address" style="margin: 0;" required>
                    </div>
                    <div class="grid-2" style="gap: 16px; margin-bottom: 16px;">
                        <input type="text" name="profession" class="form-control" placeholder="Primary Profession / Degree" style="margin: 0;" required>
                        <input type="text" name="country" class="form-control" placeholder="Country of Residence" style="margin: 0;" required>
                    </div>
                    <textarea name="experience" class="form-control" rows="3" placeholder="Briefly describe your technical or field experience..." required></textarea>
                    <textarea name="motivation" class="form-control" rows="3" placeholder="Why do you want to join SHF deployments?" required></textarea>
                    <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 14px;">Submit Application</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Partner Modal -->
    <div id="partnerModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content" style="max-width: 700px;">
                <button onclick="closeGenericModal('partnerModal')" style="position: absolute; right: 24px; top: 24px; background: transparent; border: none; font-size: 1.5rem; cursor: pointer; color: var(--color-text-light);"><i class="fa-solid fa-xmark"></i></button>
                <h3 style="font-size: 2rem; margin-bottom: 10px;">Institutional Partnership</h3>
                <p style="color: var(--color-text-light); margin-bottom: 30px;">Submit a high-level proposal. Our Director of Operations will review it.</p>
                <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                    <input type="hidden" name="_subject" value="New Partnership Proposal">
                    <div class="grid-2" style="gap: 16px; margin-bottom: 16px;">
                        <input type="text" name="org_name" class="form-control" placeholder="Organization / Company Name" style="margin: 0;" required>
                        <input type="text" name="org_website" class="form-control" placeholder="Organization Website" style="margin: 0;">
                    </div>
                    <div class="grid-2" style="gap: 16px; margin-bottom: 16px;">
                        <input type="text" name="contact_person" class="form-control" placeholder="Your Name & Title" style="margin: 0;" required>
                        <input type="email" name="email" class="form-control" placeholder="Corporate Email Address" style="margin: 0;" required>
                    </div>
                    <select name="partnership_type" class="form-control" required style="cursor: pointer;">
                        <option value="" disabled selected>Select Partnership Type...</option>
                        <option value="Financial Grant">Financial Grant / ESG Funding</option>
                        <option value="Hardware Donation">Technology / Hardware Donation</option>
                        <option value="Research Collaboration">Academic / Research Collaboration</option>
                    </select>
                    <textarea name="message" class="form-control" rows="5" placeholder="Please outline the goals of the proposed partnership..." required></textarea>
                    <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 14px;">Submit Proposal</button>
                </form>
            </div>
        </div>
    </div>
`;
fs.writeFileSync('join-us.html', head('Join Us') + header + joinContent + footerHtml);

// News List Page
const newsContent = `
    <section class="page-hero fade-in" style="background-image: url('shf_hero_1783587711643.jpg'); padding: 120px 0;">
        <div class="container">
            <h1 style="font-size: 3.5rem;">Press & Field Reports</h1>
            <p style="font-size: 1.25rem;">Stay updated with our latest scientific breakthroughs, project completions, and financial disclosures.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in">
            <div id="news-container">
                <!-- Filled by script.js?v=2 -->
            </div>
        </div>
    </section>
`;
fs.writeFileSync('news.html', head('News') + header + newsContent + footerHtml);

// News Detail Page
const newsDetailContent = `
    <section class="section">
        <div class="container fade-in" style="max-width: 800px; padding-top: 40px;">
            <a href="news.html" style="font-weight: 500; color: var(--color-text-light); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; margin-bottom: 40px;"><i class="fa-solid fa-arrow-left"></i> Back to All Reports</a>
            
            <div id="news-detail-container" style="background: #fff; padding: 50px; border-radius: var(--radius); box-shadow: var(--shadow-md); border: 1px solid var(--color-border);">
                <!-- Filled by script.js?v=2 -->
                <p>Loading authoritative report...</p>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('news-detail.html', head('Article') + header + newsDetailContent + footerHtml);

console.log('Secondary pages generated with deeply expanded content.');

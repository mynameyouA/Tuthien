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
    <link rel="stylesheet" href="styles.css?v=19">
</head>
<body>
`;

const header = `
    <!-- Header -->
    <header class="main-header">
        
        <div class="container header-container">
            <div class="logo-and-toggle" style="display: flex; justify-content: space-between; align-items: center;">
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
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 40px;">SHF operates out of the United States to maintain direct, rapid access to global institutional funding and logistical hubs.</p>
                    
                    <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                        <div style="width: 60px; height: 60px; background: rgba(0, 208, 132, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.5rem; flex-shrink: 0;"><i class="fa-solid fa-location-dot"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary); font-size: 1.2rem; margin-bottom: 4px;">Primary Operations Center</strong>
                            <span style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.5; display: block;">Cheyenne, Wyoming,<br>United States of America</span>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                        <div style="width: 60px; height: 60px; background: rgba(0, 208, 132, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--color-secondary); font-size: 1.5rem; flex-shrink: 0;"><i class="fa-solid fa-envelope"></i></div>
                        <div>
                            <strong style="display: block; color: var(--color-primary); font-size: 1.2rem; margin-bottom: 4px;">Electronic Mail</strong>
                            <span style="color: var(--color-text-light); font-size: 1.05rem;">contact@sh.fund</span>
                        </div>
                    </div>
                    
                    

                    <div style="border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--color-border); height: 300px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.86178877546!2d-104.8202462!3d41.1399814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f38762e73ef93%3A0xb10a30418f96f0b2!2sCheyenne%2C%20WY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
                    <a href="apply.html" class="btn btn-navy" style="font-size: 1.1rem; padding: 16px 40px;">Apply for Field Deployment</a>
                </div>
                <div class="card text-center" style="padding: 60px 40px; border-top: 5px solid var(--color-primary);">
                    <div style="width: 100px; height: 100px; background: rgba(10, 37, 64, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; font-size: 3rem; color: var(--color-primary);"><i class="fa-solid fa-handshake"></i></div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 16px;">Corporate Partners</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 40px; min-height: 120px;">We collaborate with ESG-focused corporations, hardware manufacturers, and research universities. Co-fund a specific project or donate advanced technological hardware to accelerate our mission.</p>
                    <a href="propose.html" class="btn btn-outline" style="font-size: 1.1rem; padding: 16px 40px;">Propose a Partnership</a>
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
                <!-- Filled by script.js?v=19 -->
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
                <!-- Filled by script.js?v=19 -->
                <p>Loading authoritative report...</p>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('news-detail.html', head('Article') + header + newsDetailContent + footerHtml);

console.log('Secondary pages generated with deeply expanded content.');

// Donate Page
const donateContent = `
    <section class="page-hero fade-in" style="background-image: url('https://images.unsplash.com/photo-1593113565637-682120362481?w=1600&q=80'); padding: 160px 0 100px;">
        <div class="container text-center">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Global Funding Gateway</span>
            <h1 style="font-size: 3.5rem;">Fund The Future</h1>
            <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto;">Your capital directly accelerates the deployment of life-saving open-source climate technology.</p>
        </div>
    </section>

    <section class="section bg-light" style="padding: 60px 0 120px;">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: start; gap: 60px;">
                <!-- Left: Impact Statement -->
                <div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 24px;">Your Impact Multiplier</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                        By utilizing open-source hardware and blockchain transparency, SHF eliminates middle-men. <strong>92% of your contribution</strong> goes directly into field hardware and operations.
                    </p>

                    <p style="color: var(--color-text-light); font-size: 0.9rem; font-style: italic; margin-bottom: 16px;">
                        * The tiers below illustrate the tangible impact of your contribution. Because complex infrastructure requires pooled resources, your funds will directly co-finance these life-saving technologies.
                    </p>
                    
                    <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--color-secondary); box-shadow: var(--shadow-sm); margin-bottom: 24px;">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$50 = Clean Water Security</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Covers the capital cost of a UV-C purification unit for a vulnerable family. Ongoing maintenance is fully subsidized by SHF.</p>
                    </div>

                    <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--color-primary); box-shadow: var(--shadow-sm); margin-bottom: 24px;">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$500 = Co-fund Rural Electrification</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Acts as a high-impact catalyst, co-funding a 2kW medical solar microgrid. You share the hardware and labor costs alongside institutional partners.</p>
                    </div>

                    <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid #A50064; box-shadow: var(--shadow-sm);">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$5,000+ = Ecosystem Restoration</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Fully finances a large-scale RIDES biological remediation operation, neutralizing over 10,000 liters of crude oil waste and restoring local aquaculture livelihoods.</p>
                    </div>
                </div>
                
                <!-- Right: Gateway UI -->
                <div>
                    <div class="donate-gateway-wrapper">
                        <div class="donate-type-toggle">
                            <div class="donate-type-btn active" onclick="setDonateType(this, 'one-time')">Give Once</div>
                            <div class="donate-type-btn" onclick="setDonateType(this, 'monthly')">Monthly <span style="font-size:0.75rem; background: var(--color-secondary); color: white; padding: 2px 6px; border-radius: 10px; margin-left: 4px;">Impact</span></div>
                        </div>
                        
                        <div style="padding: 40px;">
                            <h4 style="margin-bottom: 16px; font-size: 1.1rem;">Select Amount</h4>
                            <div class="amount-grid">
                                <div class="amount-btn" onclick="setAmount(this, 50)">$50</div>
                                <div class="amount-btn active" onclick="setAmount(this, 100)">$100</div>
                                <div class="amount-btn" onclick="setAmount(this, 500)">$500</div>
                            </div>
                            <div class="custom-amount" style="margin-bottom: 30px;">
                                <span>$</span>
                                <input type="number" id="custom-amount-input" placeholder="Custom Amount" onfocus="clearAmountSelection()">
                            </div>

                            <h4 style="margin-bottom: 16px; font-size: 1.1rem;">Payment Method</h4>
                            <div class="payment-tabs">
                                <div class="payment-tab active" onclick="setPaymentTab(this, 'card')"><i class="fa-solid fa-credit-card"></i> Card</div>
                                <div class="payment-tab" onclick="setPaymentTab(this, 'crypto')"><i class="fa-brands fa-ethereum"></i> Crypto</div>
                                <div class="payment-tab" onclick="setPaymentTab(this, 'paypal')"><i class="fa-brands fa-paypal"></i> PayPal</div>
                                <div class="payment-tab" onclick="setPaymentTab(this, 'wallet')"><i class="fa-solid fa-wallet"></i> Wallets</div>
                            </div>

                            <div id="panel-card" class="payment-panel active">
                                <div class="form-group">
                                    <label>Card Information</label>
                                    <div style="position: relative;">
                                        <i class="fa-regular fa-credit-card" style="position: absolute; left: 14px; top: 16px; color: #94a3b8;"></i>
                                        <input type="text" class="form-input" placeholder="0000 0000 0000 0000" style="padding-left: 40px;">
                                    </div>
                                </div>
                                <div class="card-elements" style="margin-bottom: 24px;">
                                    <input type="text" class="form-input" placeholder="MM / YY">
                                    <input type="text" class="form-input" placeholder="CVC">
                                </div>
                            </div>

                            <div id="panel-crypto" class="payment-panel">
                                <div style="text-align: center; margin-bottom: 24px;">
                                    <div style="background: white; padding: 16px; border: 1px solid var(--color-border); border-radius: 8px; display: inline-block; margin-bottom: 16px;">
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x52b4483e30243a65212adb16d993627534e61d6d" alt="QR Code" style="width: 150px; height: 150px;">
                                    </div>
                                    <p style="font-size: 0.9rem; color: var(--color-text-light); margin-bottom: 8px;">Network: <strong>Polygon (USDT/USDC)</strong></p>
                                    <div style="display:flex; background: #f1f5f9; padding: 10px 16px; border-radius: 8px; align-items: center; justify-content: space-between;">
                                        <code style="font-size: 0.85rem; color: var(--color-primary);">0x52b4483e30243a65212adb16d993627534e61d6d</code>
                                        <i class="fa-regular fa-copy" style="cursor: pointer; color: var(--color-text-light);" onclick="alert('Address copied!')"></i>
                                    </div>
                                </div>
                            </div>

                            <div id="panel-paypal" class="payment-panel">
                                <div style="text-align: center; padding: 20px 0 30px;">
                                    <p style="color: var(--color-text-light); margin-bottom: 20px;">You will be redirected to PayPal to complete your donation securely.</p>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" style="height: 30px;">
                                </div>
                            </div>

                            <div id="panel-wallet" class="payment-panel">
                                <div class="grid-2" style="gap: 12px; margin-bottom: 24px;">
                                    <div style="border: 2px solid #A50064; padding: 16px; border-radius: 8px; text-align: center; cursor: pointer; color: #A50064; font-weight: 600;">MoMo</div>
                                    <div style="border: 2px solid #0068FF; padding: 16px; border-radius: 8px; text-align: center; cursor: pointer; color: #0068FF; font-weight: 600;">ZaloPay</div>
                                </div>
                            </div>

                            <div class="form-group" style="margin-top: 24px;">
                                <label>Your Details</label>
                                <input type="text" class="form-input" placeholder="Full Name" style="margin-bottom: 12px;">
                                <input type="email" class="form-input" placeholder="Email Address">
                            </div>

                            <button class="btn-submit-donate" id="donate-submit-btn" onclick="processDonation()">
                                <div class="loader-spinner"></div>
                                <span class="btn-text">Donate $100</span>
                                <i class="fa-solid fa-lock" style="font-size: 0.9rem;"></i>
                            </button>
                            <p style="text-align: center; font-size: 0.8rem; color: #94a3b8; margin-top: 16px; margin-bottom: 0;">
                                <i class="fa-solid fa-shield-halved"></i> 256-bit Secure Encryption
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Gateway Script -->
    <script>
        let currentAmount = 100;

        function setDonateType(element, type) {
            document.querySelectorAll('.donate-type-btn').forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
        }

        function setAmount(element, amount) {
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
            document.getElementById('custom-amount-input').value = '';
            currentAmount = amount;
            updateSubmitButton();
        }

        function clearAmountSelection() {
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
        }

        document.getElementById('custom-amount-input').addEventListener('input', function(e) {
            currentAmount = e.target.value || 0;
            updateSubmitButton();
        });

        function setPaymentTab(element, panelId) {
            document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.payment-panel').forEach(p => p.classList.remove('active'));
            
            element.classList.add('active');
            document.getElementById('panel-' + panelId).classList.add('active');
            
            const btnText = document.querySelector('#donate-submit-btn .btn-text');
            if(panelId === 'crypto') {
                btnText.textContent = "I have transferred Crypto";
            } else if(panelId === 'paypal') {
                btnText.textContent = "Continue to PayPal";
            } else {
                updateSubmitButton();
            }
        }

        function updateSubmitButton() {
            const activeTab = document.querySelector('.payment-tab.active');
            if(activeTab && activeTab.textContent.includes('Crypto')) return;
            if(activeTab && activeTab.textContent.includes('PayPal')) return;
            
            const btnText = document.querySelector('#donate-submit-btn .btn-text');
            btnText.textContent = "Donate $" + currentAmount;
        }

        function processDonation() {
            const btn = document.getElementById('donate-submit-btn');
            btn.classList.add('processing');
            
            // Mock processing
            setTimeout(() => {
                btn.classList.remove('processing');
                alert("Thank you! This is a mock interactive UI. In production, this will trigger the real payment gateway (Stripe/PayPal/MoMo).");
            }, 1500);
        }
    </script>

    <!-- Sponsorship Packages Infographic -->
    <section class="section" style="background: var(--color-bg-alt); padding: 80px 20px;">
        <div class="container fade-in">
            <div style="text-align: center; margin-bottom: 60px;">
                <span class="section-label" style="background: rgba(30, 58, 138, 0.1); color: #1e3a8a; padding: 6px 16px; border-radius: 20px; font-weight: bold;">Corporate & Major Gifts</span>
                <h2 style="font-size: 2.8rem; margin: 20px 0 16px;">Sponsorship Packages</h2>
                <p style="font-size: 1.2rem; color: var(--color-text-light);">Sustainable Humanity Foundation</p>
            </div>
            <div class="grid-4" style="align-items: stretch;">
                <!-- Bronze -->
                <div class="card" style="padding: 40px 30px; text-align: center; border-top: 8px solid #cd7f32; display: flex; flex-direction: column;">
                    <div style="font-size: 3.5rem; margin-bottom: 20px;">🥉</div>
                    <h3 style="font-size: 1.8rem; color: #cd7f32; margin-bottom: 8px;">Bronze</h3>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-text); margin-bottom: 24px;">$10,000</div>
                    <ul style="text-align: left; list-style: none; padding: 0; margin: 0; flex-grow: 1; color: var(--color-text-light); font-size: 0.95rem; display: flex; flex-direction: column; gap: 12px;">
                        <li><i class="fa-solid fa-check" style="color: #cd7f32; margin-right: 8px;"></i> Small-scale community impact</li>
                        <li><i class="fa-solid fa-check" style="color: #cd7f32; margin-right: 8px;"></i> Logo in annual report</li>
                        <li><i class="fa-solid fa-check" style="color: #cd7f32; margin-right: 8px;"></i> VIP Newsletter access</li>
                    </ul>
                </div>
                
                <!-- Silver -->
                <div class="card" style="padding: 40px 30px; text-align: center; border-top: 8px solid #a8a8a8; display: flex; flex-direction: column; background: linear-gradient(to bottom, white, #fbfbfb);">
                    <div style="font-size: 3.5rem; margin-bottom: 20px;">🥈</div>
                    <h3 style="font-size: 1.8rem; color: #888888; margin-bottom: 8px;">Silver</h3>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-text); margin-bottom: 24px;">$50,000</div>
                    <ul style="text-align: left; list-style: none; padding: 0; margin: 0; flex-grow: 1; color: var(--color-text-light); font-size: 0.95rem; display: flex; flex-direction: column; gap: 12px;">
                        <li><i class="fa-solid fa-check" style="color: #a8a8a8; margin-right: 8px;"></i> Project co-funding</li>
                        <li><i class="fa-solid fa-check" style="color: #a8a8a8; margin-right: 8px;"></i> Logo featured on website</li>
                        <li><i class="fa-solid fa-check" style="color: #a8a8a8; margin-right: 8px;"></i> Exclusive webinars with founders</li>
                    </ul>
                </div>

                <!-- Gold -->
                <div class="card" style="padding: 40px 30px; text-align: center; border-top: 8px solid #ffd700; display: flex; flex-direction: column; transform: scale(1.05); box-shadow: 0 20px 40px rgba(255, 215, 0, 0.15); z-index: 10;">
                    <div style="font-size: 3.5rem; margin-bottom: 20px; text-shadow: 0 4px 12px rgba(255,215,0,0.4);">🥇</div>
                    <h3 style="font-size: 1.8rem; color: #d4af37; margin-bottom: 8px;">Gold</h3>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-text); margin-bottom: 24px;">$250,000</div>
                    <ul style="text-align: left; list-style: none; padding: 0; margin: 0; flex-grow: 1; color: var(--color-text-light); font-size: 0.95rem; display: flex; flex-direction: column; gap: 12px;">
                        <li><i class="fa-solid fa-check" style="color: #d4af37; margin-right: 8px;"></i> Fund a complete pilot project</li>
                        <li><i class="fa-solid fa-check" style="color: #d4af37; margin-right: 8px;"></i> Seat on Advisory Council</li>
                        <li><i class="fa-solid fa-check" style="color: #d4af37; margin-right: 8px;"></i> Real-time Impact Dashboard</li>
                    </ul>
                </div>

                <!-- Platinum -->
                <div class="card" style="padding: 40px 30px; text-align: center; border-top: 8px solid #1e3a8a; display: flex; flex-direction: column; background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);">
                    <div style="font-size: 3.5rem; margin-bottom: 20px; text-shadow: 0 4px 12px rgba(30,58,138,0.2);">💎</div>
                    <h3 style="font-size: 1.8rem; color: #1e3a8a; margin-bottom: 8px;">Platinum</h3>
                    <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-text); margin-bottom: 24px;">$1,000,000+</div>
                    <ul style="text-align: left; list-style: none; padding: 0; margin: 0; flex-grow: 1; color: var(--color-text-light); font-size: 0.95rem; display: flex; flex-direction: column; gap: 12px;">
                        <li><i class="fa-solid fa-star" style="color: #1e3a8a; margin-right: 8px;"></i> Primary Global Sponsor</li>
                        <li><i class="fa-solid fa-star" style="color: #1e3a8a; margin-right: 8px;"></i> Logo in Global Impact Report</li>
                        <li><i class="fa-solid fa-star" style="color: #1e3a8a; margin-right: 8px;"></i> Board of Strategic Partners</li>
                        <li><i class="fa-solid fa-star" style="color: #1e3a8a; margin-right: 8px;"></i> Exclusive VIP Field Visits</li>
                    </ul>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 60px; background: white; padding: 40px; border-radius: var(--radius); box-shadow: var(--shadow-sm);">
                <h3 style="font-size: 1.8rem; margin-bottom: 16px;">Ready to discuss a strategic partnership?</h3>
                <p style="color: var(--color-text-light); font-size: 1.1rem; margin-bottom: 24px; max-width: 600px; margin-left: auto; margin-right: auto;">Our leadership team is available to tailor a sponsorship package that aligns with your organization's CSR and sustainability goals.</p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <a href="contact.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 12px 32px; background-color: #1e3a8a;">Contact SHF Leadership</a>
                    <a href="mailto:partnerships@sustainablehumanity.org" class="btn btn-outline" style="font-size: 1.1rem; padding: 12px 32px;"><i class="fa-solid fa-envelope" style="margin-right: 8px;"></i> partnerships@sustainablehumanity.org</a>
                </div>
            </div>
        </div>
    </section>

`;
fs.writeFileSync('donate.html', head('Donate') + header + donateContent + footerHtml);
console.log('donate.html generated.');

// Apply Page
const applyContent = `
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Field Deployment Program</span>
            <h1 style="font-size: 3.5rem;">Join Our Field Missions</h1>
            <p style="font-size: 1.25rem;">Bring your technical expertise to the frontlines of climate adaptation.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in">
            <div class="grid-2" style="gap: 60px; align-items: start;">
                <!-- Left Column: Explanation -->
                <div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 24px;">The Reality of Field Operations</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">
                        Deploying breakthrough technology requires more than just lab research. It requires courageous engineers, logisticians, and community organizers willing to work in off-grid, rugged environments. By joining our field deployment program, you become the bridge between high-tech innovation and real-world survival.
                    </p>
                    
                    <img src="volunteer_field_work.jpg" alt="Engineers working in the field" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-sm); margin-bottom: 30px; height: 300px; object-fit: cover;">
                    
                    <div style="background: #fff; padding: 30px; border-radius: var(--radius); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
                        <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 16px;"><i class="fa-solid fa-clipboard-check" style="color: var(--color-secondary); margin-right: 8px;"></i> What to Expect</h4>
                        <ul style="list-style: none; color: var(--color-text-light); line-height: 1.8;">
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Hands-on Impact:</strong> Direct installation of solar grids, water purifiers, or ecological sensors.</li>
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Cross-Cultural Collaboration:</strong> Training local technicians to maintain the equipment.</li>
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Logistical Support:</strong> SHF provides housing, food, and rigorous security protocols.</li>
                            <li><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Certification:</strong> Earn field engineering credentials recognized by UN agencies.</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Right Column: The Form -->
                <div>
                    <div class="card" style="padding: 50px; position: sticky; top: 120px;">
                        <h3 style="font-size: 2rem; margin-bottom: 10px;">Technical Profile Application</h3>
                        <p style="color: var(--color-text-light); margin-bottom: 30px;">Submit your credentials. Due to high volume, our operations team only contacts candidates whose skills match upcoming missions.</p>
                        
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
                            <textarea name="experience" class="form-control" rows="4" placeholder="Briefly describe your technical or field experience..." required style="margin-bottom: 16px;"></textarea>
                            <textarea name="motivation" class="form-control" rows="4" placeholder="Why do you want to join SHF deployments? What unique value do you bring?" required style="margin-bottom: 24px;"></textarea>
                            <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 16px;">Submit Application to HQ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('apply.html', head('Apply') + header + applyContent + footerHtml);
console.log('apply.html generated.');

// Propose Page
const proposeContent = `
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">ESG & Corporate Giving</span>
            <h1 style="font-size: 3.5rem;">Institutional Partnership</h1>
            <p style="font-size: 1.25rem;">Align your corporate ESG goals with measurable, high-impact climate action.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in">
            <div class="grid-2" style="gap: 60px; align-items: start;">
                <!-- Left Column: Explanation -->
                <div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 24px;">Strategic Alliances for Global Impact</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">
                        The Sustainable Humanity Foundation partners with forward-thinking corporations, hardware manufacturers, and academic institutions to scale our technological solutions. By co-funding projects or donating hardware, you provide the critical resources needed to bypass bureaucratic delays and deliver immediate relief to vulnerable zones.
                    </p>
                    
                    <img src="corporate_partnership.jpg" alt="Corporate Executives and Scientists discussing partnership" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-sm); margin-bottom: 30px; height: 300px; object-fit: cover;">
                    
                    <div style="background: #fff; padding: 30px; border-radius: var(--radius); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
                        <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 16px;"><i class="fa-solid fa-handshake-angle" style="color: var(--color-secondary); margin-right: 8px;"></i> Avenues of Collaboration</h4>
                        <ul style="list-style: none; color: var(--color-text-light); line-height: 1.8;">
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-arrow-right" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Financial Grants:</strong> Direct funding for specific microgrid or agricultural deployments.</li>
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-arrow-right" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Hardware Donation:</strong> Supplying raw materials (e.g., solar inverters, lithium cells, biotech reagents).</li>
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-arrow-right" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>R&D Collaboration:</strong> Joint development of open-source climate resilience models.</li>
                            <li><i class="fa-solid fa-arrow-right" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Tax & ESG Benefits:</strong> Full transparency reporting to satisfy your annual ESG requirements.</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Right Column: The Form -->
                <div>
                    <div class="card" style="padding: 50px; position: sticky; top: 120px;">
                        <h3 style="font-size: 2rem; margin-bottom: 10px;">Partnership Proposal</h3>
                        <p style="color: var(--color-text-light); margin-bottom: 30px;">Submit a high-level proposal. Our Director of Operations will review it and schedule a virtual alignment meeting within 48 hours.</p>
                        
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
                            <select name="partnership_type" class="form-control" required style="cursor: pointer; margin-bottom: 16px;">
                                <option value="" disabled selected>Select Partnership Type...</option>
                                <option value="Financial Grant">Financial Grant / ESG Funding</option>
                                <option value="Hardware Donation">Technology / Hardware Donation</option>
                                <option value="Research Collaboration">Academic / Research Collaboration</option>
                            </select>
                            <textarea name="message" class="form-control" rows="5" placeholder="Please outline the goals of the proposed partnership, expected timeline, and allocated budget/resources..." required style="margin-bottom: 24px;"></textarea>
                            <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 16px;">Submit Proposal</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('propose.html', head('Propose Partnership') + header + proposeContent + footerHtml);
console.log('propose.html generated.');

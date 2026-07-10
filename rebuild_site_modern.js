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
    <link rel="stylesheet" href="styles.css?v=6">
</head>
<body>
`;

const header = `
    <!-- Header -->
    <header class="main-header">
        
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
                <a href="donate.html" class="btn btn-primary">Donate Now</a>
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
                <p style="margin-bottom: 8px; color: rgba(255,255,255,0.8);"><strong>US 501(c)(3) Nonprofit - Audited to USAID/GEF Standards</strong></p>
                <p>&copy; 2026 The Sustainable Humanity Foundation. All rights reserved. 501(c)(3) Nonprofit.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="script.js?v=6"></script>
</body>
</html>
`;

// Index - Vastly expanded
const indexContent = `
    <!-- Hero -->
    <section class="page-hero fade-in" style="background-image: url('shf_hero_1783587711643.jpg'); padding: 240px 0 200px;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: var(--color-secondary); padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; letter-spacing: 2px;">Global Environmental Initiative</span>
            <h1 style="font-size: 4.5rem; line-height: 1.1; text-shadow: 0 4px 12px rgba(0,0,0,0.3);">Science for a<br>Sustainable Humanity</h1>
            <p style="font-size: 1.4rem; max-width: 800px; margin: 0 auto 50px; text-shadow: 0 2px 6px rgba(0,0,0,0.3);">We bridge the gap between high-tech scientific innovations and the most vulnerable communities, reversing environmental damage while eradicating energy poverty.</p>
            <div style="display: flex; gap: 24px; justify-content: center;">
                <a href="donate.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 16px 40px;">Support Our Mission</a>
                <a href="about.html" class="btn btn-outline" style="color: #fff; border-color: rgba(255,255,255,0.6); font-size: 1.1rem; padding: 16px 40px; background: rgba(0,0,0,0.2);">Discover Our Work</a>
            </div>
        </div>
    </section>

    <!-- Impact in Numbers -->
    <section class="section" style="background: var(--color-primary); color: white; padding: 60px 0; margin-top: -60px; position: relative; z-index: 10;">
        <div class="container">
            <div class="grid-4 text-center" style="gap: 20px;">
                <div>
                    <h2 style="color: var(--color-secondary); font-size: 3.5rem; margin-bottom: 8px;">24+</h2>
                    <p style="font-size: 1rem; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Projects Completed</p>
                </div>
                <div>
                    <h2 style="color: var(--color-secondary); font-size: 3.5rem; margin-bottom: 8px;">15K</h2>
                    <p style="font-size: 1rem; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Lives Positively Impacted</p>
                </div>
                <div>
                    <h2 style="color: var(--color-secondary); font-size: 3.5rem; margin-bottom: 8px;">2M</h2>
                    <p style="font-size: 1rem; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Liters of Water Purified</p>
                </div>
                <div>
                    <h2 style="color: var(--color-secondary); font-size: 3.5rem; margin-bottom: 8px;">450</h2>
                    <p style="font-size: 1rem; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">kW of Solar Deployed</p>
                </div>
            </div>
        </div>
    </section>

    <!-- The Global Crisis -->
    <section class="section">
        <div class="container fade-in">
            <div class="grid-2">
                <div>
                    <span class="section-label">The Challenge</span>
                    <h2 style="font-size: 2.8rem; margin-bottom: 30px;">A World at the Tipping Point</h2>
                    <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 24px;">The consequences of industrialization have left a devastating footprint on our planet. Every single year, over <strong>10 million tons of toxic waste oil</strong> are improperly disposed of, leaching into groundwater and permanently destroying arable land.</p>
                    <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 32px;">Simultaneously, more than <strong>750 million people</strong> remain trapped in energy poverty, lacking access to electricity. They are forced to rely on hazardous kerosene lamps and wood-burning stoves, which cause severe respiratory diseases and drive massive deforestation.</p>
                    <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; font-weight: 500; color: var(--color-primary);">Humanity cannot solve these crises through temporary relief alone. We need permanent, scalable, and technologically advanced interventions.</p>
                </div>
                <div style="position: relative;">
                    <img src="https://images.unsplash.com/photo-1611273426858-450d8e3c9cce?w=800&q=80" alt="Pollution Crisis" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-lg);">
                    <div style="position: absolute; bottom: -30px; left: -30px; background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow-lg); max-width: 300px;">
                        <i class="fa-solid fa-triangle-exclamation" style="color: #e11d48; font-size: 2rem; margin-bottom: 16px;"></i>
                        <h4 style="margin-bottom: 8px;">The Cost of Inaction</h4>
                        <p style="font-size: 0.9rem; color: var(--color-text-light); margin: 0;">Without intervention, soil degradation threatens 95% of the earth's land areas by 2050.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Pillars -->
    <section class="section bg-light">
        <div class="container fade-in">
            <div style="text-align: center; margin-bottom: 80px;">
                <span class="section-label">Our Scientific Approach</span>
                <h2 style="font-size: 2.8rem; max-width: 800px; margin: 0 auto;">Three Pillars of Systemic Change</h2>
                <p style="font-size: 1.2rem; color: var(--color-text-light); max-width: 700px; margin: 20px auto 0;">We deploy proprietary biological and engineering solutions to reverse ecological damage and build resilient local economies.</p>
            </div>
            <div class="grid-3">
                <div class="card" style="padding: 50px 40px;">
                    <div style="width: 90px; height: 90px; background: rgba(0, 208, 132, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 0 32px; transition: transform 0.3s ease;">
                        <i class="fa-solid fa-microscope" style="font-size: 2.5rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 20px;">Environmental Restoration</h3>
                    <p style="color: var(--color-text-light); line-height: 1.8; margin-bottom: 24px;">Deploying advanced bio-technologies, including the RIDES microbiological system, to safely metabolize complex hydrocarbon radicals, permanently processing industrial waste and restoring polluted soil.</p>
                    <a href="projects.html" style="font-weight: 600; color: var(--color-primary); display: inline-flex; align-items: center; gap: 8px;">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="card" style="padding: 50px 40px;">
                    <div style="width: 90px; height: 90px; background: rgba(0, 208, 132, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 0 32px; transition: transform 0.3s ease;">
                        <i class="fa-solid fa-solar-panel" style="font-size: 2.5rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 20px;">Renewable Energy Access</h3>
                    <p style="color: var(--color-text-light); line-height: 1.8; margin-bottom: 24px;">Designing and installing resilient, off-grid solar micro-grids for marginalized communities, electrifying rural schools, mobile medical clinics, and vital community centers.</p>
                    <a href="projects.html" style="font-weight: 600; color: var(--color-primary); display: inline-flex; align-items: center; gap: 8px;">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="card" style="padding: 50px 40px;">
                    <div style="width: 90px; height: 90px; background: rgba(0, 208, 132, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 0 32px; transition: transform 0.3s ease;">
                        <i class="fa-solid fa-seedling" style="font-size: 2.5rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 20px;">Circular Livelihoods</h3>
                    <p style="color: var(--color-text-light); line-height: 1.8; margin-bottom: 24px;">Funding high-yield, closed-loop aquaponics and sustainable agriculture models. We eliminate reliance on chemical fertilizers, ensuring long-term food security and predictable income streams.</p>
                    <a href="projects.html" style="font-weight: 600; color: var(--color-primary); display: inline-flex; align-items: center; gap: 8px;">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <!-- Trusted By / Partners -->
    <section class="section" style="padding: 60px 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
        <div class="container text-center fade-in">
            <h4 style="color: var(--color-text-light); font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px;">Institutional Partners & Global Auditors</h4>
            <div style="display: flex; justify-content: center; align-items: center; gap: 60px; flex-wrap: wrap; opacity: 0.6; transition: opacity 0.3s;">
                <div style="display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.5rem; font-family: var(--font-heading); color: var(--color-primary);"><i class="fa-solid fa-hand-holding-hand" style="font-size: 1.8rem;"></i> USAID</div>
                <div style="display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.5rem; font-family: var(--font-heading); color: var(--color-primary);"><i class="fa-solid fa-leaf" style="font-size: 1.8rem;"></i> GEF</div>
                <div style="display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.5rem; font-family: var(--font-heading); color: var(--color-primary);"><i class="fa-solid fa-globe" style="font-size: 1.8rem;"></i> UNEP</div>
                <div style="display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.5rem; font-family: var(--font-heading); color: var(--color-primary);"><i class="fa-solid fa-building-columns" style="font-size: 1.8rem;"></i> World Bank</div>
                <div style="display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.5rem; font-family: var(--font-heading); color: var(--color-primary);"><i class="fa-solid fa-staff-snake" style="font-size: 1.8rem;"></i> WHO</div>
            </div>
        </div>
    </section>

    <!-- Our Global Footprint -->
    <section class="section bg-light">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: center;">
                <div>
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Global Map" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-lg);">
                </div>
                <div style="padding-left: 40px;">
                    <span class="section-label">Global Footprint</span>
                    <h2 style="font-size: 2.5rem; margin-bottom: 24px;">Operating in the World's Most Critical Zones</h2>
                    <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 30px;">Our technological interventions are specifically targeted at "Zone Zero" areas—regions facing the most extreme environmental degradation and absolute energy poverty.</p>
                    
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: var(--color-primary); font-size: 1.1rem; margin-bottom: 8px;"><i class="fa-solid fa-earth-asia" style="color: var(--color-secondary); margin-right: 8px;"></i> Southeast Asia</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin-bottom: 0;">Primary deployment zone for RIDES biological oil remediation and coastal desalination prototypes.</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: var(--color-primary); font-size: 1.1rem; margin-bottom: 8px;"><i class="fa-solid fa-earth-africa" style="color: var(--color-secondary); margin-right: 8px;"></i> Sub-Saharan Africa</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin-bottom: 0;">Expanding 450kW and 1MW solar microgrids to completely off-grid medical and educational infrastructure.</p>
                    </div>
                    
                    <div>
                        <h4 style="color: var(--color-primary); font-size: 1.1rem; margin-bottom: 8px;"><i class="fa-solid fa-earth-americas" style="color: var(--color-secondary); margin-right: 8px;"></i> South America</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin-bottom: 0;">Developing closed-loop aquaponics cooperatives in arid highlands to combat desertification.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial -->
    <section class="section" style="background: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80') center/cover fixed;">
        <div style="background: rgba(10,37,64,0.9); padding: 120px 0;">
            <div class="container fade-in">
                <div style="max-width: 900px; margin: 0 auto; text-align: center;">
                    <i class="fa-solid fa-quote-left" style="font-size: 4rem; color: var(--color-secondary); opacity: 0.3; margin-bottom: 30px;"></i>
                    <h2 style="color: white; font-size: 2.5rem; line-height: 1.5; font-family: var(--font-body); font-weight: 300; margin-bottom: 40px;">"The installation of the solar array hasn't just given our village light; it has given our children the ability to study at night, and our clinic the power to refrigerate vaccines. SHF didn't just bring technology—they brought a future."</h2>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
                        <div style="width: 60px; height: 60px; border-radius: 50%; background: #ccc; overflow: hidden;">
                            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div style="text-align: left;">
                            <strong style="color: white; font-size: 1.1rem; display: block;">Dr. Amara Singh</strong>
                            <span style="color: var(--color-secondary);">Chief Medical Officer, Rural Health Initiative</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('index.html', head('Home') + header + indexContent + footer);

// About - Vastly expanded
const aboutContent = `
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 200px 0 140px;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Who We Are</span>
            <h1 style="font-size: 4rem;">The Story of SHF</h1>
            <p style="font-size: 1.25rem;">Transforming theoretical science into tangible, life-saving field applications.</p>
        </div>
    </section>
    
    <section class="section">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: start;">
                <div style="position: sticky; top: 120px;">
                    <span class="section-label">Our Philosophy</span>
                    <h2 style="font-size: 2.8rem; margin-bottom: 24px;">Moving Beyond Temporary Relief.</h2>
                    <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 24px;">For decades, international aid has focused on emergency relief—providing food, blankets, and temporary shelter. While these interventions are crucial in times of crisis, they do not solve the root causes of systemic poverty and environmental degradation.</p>
                    <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8;">The Sustainable Humanity Foundation (SHF) was born from a singular, powerful realization: <strong>Only the deployment of advanced scientific and technological solutions can permanently break the cycle of poverty.</strong> By giving communities the tools to process their own waste, generate their own power, and grow their own sustainable crops, we grant them absolute autonomy.</p>
                    
                    <div style="margin-top: 40px; padding-top: 40px; border-top: 1px solid var(--color-border);">
                        <h4 style="margin-bottom: 16px;">Our Core Values</h4>
                        <ul style="list-style: none;">
                            <li style="margin-bottom: 12px; display: flex; gap: 12px; align-items: flex-start;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-top: 6px;"></i> <span style="font-size: 1.05rem; color: var(--color-text);"><strong>Scientific Rigor:</strong> Every project is peer-reviewed and engineered for maximum durability.</span></li>
                            <li style="margin-bottom: 12px; display: flex; gap: 12px; align-items: flex-start;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-top: 6px;"></i> <span style="font-size: 1.05rem; color: var(--color-text);"><strong>Absolute Transparency:</strong> Open-source financial reporting audited to strict international standards.</span></li>
                            <li style="margin-bottom: 12px; display: flex; gap: 12px; align-items: flex-start;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-top: 6px;"></i> <span style="font-size: 1.05rem; color: var(--color-text);"><strong>Community Sovereignty:</strong> We don't just build systems; we train locals to own and maintain them.</span></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" alt="Team in field" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-lg); margin-bottom: 40px;">
                    
                    <div class="card" style="background: var(--color-primary); color: #fff; padding: 48px;">
                        <i class="fa-solid fa-quote-left" style="font-size: 3rem; color: var(--color-secondary); opacity: 0.5; margin-bottom: 20px; display:block;"></i>
                        <blockquote style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 500; margin-bottom: 30px; line-height: 1.5;">
                            "The true measure of a foundation's success is not how much capital it deploys, but whether its interventions become entirely obsolete because the community has achieved total self-reliance."
                        </blockquote>
                        <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px;">
                            <strong style="font-size: 1.1rem;">Prof. Dr. Duong Van Sinh</strong><br>
                            <span style="color: var(--color-secondary); font-size: 0.9rem;">President & Founder, SHF</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in">
            <div style="text-align: center; margin-bottom: 80px;">
                <span class="section-label">Leadership</span>
                <h2 style="font-size: 2.8rem;">Our Global Executive Team</h2>
                <p style="font-size: 1.15rem; color: var(--color-text-light); max-width: 700px; margin: 20px auto 0;">Comprised of leading academics, seasoned field engineers, and transparent financial operators, our leadership ensures that every dollar maximizes real-world impact.</p>
            </div>
            <div class="grid-3">
                <div class="card" style="padding: 0; overflow: hidden; display: block;">
                    <div style="height: 250px; background: #e2e8f0 url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80') center/cover; position: relative;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(to top, rgba(10,37,64,0.9), transparent);"></div>
                        <h4 style="position: absolute; bottom: 16px; left: 24px; color: white; margin: 0; font-size: 1.5rem;">Prof. Dr. Duong Van Sinh</h4>
                    </div>
                    <div style="padding: 30px 24px;">
                        <p style="color: var(--color-secondary); font-weight: 600; margin-bottom: 16px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">President & Founder</p>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.7;">A leading researcher in biotechnology and environmental engineering. Dr. Sinh pioneered the RIDES microbiological process. He holds multiple patents in hazardous waste treatment and has dedicated his life to democratizing clean technology for the developing world.</p>
                    </div>
                </div>
                
                <div class="card" style="padding: 0; overflow: hidden; display: block;">
                    <div style="height: 250px; background: #e2e8f0 url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80') center/cover; position: relative;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(to top, rgba(10,37,64,0.9), transparent);"></div>
                        <h4 style="position: absolute; bottom: 16px; left: 24px; color: white; margin: 0; font-size: 1.5rem;">Assoc. Prof. Elena Rodriguez</h4>
                    </div>
                    <div style="padding: 30px 24px;">
                        <p style="color: var(--color-secondary); font-weight: 600; margin-bottom: 16px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Director of Science & Operations</p>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.7;">Bringing over 20 years of experience in climate resilience and renewable energy grid design. Elena oversees the technical deployment of all solar and aquaponics projects, ensuring they meet rigorous international engineering standards in harsh environments.</p>
                    </div>
                </div>

                <div class="card" style="padding: 0; overflow: hidden; display: block;">
                    <div style="height: 250px; background: #e2e8f0 url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80') center/cover; position: relative;">
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 50%; background: linear-gradient(to top, rgba(10,37,64,0.9), transparent);"></div>
                        <h4 style="position: absolute; bottom: 16px; left: 24px; color: white; margin: 0; font-size: 1.5rem;">Michael Chen, CPA</h4>
                    </div>
                    <div style="padding: 30px 24px;">
                        <p style="color: var(--color-secondary); font-weight: 600; margin-bottom: 16px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Chief Financial Officer</p>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; line-height: 1.7;">A former partner at a Big Four accounting firm, Michael left the corporate world to enforce unprecedented financial transparency in the NGO sector. He guarantees that over 92% of all donations bypass overhead and directly fund field operations.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('about.html', head('About Us') + header + aboutContent + footer);

// Financials - Vastly expanded
const financialsContent = `
    <div class="page-hero fade-in">
        <img src="financials_hero.jpg" alt="Financials" class="page-hero-img">
        <div class="page-hero-content container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Financial Transparency</span>
            <h1 style="font-size: 4rem;">Radical Accountability</h1>
            <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto;">Discover how we engineer our financial structures to minimize overhead and maximize direct impact on the ground.</p>
        </div>
    </div>
    <section class="section">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: start;">
                <div>
                    <span class="section-label">Fund Allocation Strategy</span>
                    <h2 style="font-size: 2.5rem; margin-bottom: 30px;">Where Every Dollar Goes</h2>
                    <p style="color: var(--color-text-light); font-size: 1.15rem; line-height: 1.8; margin-bottom: 40px;">Unlike many traditional organizations that suffer from bloated administrative costs, SHF operates with a lean, technology-driven management core. Our policy mandates that a minimum of <strong>90% of all public contributions</strong> must be deployed directly into field technologies, research grants, and community installations.</p>
                    
                    <div style="background: #fff; padding: 40px; border-radius: var(--radius); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
                        <h4 style="margin-bottom: 24px; font-size: 1.2rem;">2025 Projected Expenditure</h4>
                        
                        <div class="progress-container" style="margin-bottom: 30px;">
                            <div class="progress-label">
                                <span style="font-weight: 600;">Technology Deployment & Field Operations</span> 
                                <span style="color: var(--color-secondary); font-weight: 700; font-size: 1.2rem;">82%</span>
                            </div>
                            <div class="progress-bar" style="height: 12px;"><div class="progress-fill" style="width: 82%;"></div></div>
                            <p style="font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;">Direct costs for solar panels, RIDES biological agents, aquaponics materials, and local labor wages.</p>
                        </div>

                        <div class="progress-container" style="margin-bottom: 30px;">
                            <div class="progress-label">
                                <span style="font-weight: 600;">Scientific Research & Development</span> 
                                <span style="color: var(--color-primary); font-weight: 700; font-size: 1.2rem;">10%</span>
                            </div>
                            <div class="progress-bar" style="height: 12px;"><div class="progress-fill" style="width: 10%; background: var(--color-primary);"></div></div>
                            <p style="font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;">Funding university partnerships, lab testing, and patent registrations for open-source climate tech.</p>
                        </div>
                        
                        <div class="progress-container" style="margin-bottom: 30px;">
                            <div class="progress-label">
                                <span style="font-weight: 600;">Administrative & Legal Compliance</span> 
                                <span style="color: #64748B; font-weight: 700; font-size: 1.2rem;">5%</span>
                            </div>
                            <div class="progress-bar" style="height: 12px;"><div class="progress-fill" style="width: 5%; background: #64748B;"></div></div>
                            <p style="font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;">Essential legal structuring, 501(c)(3) maintenance, and international audit fees.</p>
                        </div>
                        
                        <div class="progress-container">
                            <div class="progress-label">
                                <span style="font-weight: 600;">Fundraising & Marketing</span> 
                                <span style="color: #94A3B8; font-weight: 700; font-size: 1.2rem;">3%</span>
                            </div>
                            <div class="progress-bar" style="height: 12px;"><div class="progress-fill" style="width: 3%; background: #94A3B8;"></div></div>
                            <p style="font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;">Server hosting, minimal advertising, and donor relation software.</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="card bg-navy" style="padding: 50px; border: none;">
                        <div style="display: flex; gap: 24px; margin-bottom: 40px; justify-content: flex-start; align-items: center;">
                            <div style="background: white; padding: 12px; border-radius: 8px; font-weight: 700; font-family: var(--font-heading); color: var(--color-primary);"><i class="fa-solid fa-hand-holding-hand"></i> USAID</div>
                            <div style="background: white; padding: 12px; border-radius: 8px; font-weight: 700; font-family: var(--font-heading); color: var(--color-primary);"><i class="fa-solid fa-leaf"></i> GEF</div>
                        </div>
                        <h3 style="font-size: 2rem; margin-bottom: 20px;">Strict Auditing Standards</h3>
                        <p style="color: rgba(255,255,255,0.8); margin-bottom: 24px; font-size: 1.1rem; line-height: 1.7;">SHF is in the process of finalizing its 501(c)(3) nonprofit registration in the United States. To prepare for global institutional grants, our accounting practices are already modeled after the rigorous compliance frameworks demanded by USAID and the Global Environment Facility (GEF).</p>
                        <p style="color: rgba(255,255,255,0.8); margin-bottom: 40px; font-size: 1.1rem; line-height: 1.7;">Our financial records are subjected to quarterly internal reviews and annual external audits by top-tier independent accounting firms. Additionally, all crypto-asset donations are traceable on the blockchain, providing unprecedented real-time transparency into our operational treasury.</p>
                        
                        <h4 style="color: var(--color-secondary); margin-bottom: 16px; font-size: 1.1rem;">Public Financial Disclosures</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin-bottom: 16px;">
                                <a href="#" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); padding: 16px 24px; border-radius: 8px; color: white; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s;">
                                    <span><i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 12px;"></i> 2024 Audited Financial Statement (Draft)</span>
                                    <i class="fa-solid fa-download"></i>
                                </a>
                            </li>
                            <li style="margin-bottom: 16px;">
                                <a href="#" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); padding: 16px 24px; border-radius: 8px; color: white; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s;">
                                    <span><i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 12px;"></i> IRS Form 990 (Filing Status)</span>
                                    <i class="fa-solid fa-download"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); padding: 16px 24px; border-radius: 8px; color: white; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s;">
                                    <span><i class="fa-solid fa-file-pdf" style="color: #ef4444; margin-right: 12px;"></i> Procurement & Anti-Corruption Policy</span>
                                    <i class="fa-solid fa-download"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
fs.writeFileSync('financials.html', head('Financials') + header + financialsContent + footer);

console.log('Main pages generated with deeply expanded content.');

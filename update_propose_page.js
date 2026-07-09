const fs = require('fs');

let content = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

// Regex to replace the entire proposeContent block
const proposeRegex = /\/\/ Propose Page\s+const proposeContent = `[\s\S]*?`;/m;

const newProposeLogic = `// Propose Page
const proposeContent = \`
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
\`;`;

content = content.replace(proposeRegex, newProposeLogic);

fs.writeFileSync('rebuild_site_modern2.js', content);
console.log('Successfully updated propose page logic.');

const fs = require('fs');

const donateCode = `
// Donate Page
const donateContent = \`
    <section class="page-hero fade-in" style="background-image: url('https://images.unsplash.com/photo-1593113565637-682120362481?w=1600&q=80'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Fund The Future</span>
            <h1 style="font-size: 3.5rem;">Donate to SHF</h1>
            <p style="font-size: 1.25rem;">Accelerate the deployment of open-source climate technology to the world's most vulnerable zones.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: start; gap: 60px;">
                <div>
                    <h2 style="font-size: 2.5rem; margin-bottom: 24px;">How Your Capital Flows</h2>
                    <p style="color: var(--color-text-light); font-size: 1.15rem; line-height: 1.8; margin-bottom: 30px;">
                        At the Sustainable Humanity Foundation, we bypass traditional aid bureaucracies. Because our core technologies are open-source and our operational framework is highly automated, your donation goes directly to raw materials, logistics, and field engineer stipends.
                    </p>
                    
                    <div style="background: #fff; padding: 30px; border-radius: var(--radius); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); margin-bottom: 40px;">
                        <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 16px;"><i class="fa-solid fa-arrow-right-arrow-left" style="color: var(--color-secondary); margin-right: 8px;"></i> Immediate Impact Cycle</h4>
                        <ul style="list-style: none; color: var(--color-text-light); line-height: 1.8;">
                            <li style="margin-bottom: 12px;"><strong>1. Contribution:</strong> You donate via Crypto (zero cross-border fees).</li>
                            <li style="margin-bottom: 12px;"><strong>2. Allocation:</strong> Funds are locked into a smart-contract treasury.</li>
                            <li style="margin-bottom: 12px;"><strong>3. Deployment:</strong> Capital is released directly to regional manufacturing hubs (e.g. for solar microgrids or biological agents).</li>
                            <li><strong>4. Reporting:</strong> We publish real-time open ledgers matching project milestones with expenditure.</li>
                        </ul>
                    </div>
                    
                    <h2 style="font-size: 2rem; margin-bottom: 20px;">Community Impact</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 20px;">
                        A single $5,000 contribution fully funds a 25kW solar microgrid for a remote clinic in Sub-Saharan Africa, powering life-saving refrigeration and communications for 15 years. 
                    </p>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7;">
                        A $1,500 contribution produces enough RIDES bacterial culture to remediate 5,000 liters of crude oil pollution from a coastal mangrove ecosystem, restoring the primary livelihood of local fishing communities.
                    </p>
                </div>
                
                <div>
                    <div class="card" style="background: var(--color-primary); color: white; padding: 50px; text-align: center; box-shadow: var(--shadow-lg); position: sticky; top: 120px;">
                        <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 2rem; color: var(--color-secondary);">
                            <i class="fa-brands fa-ethereum"></i>
                        </div>
                        <h3 style="font-size: 2rem; margin-bottom: 16px;">Crypto Contribution</h3>
                        <p style="color: rgba(255,255,255,0.8); margin-bottom: 30px; font-size: 1.1rem; line-height: 1.6;">We currently accept stablecoin donations via the Polygon network to ensure minimal transaction fees and instant global settlement.</p>
                        
                        <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 24px; display: inline-block;">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0x52b4483e30243a65212adb16d993627534e61d6d" alt="QR Code" style="border-radius: 8px; width: 200px; height: 200px;">
                        </div>
                        
                        <h4 style="margin-bottom: 8px; color: var(--color-secondary);">Network: Polygon (USDT / USDC)</h4>
                        <div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 8px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
                            <code style="font-family: monospace; font-size: 1.1rem; word-break: break-all; color: #e2e8f0;">0x52b4483e30243a65212adb16d993627534e61d6d</code>
                        </div>
                        
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.6); margin: 0;">100% Tax Deductible for US Citizens. For wire transfers or large institutional grants, please <a href="contact.html" style="color: var(--color-secondary);">contact our treasury team</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
\`;
fs.writeFileSync('donate.html', head('Donate') + header + donateContent + footerHtml);
console.log('donate.html generated.');
`;

fs.appendFileSync('rebuild_site_modern2.js', donateCode);
console.log('Appended donate.html logic to rebuild_site_modern2.js');

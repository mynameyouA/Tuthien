const fs = require('fs');

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

// Replace the $500 impact statement with an updated list
const oldImpact = `<div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--color-primary); box-shadow: var(--shadow-sm); margin-bottom: 24px;">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$500 = Empower a Rural Clinic</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Purchases a 2kW solar expansion module, ensuring 24/7 refrigeration for vital vaccines and medicines.</p>
                    </div>`;

const newImpact = `<div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--color-primary); box-shadow: var(--shadow-sm); margin-bottom: 24px;">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$500 = Clean Energy for Classrooms</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Installs an off-grid solar lighting and charging kit for a rural school, enabling evening education and digital connectivity.</p>
                    </div>

                    <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid #f59e0b; box-shadow: var(--shadow-sm); margin-bottom: 24px;">
                        <h4 style="font-size: 1.2rem; margin-bottom: 8px;">$3,000 = Empower a Rural Clinic</h4>
                        <p style="color: var(--color-text-light); font-size: 0.95rem; margin: 0;">Funds a full 2kW solar microgrid (panels, inverter, installation) ensuring 24/7 refrigeration for vital vaccines and medicines.</p>
                    </div>`;

r2 = r2.replace(oldImpact, newImpact);

// Bump cache to v=9
r2 = r2.replace(/v=8/g, 'v=9');
fs.writeFileSync('rebuild_site_modern2.js', r2);

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/v=8/g, 'v=9');
fs.writeFileSync('rebuild_site_modern.js', r1);

console.log('Fixed solar cost estimation');

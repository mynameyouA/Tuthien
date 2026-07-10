const fs = require('fs');

let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

const disclaimerHTML = `
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
                    </div>`;

// I will just replace everything between <div style="background: white; padding: 24px; border-radius: var(--radius); border-left: 4px solid var(--color-secondary);... and the end of that column.
// Since the left column is:
// <h2 style="font-size: 2.2rem; margin-bottom: 24px;">Your Impact Multiplier</h2>
// <p ...>... 92% of your contribution ...</p>
// [IMPACT CARDS HERE]
// </div>

const startMarker = '<h2 style="font-size: 2.2rem; margin-bottom: 24px;">Your Impact Multiplier</h2>';
const impactSectionRegex = /<h2 style="font-size: 2\.2rem; margin-bottom: 24px;">Your Impact Multiplier<\/h2>[\s\S]*?(?=<\/div>\s*<!-- Right: Gateway UI -->)/;

const newImpactSection = `${startMarker}
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                        By utilizing open-source hardware and blockchain transparency, SHF eliminates middle-men. <strong>92% of your contribution</strong> goes directly into field hardware and operations.
                    </p>
${disclaimerHTML}
                `;

r2 = r2.replace(impactSectionRegex, newImpactSection);

// Update cache to v=10
r2 = r2.replace(/v=9/g, 'v=10');
fs.writeFileSync('rebuild_site_modern2.js', r2);

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
r1 = r1.replace(/v=9/g, 'v=10');
fs.writeFileSync('rebuild_site_modern.js', r1);

console.log('Impact copy updated successfully.');

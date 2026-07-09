const fs = require('fs');
let content = fs.readFileSync('rebuild_site_modern.js', 'utf8');

const startIdx = content.indexOf('const financialsContent = `');
const endIdx = content.indexOf("fs.writeFileSync('financials.html'");

const newFinancialsContent = "const financialsContent = `\n" +
    "    <div class=\"page-hero fade-in\">\n" +
    "        <img src=\"financials_hero.jpg\" alt=\"Financials\" class=\"page-hero-img\">\n" +
    "        <div class=\"page-hero-content container\">\n" +
    "            <span class=\"section-label\" style=\"color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;\">Financial Transparency</span>\n" +
    "            <h1 style=\"font-size: 4rem;\">Radical Accountability</h1>\n" +
    "            <p style=\"font-size: 1.25rem; max-width: 700px; margin: 0 auto;\">Discover how we engineer our financial structures to minimize overhead and maximize direct impact on the ground.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <section class=\"section\">\n" +
    "        <div class=\"container fade-in\">\n" +
    "            <div class=\"grid-2\" style=\"align-items: start;\">\n" +
    "                <div>\n" +
    "                    <span class=\"section-label\">Fund Allocation Strategy</span>\n" +
    "                    <h2 style=\"font-size: 2.5rem; margin-bottom: 30px;\">Where Every Dollar Goes</h2>\n" +
    "                    <p style=\"color: var(--color-text-light); font-size: 1.15rem; line-height: 1.8; margin-bottom: 40px;\">Unlike many traditional organizations that suffer from bloated administrative costs, SHF operates with a lean, technology-driven management core. Our policy mandates that a minimum of <strong>90% of all public contributions</strong> must be deployed directly into field technologies, research grants, and community installations.</p>\n" +
    "                    \n" +
    "                    <div style=\"background: #fff; padding: 40px; border-radius: var(--radius); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);\">\n" +
    "                        <h4 style=\"margin-bottom: 24px; font-size: 1.2rem;\">2025 Projected Expenditure</h4>\n" +
    "                        \n" +
    "                        <div class=\"progress-container\" style=\"margin-bottom: 30px;\">\n" +
    "                            <div class=\"progress-label\">\n" +
    "                                <span style=\"font-weight: 600;\">Technology Deployment & Field Operations</span> \n" +
    "                                <span style=\"color: var(--color-secondary); font-weight: 700; font-size: 1.2rem;\">82%</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"progress-bar\" style=\"height: 12px;\"><div class=\"progress-fill\" style=\"width: 82%;\"></div></div>\n" +
    "                            <p style=\"font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;\">Direct costs for solar panels, RIDES biological agents, aquaponics materials, and local labor wages.</p>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"progress-container\" style=\"margin-bottom: 30px;\">\n" +
    "                            <div class=\"progress-label\">\n" +
    "                                <span style=\"font-weight: 600;\">Scientific Research & Development</span> \n" +
    "                                <span style=\"color: var(--color-primary); font-weight: 700; font-size: 1.2rem;\">10%</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"progress-bar\" style=\"height: 12px;\"><div class=\"progress-fill\" style=\"width: 10%; background: var(--color-primary);\"></div></div>\n" +
    "                            <p style=\"font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;\">Funding university partnerships, lab testing, and patent registrations for open-source climate tech.</p>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"progress-container\" style=\"margin-bottom: 30px;\">\n" +
    "                            <div class=\"progress-label\">\n" +
    "                                <span style=\"font-weight: 600;\">Administrative & Legal Compliance</span> \n" +
    "                                <span style=\"color: #64748B; font-weight: 700; font-size: 1.2rem;\">5%</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"progress-bar\" style=\"height: 12px;\"><div class=\"progress-fill\" style=\"width: 5%; background: #64748B;\"></div></div>\n" +
    "                            <p style=\"font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;\">Essential legal structuring, 501(c)(3) maintenance, and international audit fees.</p>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                        <div class=\"progress-container\">\n" +
    "                            <div class=\"progress-label\">\n" +
    "                                <span style=\"font-weight: 600;\">Fundraising & Marketing</span> \n" +
    "                                <span style=\"color: #94A3B8; font-weight: 700; font-size: 1.2rem;\">3%</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"progress-bar\" style=\"height: 12px;\"><div class=\"progress-fill\" style=\"width: 3%; background: #94A3B8;\"></div></div>\n" +
    "                            <p style=\"font-size: 0.85rem; color: var(--color-text-light); margin-top: 8px;\">Server hosting, minimal advertising, and donor relation software.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div>\n" +
    "                    <div class=\"card bg-navy\" style=\"padding: 50px; border: none;\">\n" +
    "                        <div style=\"display: flex; gap: 24px; margin-bottom: 40px; justify-content: flex-start; align-items: center;\">\n" +
    "                            <div style=\"background: white; padding: 12px; border-radius: 8px; font-weight: 700; font-family: var(--font-heading); color: var(--color-primary);\"><i class=\"fa-solid fa-hand-holding-hand\"></i> USAID</div>\n" +
    "                            <div style=\"background: white; padding: 12px; border-radius: 8px; font-weight: 700; font-family: var(--font-heading); color: var(--color-primary);\"><i class=\"fa-solid fa-leaf\"></i> GEF</div>\n" +
    "                        </div>\n" +
    "                        <h3 style=\"font-size: 2rem; margin-bottom: 20px;\">Strict Auditing Standards</h3>\n" +
    "                        <p style=\"color: rgba(255,255,255,0.8); margin-bottom: 24px; font-size: 1.1rem; line-height: 1.7;\">SHF is in the process of finalizing its 501(c)(3) nonprofit registration in the United States. To prepare for global institutional grants, our accounting practices are already modeled after the rigorous compliance frameworks demanded by USAID and the Global Environment Facility (GEF).</p>\n" +
    "                        <p style=\"color: rgba(255,255,255,0.8); margin-bottom: 40px; font-size: 1.1rem; line-height: 1.7;\">Our financial records are subjected to quarterly internal reviews and annual external audits by top-tier independent accounting firms. Additionally, all crypto-asset donations are traceable on the blockchain, providing unprecedented real-time transparency into our operational treasury.</p>\n" +
    "                        \n" +
    "                        <h4 style=\"color: var(--color-secondary); margin-bottom: 16px; font-size: 1.1rem;\">Public Financial Disclosures</h4>\n" +
    "                        <ul style=\"list-style: none; padding: 0;\">\n" +
    "                            <li style=\"margin-bottom: 16px;\">\n" +
    "                                <a href=\"#\" style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); padding: 16px 24px; border-radius: 8px; color: white; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s;\">\n" +
    "                                    <span><i class=\"fa-solid fa-file-pdf\" style=\"color: #ef4444; margin-right: 12px;\"></i> 2024 Audited Financial Statement (Draft)</span>\n" +
    "                                    <i class=\"fa-solid fa-download\"></i>\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li style=\"margin-bottom: 16px;\">\n" +
    "                                <a href=\"#\" style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); padding: 16px 24px; border-radius: 8px; color: white; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s;\">\n" +
    "                                    <span><i class=\"fa-solid fa-file-pdf\" style=\"color: #ef4444; margin-right: 12px;\"></i> IRS Form 990 (Filing Status)</span>\n" +
    "                                    <i class=\"fa-solid fa-download\"></i>\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"#\" style=\"display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.1); padding: 16px 24px; border-radius: 8px; color: white; border: 1px solid rgba(255,255,255,0.2); transition: background 0.3s;\">\n" +
    "                                    <span><i class=\"fa-solid fa-file-pdf\" style=\"color: #ef4444; margin-right: 12px;\"></i> Procurement & Anti-Corruption Policy</span>\n" +
    "                                    <i class=\"fa-solid fa-download\"></i>\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "`;\n";

content = content.substring(0, startIdx) + newFinancialsContent + content.substring(endIdx);
fs.writeFileSync('rebuild_site_modern.js', content);

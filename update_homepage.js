const fs = require('fs');

// 1. FIX CSS
let css = fs.readFileSync('styles.css', 'utf8');
css = css.replace('.grid-2, .grid-4 {', '.grid-2, .grid-3, .grid-4 {');
if(!css.includes('@media (max-width: 768px)')) {
    css += `\n@media (max-width: 768px) {
    .amount-grid { grid-template-columns: 1fr; }
    .card-elements { grid-template-columns: 1fr; }
    .main-nav ul { gap: 10px; padding: 10px 0; }
}\n`;
}
fs.writeFileSync('styles.css', css);

// 2. UPDATE INDEX HTML
let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');

const newCorePillars = `<!-- Core Pillars -->
    <section class="section bg-light">
        <div class="container fade-in">
            <div style="text-align: center; margin-bottom: 80px;">
                <span class="section-label" style="background: rgba(0,208,132,0.1); padding: 4px 12px; border-radius: 4px;">Strategic Roadmap (2026 - 2030)</span>
                <h2 style="font-size: 2.8rem; max-width: 800px; margin: 0 auto;">Three Projects to Change Destinies</h2>
                <p style="font-size: 1.2rem; color: var(--color-text-light); max-width: 800px; margin: 20px auto 0;">Powered by <strong>100% royalty-free patents</strong> donated by Founder Prof. Dr. Duong Van Sinh, SHF directs all funding directly to field operations without intellectual property costs.</p>
            </div>
            <div class="grid-3">
                <div class="card" style="padding: 50px 40px; border-top: 4px solid var(--color-primary);">
                    <div style="width: 80px; height: 80px; background: rgba(0, 208, 132, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 0 24px;">
                        <i class="fa-solid fa-industry" style="font-size: 2.2rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 16px; min-height: 56px;">Tan Son Nhat Waste Oil Plant</h3>
                    <p style="color: var(--color-text-light); line-height: 1.7; margin-bottom: 24px; font-size: 0.95rem;">Deploying continuous vacuum distillation with alternating dual reactors to safely treat hazardous aviation waste oil, protecting the groundwater for millions of urban residents.</p>
                </div>
                <div class="card" style="padding: 50px 40px; border-top: 4px solid var(--color-secondary);">
                    <div style="width: 80px; height: 80px; background: rgba(0, 208, 132, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 0 24px;">
                        <i class="fa-solid fa-leaf" style="font-size: 2.2rem; color: var(--color-secondary);"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 16px; min-height: 56px;">Net-Zero Aquaponics (30-50ha)</h3>
                    <p style="color: var(--color-text-light); line-height: 1.7; margin-bottom: 24px; font-size: 0.95rem;">Building a large-scale agricultural cooperative using SINH-AQ natural microbes and self-generated biomass. Provides clean land and sustainable income for impoverished farmers with zero emissions.</p>
                </div>
                <div class="card" style="padding: 50px 40px; border-top: 4px solid #f59e0b;">
                    <div style="width: 80px; height: 80px; background: rgba(245, 158, 11, 0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 0 24px;">
                        <i class="fa-solid fa-bolt" style="font-size: 2.2rem; color: #f59e0b;"></i>
                    </div>
                    <h3 style="font-size: 1.5rem; margin-bottom: 16px; min-height: 56px;">Smart Flywheel Microgrids</h3>
                    <p style="color: var(--color-text-light); line-height: 1.7; margin-bottom: 24px; font-size: 0.95rem;">Manufacturing chemical-free, lead-free kinetic energy storage systems (flywheels). Donated freely to clinics and schools in flood zones to guarantee 24/7 life-saving emergency power.</p>
                </div>
            </div>
        </div>
    </section>`;

const oldCorePillarsRegex = /<!-- Core Pillars -->[\s\S]*?<!-- Trusted By \/ Partners -->/;
r1 = r1.replace(oldCorePillarsRegex, newCorePillars + '\n\n    <!-- Trusted By / Partners -->');

// Also update the description in Hero to mention royalty-free
r1 = r1.replace('We bridge the gap between high-tech scientific innovations and the most vulnerable communities, reversing environmental damage while eradicating energy poverty.', 'Operating as a 501(c)(3) in Wyoming, we transform royalty-free scientific patents into lifesaving infrastructure—reversing environmental damage while eradicating energy poverty.');

r1 = r1.replace(/v=12/g, 'v=13');
fs.writeFileSync('rebuild_site_modern.js', r1);

// Update r2 as well for cache bump
let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');
r2 = r2.replace(/v=12/g, 'v=13');
fs.writeFileSync('rebuild_site_modern2.js', r2);

console.log('Homepage and CSS updated.');

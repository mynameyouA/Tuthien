const fs = require('fs');

// 1. ADD DONATION SECTION TO HOMEPAGE (rebuild_site_modern.js)
let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');

const quickDonateHtml = `
    <!-- Quick Donate Section -->
    <section class="section" style="background: var(--color-bg-alt); text-align: center; padding: 80px 20px;">
        <div class="container fade-in">
            <span class="section-label" style="background: rgba(245, 158, 11, 0.1); color: #f59e0b; padding: 6px 16px; border-radius: 20px;">Make a Difference</span>
            <h2 style="font-size: 2.5rem; margin: 20px 0 24px;">Fuel the Next Breakthrough</h2>
            <p style="color: var(--color-text-light); max-width: 600px; margin: 0 auto 40px; font-size: 1.1rem;">Every contribution goes 100% to field operations and hardware. Join us in ending energy poverty.</p>
            <div style="background: white; border-radius: 20px; box-shadow: var(--shadow-md); padding: 40px; max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 16px;">
                    <a href="donate.html" class="btn btn-outline" style="border-radius: 12px; border-color: #e2e8f0; color: var(--color-text); font-weight: bold; font-size: 1.2rem; padding: 16px;">$50</a>
                    <a href="donate.html" class="btn btn-outline" style="border-radius: 12px; border-color: #e2e8f0; color: var(--color-text); font-weight: bold; font-size: 1.2rem; padding: 16px;">$500</a>
                    <a href="donate.html" class="btn btn-outline" style="border-radius: 12px; border-color: var(--color-primary); color: var(--color-primary); font-weight: bold; font-size: 1.2rem; background: rgba(0,208,132,0.1); padding: 16px;">$5,000+</a>
                    <a href="donate.html" class="btn btn-outline" style="border-radius: 12px; border-color: #e2e8f0; color: var(--color-text); font-weight: bold; font-size: 1.2rem; padding: 16px;">Other</a>
                </div>
                <a href="donate.html" class="btn btn-primary btn-donate" style="padding: 16px; font-size: 1.2rem; border-radius: 12px; display: block;">Proceed to Secure Donation</a>
                <p style="font-size: 0.85rem; color: #718096; margin-top: 4px;"><i class="fa-solid fa-lock" style="margin-right: 4px;"></i> Secure payment processed by Stripe / PayPal</p>
            </div>
        </div>
    </section>
`;

// Insert it right before the Newsletter section in homepage
const newsletterRegex = /<!-- Newsletter Section -->/;
if (!r1.includes('Fuel the Next Breakthrough')) {
    r1 = r1.replace(newsletterRegex, quickDonateHtml + '\n\n    <!-- Newsletter Section -->');
}
r1 = r1.replace(/v=16/g, 'v=17');
fs.writeFileSync('rebuild_site_modern.js', r1);


// 2. ADD SPONSORSHIP PACKAGES TO DONATE PAGE (rebuild_site_modern2.js)
let r2 = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

const sponsorshipHtml = `
    <!-- Sponsorship Packages Infographic -->
    <section class="section" style="background: var(--color-bg-alt); margin-top: 60px; padding: 80px 20px;">
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

if (!r2.includes('Sponsorship Packages')) {
    r2 = r2.replace('<!-- End Donate Content -->', sponsorshipHtml + '\n\n    <!-- End Donate Content -->');
}
r2 = r2.replace(/v=16/g, 'v=17');
fs.writeFileSync('rebuild_site_modern2.js', r2);

console.log('Donation UI added.');

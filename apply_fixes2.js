const fs = require('fs');

// 1. Fix desktop menu by removing inline width: 100%
['rebuild_site_modern.js', 'rebuild_site_modern2.js', 'rebuild_site.js', 'rebuild_site2.js'].forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(
            '<div class="logo-and-toggle" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">',
            '<div class="logo-and-toggle" style="display: flex; justify-content: space-between; align-items: center;">'
        );
        content = content.replace(/v=17/g, 'v=18'); // bump version
        fs.writeFileSync(file, content);
    }
});

// 2. Add Quick Donate section to index.html properly
let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');
if (!r1.includes('Fuel the Next Breakthrough')) {
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
    r1 = r1.replace('<!-- Testimonials Carousel -->', quickDonateHtml + '\n\n    <!-- Testimonials Carousel -->');
    fs.writeFileSync('rebuild_site_modern.js', r1);
}
console.log('Fixed missing donate on homepage and broken desktop menu.');

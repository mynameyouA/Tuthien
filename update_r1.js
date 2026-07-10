const fs = require('fs');

let r1 = fs.readFileSync('rebuild_site_modern.js', 'utf8');

// 1. Update Header (btn-donate)
r1 = r1.replace(
    /<a href="donate\.html" class="btn btn-primary">Donate Now<\/a>/,
    '<a href="donate.html" class="btn btn-primary btn-donate">Donate Now</a>'
);

// 2. Update Footer (Newsletter text & Social Icons)
r1 = r1.replace(
    /<p style="font-size: 0\.9rem; margin-bottom: 16px;">Subscribe to receive our latest impact reports\.<\/p>/,
    '<p style="font-size: 0.9rem; margin-bottom: 16px;">Subscribe to receive our quarterly impact and financial reports.</p>'
);

if (!r1.includes('social-icons')) {
    r1 = r1.replace(
        /<h4>Contact Us<\/h4>\s*<ul[\s\S]*?<\/ul>/,
        match => match + `\n                    <div class="social-icons">\n                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>\n                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>\n                        <a href="#"><i class="fa-brands fa-instagram"></i></a>\n                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>\n                    </div>`
    );
}

// 3. Update Index (Financial Snapshot, Featured Projects, Testimonials)
if (!r1.includes('Financial Snapshot')) {
    const financialSnapshot = `
    <!-- Financial Snapshot Mini -->
    <section class="section" style="padding: 60px 0; background: var(--color-bg);">
        <div class="container fade-in">
            <div class="grid-2" style="align-items: center;">
                <div>
                    <span class="section-label">Financial Transparency</span>
                    <h2 style="font-size: 2.2rem; margin-bottom: 20px;">92% Direct Impact</h2>
                    <p style="font-size: 1.1rem; color: var(--color-text-light); margin-bottom: 30px;">We engineer our financial structures to minimize overhead. Every dollar is tracked, audited, and optimized for real-world impact.</p>
                    <a href="financials.html" class="btn btn-outline">View Audit Reports</a>
                </div>
                <div style="background: white; padding: 30px; border-radius: var(--radius); box-shadow: var(--shadow-sm);">
                    <div style="margin-bottom: 20px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-weight: 600; font-size: 0.9rem;">Field Operations (82%)</span>
                        </div>
                        <div style="background: #f1f5f9; height: 8px; border-radius: 4px;"><div style="background: var(--color-secondary); width: 82%; height: 100%; border-radius: 4px;"></div></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-weight: 600; font-size: 0.9rem;">R&D (10%)</span>
                        </div>
                        <div style="background: #f1f5f9; height: 8px; border-radius: 4px;"><div style="background: var(--color-primary); width: 10%; height: 100%; border-radius: 4px;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="font-weight: 600; font-size: 0.9rem;">Admin & Fundraising (8%)</span>
                        </div>
                        <div style="background: #f1f5f9; height: 8px; border-radius: 4px;"><div style="background: #94a3b8; width: 8%; height: 100%; border-radius: 4px;"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
    // Insert after "The Global Crisis" section
    r1 = r1.replace(/(<!-- Core Pillars -->)/, financialSnapshot + '\n    $1');
}

// 4. Update index.html Testimonial
if (!r1.includes('testimonial-carousel')) {
    r1 = r1.replace(
        /<!-- Testimonial -->[\s\S]*?<\/section>/,
        `<!-- Testimonials Carousel -->
    <section class="section" style="background: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80') center/cover fixed;">
        <div style="background: rgba(10,37,64,0.9); padding: 100px 0;">
            <div class="container fade-in">
                <div class="testimonial-carousel">
                    <!-- Slide 1 -->
                    <div class="testimonial-slide">
                        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                            <i class="fa-solid fa-quote-left" style="font-size: 3rem; color: var(--color-secondary); opacity: 0.5; margin-bottom: 24px;"></i>
                            <h3 style="color: white; font-size: 1.8rem; line-height: 1.6; font-weight: 300; margin-bottom: 30px;">"The installation of the solar array hasn't just given our village light; it has given our clinic the power to refrigerate vaccines. SHF didn't just bring technology—they brought a future."</h3>
                            <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden;"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80" style="width:100%;height:100%;object-fit:cover;"></div>
                                <div style="text-align: left;"><strong style="color: white; display: block;">Dr. Amara Singh</strong><span style="color: var(--color-secondary); font-size: 0.9rem;">Chief Medical Officer</span></div>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 2 -->
                    <div class="testimonial-slide">
                        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                            <i class="fa-solid fa-quote-left" style="font-size: 3rem; color: var(--color-secondary); opacity: 0.5; margin-bottom: 24px;"></i>
                            <h3 style="color: white; font-size: 1.8rem; line-height: 1.6; font-weight: 300; margin-bottom: 30px;">"We've seen many NGOs come and go, but SHF's approach is different. By training our local engineers to maintain the systems, they ensure we are independent, not reliant."</h3>
                            <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden;"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" style="width:100%;height:100%;object-fit:cover;"></div>
                                <div style="text-align: left;"><strong style="color: white; display: block;">Marcus Omondi</strong><span style="color: var(--color-secondary); font-size: 0.9rem;">Community Leader</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                    <span style="display:inline-block;width:10px;height:10px;background:var(--color-secondary);border-radius:50%;margin:0 5px;"></span>
                    <span style="display:inline-block;width:10px;height:10px;background:rgba(255,255,255,0.3);border-radius:50%;margin:0 5px;"></span>
                </div>
            </div>
        </div>
    </section>`
    );
}

// 5. Update cache version v=6 -> v=7
r1 = r1.replace(/v=6/g, 'v=7');

fs.writeFileSync('rebuild_site_modern.js', r1);
console.log('rebuild_site_modern.js updated');

const fs = require('fs');

let file = fs.readFileSync('rebuild_site_modern.js', 'utf8');

const founderAndCounterHTML = `
    <!-- Founder Message -->
    <section class="section">
        <div class="container fade-in">
            <div class="card" style="padding: 0; overflow: hidden; border: none; box-shadow: var(--shadow-lg);">
                <div class="grid-2" style="gap: 0; align-items: stretch;">
                    <div style="background-image: url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80'); background-size: cover; background-position: center; min-height: 400px; position: relative;">
                        <!-- Placeholder for founder image -->
                        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(10,37,64,0.9), transparent); padding: 40px 30px 20px;">
                            <h3 style="color: white; margin: 0; font-size: 1.5rem;">Prof. Dr. Duong Van Sinh</h3>
                            <p style="color: var(--color-secondary); margin: 0; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Founder & Chief Scientist</p>
                        </div>
                    </div>
                    <div style="padding: 60px 50px; background: white; display: flex; flex-direction: column; justify-content: center;">
                        <i class="fa-solid fa-quote-left" style="font-size: 3rem; color: rgba(30,58,138,0.1); margin-bottom: 20px;"></i>
                        <h3 style="font-size: 2rem; margin-bottom: 24px; color: var(--color-primary); line-height: 1.3;">"Climate technology should not be a luxury restricted by patents. It must be a global public good."</h3>
                        <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px;">I have spent my life developing solutions for hazardous waste and clean energy. By donating these patents 100% royalty-free to the Sustainable Humanity Foundation, I want to ensure that every single dollar donated goes directly into building plants and saving lives, not paying intellectual property fees.</p>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_placeholder.svg" alt="Signature" style="height: 60px; opacity: 0.6; filter: grayscale(100%);" loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Impact Counters -->
    <section class="section" style="padding: 60px 0; background: var(--color-primary); color: white;">
        <div class="container fade-in">
            <div class="grid-4 text-center" id="counter-section">
                <div>
                    <div style="font-size: 3.5rem; font-weight: 700; margin-bottom: 10px;">$<span class="counter" data-target="0">500000</span></div>
                    <div style="font-size: 1.1rem; opacity: 0.9;">Patent Fees Charged</div>
                </div>
                <div>
                    <div style="font-size: 3.5rem; font-weight: 700; margin-bottom: 10px;"><span class="counter" data-target="100">0</span>%</div>
                    <div style="font-size: 1.1rem; opacity: 0.9;">To Field Operations</div>
                </div>
                <div>
                    <div style="font-size: 3.5rem; font-weight: 700; margin-bottom: 10px;"><span class="counter" data-target="3">0</span></div>
                    <div style="font-size: 1.1rem; opacity: 0.9;">Mega-Projects</div>
                </div>
                <div>
                    <div style="font-size: 3.5rem; font-weight: 700; margin-bottom: 10px;"><span class="counter" data-target="2026">0</span></div>
                    <div style="font-size: 1.1rem; opacity: 0.9;">Target Launch Year</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Pillars -->`;

file = file.replace('    <!-- Core Pillars -->', founderAndCounterHTML);

// 3. Compliance Standards
const oldPartners = `    <!-- Trusted By / Partners -->
    <section class="section" style="padding: 60px 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
        <div class="container text-center fade-in">
            <h4 style="color: var(--color-text-light); font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px;">Institutional Partners & Global Auditors</h4>`;

const newPartners = `    <!-- Compliance Standards -->
    <section class="section" style="padding: 60px 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
        <div class="container text-center fade-in">
            <h4 style="color: var(--color-primary); font-size: 1.1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Aligned with Global Compliance Standards</h4>
            <p style="color: var(--color-text-light); font-size: 0.95rem; max-width: 600px; margin: 0 auto 30px;">Our internal auditing, reporting, and operational frameworks are strictly modeled after the requirements of the following institutions to prepare for future international grants.</p>`;

file = file.replace(oldPartners, newPartners);

// 4. CTAs for Core Pillars
file = file.replace(
    '</p>\n                </div>\n                <div class="card" style="padding: 50px 40px; border-top: 4px solid var(--color-secondary);">',
    '</p>\n                    <div style="margin-top: 24px;"><a href="projects.html" class="btn btn-outline" style="width: 100%; border-color: var(--color-primary); color: var(--color-primary);">Discover Project</a></div>\n                </div>\n                <div class="card" style="padding: 50px 40px; border-top: 4px solid var(--color-secondary); display: flex; flex-direction: column;">'
);
// Make the first card display flex column
file = file.replace(
    '<div class="card" style="padding: 50px 40px; border-top: 4px solid var(--color-primary);">',
    '<div class="card" style="padding: 50px 40px; border-top: 4px solid var(--color-primary); display: flex; flex-direction: column;">'
);
// Replace other p tags
file = file.replace(
    '</p>\n                </div>\n                <div class="card" style="padding: 50px 40px; border-top: 4px solid #f59e0b;">',
    '</p>\n                    <div style="margin-top: auto; padding-top: 24px;"><a href="projects.html" class="btn btn-outline" style="width: 100%; border-color: var(--color-secondary); color: var(--color-secondary);">Discover Project</a></div>\n                </div>\n                <div class="card" style="padding: 50px 40px; border-top: 4px solid #f59e0b; display: flex; flex-direction: column;">'
);
// Add flex-grow: 1 to the last paragraph
file = file.replace(
    'emergency power.</p>\n                </div>\n            </div>',
    'emergency power.</p>\n                    <div style="margin-top: auto; padding-top: 24px;"><a href="projects.html" class="btn btn-outline" style="width: 100%; border-color: #f59e0b; color: #f59e0b;">Discover Project</a></div>\n                </div>\n            </div>'
);

// Add margin-top: auto to the first paragraph's next sibling (which is the button container)
file = file.replace(
    '<div style="margin-top: 24px;"><a href="projects.html"',
    '<div style="margin-top: auto; padding-top: 24px;"><a href="projects.html"'
);

// Bump version
file = file.replace(/v=25/g, 'v=26');

fs.writeFileSync('rebuild_site_modern.js', file);
console.log('Modified rebuild_site_modern.js');

// Add JS for counters
let script = fs.readFileSync('script.js', 'utf8');
if (!script.includes('.counter')) {
    const counterScript = `
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // lower is slower for large numbers, but we'll use a fixed duration approach

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const start = +counter.innerText;
                const duration = 2000; // 2 seconds
                const startTime = performance.now();

                const updateCounter = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    // Ease out cubic
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    
                    let currentNum = start + (target - start) * easeOut;
                    
                    if (progress < 1) {
                        counter.innerText = Math.ceil(currentNum);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
`;
    // Insert into DOMContentLoaded
    script = script.replace(/document.addEventListener\('DOMContentLoaded', \(\) => \{/, "document.addEventListener('DOMContentLoaded', () => {" + counterScript);
    fs.writeFileSync('script.js', script);
    console.log('Added counter animation to script.js');
}

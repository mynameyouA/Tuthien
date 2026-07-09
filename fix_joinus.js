const fs = require('fs');

let content = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

// Replace the button onclicks with hrefs
content = content.replace(/<button onclick="openGenericModal\('volunteerModal'\)" class="btn btn-navy".*?>Apply for Field Deployment<\/button>/g, '<a href="apply.html" class="btn btn-navy" style="font-size: 1.1rem; padding: 16px 40px;">Apply for Field Deployment</a>');

content = content.replace(/<button onclick="openGenericModal\('partnerModal'\)" class="btn btn-outline".*?>Propose a Partnership<\/button>/g, '<a href="propose.html" class="btn btn-outline" style="font-size: 1.1rem; padding: 16px 40px;">Propose a Partnership</a>');

// Remove the modals from join-us.html
content = content.replace(/<!-- Volunteer Modal -->[\s\S]*?<!-- Partner Modal -->[\s\S]*?<footer/m, '<footer');

// Create new page apply.html generator
const applyPageLogic = `
// Apply Page
const applyContent = \`
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Field Volunteers</span>
            <h1 style="font-size: 3.5rem;">Volunteer Application</h1>
            <p style="font-size: 1.25rem;">Join our elite field teams to deploy climate tech worldwide.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in" style="max-width: 800px;">
            <div class="card" style="padding: 50px;">
                <h3 style="font-size: 2rem; margin-bottom: 10px;">Technical Profile</h3>
                <p style="color: var(--color-text-light); margin-bottom: 30px;">Fill out your technical profile below. Our HR team will contact you if your skills match an upcoming project.</p>
                <form action="https://formsubmit.co/contact@sh.fund" method="POST">
                    <input type="hidden" name="_subject" value="New Volunteer Application">
                    <div class="grid-2" style="gap: 16px; margin-bottom: 16px;">
                        <input type="text" name="name" class="form-control" placeholder="Full Name" style="margin: 0;" required>
                        <input type="email" name="email" class="form-control" placeholder="Email Address" style="margin: 0;" required>
                    </div>
                    <div class="grid-2" style="gap: 16px; margin-bottom: 16px;">
                        <input type="text" name="profession" class="form-control" placeholder="Primary Profession / Degree" style="margin: 0;" required>
                        <input type="text" name="country" class="form-control" placeholder="Country of Residence" style="margin: 0;" required>
                    </div>
                    <textarea name="experience" class="form-control" rows="5" placeholder="Briefly describe your technical or field experience..." required style="margin-bottom: 16px;"></textarea>
                    <textarea name="motivation" class="form-control" rows="5" placeholder="Why do you want to join SHF deployments?" required style="margin-bottom: 24px;"></textarea>
                    <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 16px;">Submit Application</button>
                </form>
            </div>
        </div>
    </section>
\`;
fs.writeFileSync('apply.html', head('Apply') + header + applyContent + footerHtml);
console.log('apply.html generated.');
`;

// Create new page propose.html generator
const proposePageLogic = `
// Propose Page
const proposeContent = \`
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Corporate Partners</span>
            <h1 style="font-size: 3.5rem;">Institutional Partnership</h1>
            <p style="font-size: 1.25rem;">Collaborate with us to fund projects or donate advanced hardware.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in" style="max-width: 800px;">
            <div class="card" style="padding: 50px;">
                <h3 style="font-size: 2rem; margin-bottom: 10px;">Partnership Proposal</h3>
                <p style="color: var(--color-text-light); margin-bottom: 30px;">Submit a high-level proposal. Our Director of Operations will review it.</p>
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
                    <textarea name="message" class="form-control" rows="6" placeholder="Please outline the goals of the proposed partnership..." required style="margin-bottom: 24px;"></textarea>
                    <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 16px;">Submit Proposal</button>
                </form>
            </div>
        </div>
    </section>
\`;
fs.writeFileSync('propose.html', head('Propose Partnership') + header + proposeContent + footerHtml);
console.log('propose.html generated.');
`;

if (!content.includes('apply.html generated')) {
    content += applyPageLogic + proposePageLogic;
}

fs.writeFileSync('rebuild_site_modern2.js', content);
console.log('Successfully updated rebuild_site_modern2.js');

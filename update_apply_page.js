const fs = require('fs');

let content = fs.readFileSync('rebuild_site_modern2.js', 'utf8');

// Regex to replace the entire applyContent block
const applyRegex = /\/\/ Apply Page\s+const applyContent = `[\s\S]*?`;/m;

const newApplyLogic = `// Apply Page
const applyContent = \`
    <section class="page-hero fade-in" style="background-image: url('join_us_hero.jpg'); padding: 120px 0;">
        <div class="container">
            <span class="section-label" style="color: #fff; background: rgba(0,0,0,0.5); padding: 6px 16px; border-radius: 20px; letter-spacing: 2px;">Field Deployment Program</span>
            <h1 style="font-size: 3.5rem;">Join Our Field Missions</h1>
            <p style="font-size: 1.25rem;">Bring your technical expertise to the frontlines of climate adaptation.</p>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container fade-in">
            <div class="grid-2" style="gap: 60px; align-items: start;">
                <!-- Left Column: Explanation -->
                <div>
                    <h2 style="font-size: 2.2rem; margin-bottom: 24px;">The Reality of Field Operations</h2>
                    <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin-bottom: 24px;">
                        Deploying breakthrough technology requires more than just lab research. It requires courageous engineers, logisticians, and community organizers willing to work in off-grid, rugged environments. By joining our field deployment program, you become the bridge between high-tech innovation and real-world survival.
                    </p>
                    
                    <img src="volunteer_field_work.jpg" alt="Engineers working in the field" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-sm); margin-bottom: 30px; height: 300px; object-fit: cover;">
                    
                    <div style="background: #fff; padding: 30px; border-radius: var(--radius); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
                        <h4 style="color: var(--color-primary); font-size: 1.2rem; margin-bottom: 16px;"><i class="fa-solid fa-clipboard-check" style="color: var(--color-secondary); margin-right: 8px;"></i> What to Expect</h4>
                        <ul style="list-style: none; color: var(--color-text-light); line-height: 1.8;">
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Hands-on Impact:</strong> Direct installation of solar grids, water purifiers, or ecological sensors.</li>
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Cross-Cultural Collaboration:</strong> Training local technicians to maintain the equipment.</li>
                            <li style="margin-bottom: 12px;"><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Logistical Support:</strong> SHF provides housing, food, and rigorous security protocols.</li>
                            <li><i class="fa-solid fa-check" style="color: var(--color-secondary); margin-right: 8px;"></i> <strong>Certification:</strong> Earn field engineering credentials recognized by UN agencies.</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Right Column: The Form -->
                <div>
                    <div class="card" style="padding: 50px; position: sticky; top: 120px;">
                        <h3 style="font-size: 2rem; margin-bottom: 10px;">Technical Profile Application</h3>
                        <p style="color: var(--color-text-light); margin-bottom: 30px;">Submit your credentials. Due to high volume, our operations team only contacts candidates whose skills match upcoming missions.</p>
                        
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
                            <textarea name="experience" class="form-control" rows="4" placeholder="Briefly describe your technical or field experience..." required style="margin-bottom: 16px;"></textarea>
                            <textarea name="motivation" class="form-control" rows="4" placeholder="Why do you want to join SHF deployments? What unique value do you bring?" required style="margin-bottom: 24px;"></textarea>
                            <button type="submit" class="btn btn-navy" style="width: 100%; font-size: 1.1rem; padding: 16px;">Submit Application to HQ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
\`;`;

content = content.replace(applyRegex, newApplyLogic);

fs.writeFileSync('rebuild_site_modern2.js', content);
console.log('Successfully updated apply page logic.');

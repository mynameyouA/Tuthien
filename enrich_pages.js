const fs = require('fs');

const financialsHero = `
    <!-- Hero Section -->
    <section class="page-hero" style="background: linear-gradient(rgba(10, 37, 64, 0.8), rgba(10, 37, 64, 0.8)), url('financials_hero.jpg') center/cover; padding: 150px 0 100px; text-align: center; color: white;">
        <div class="container fade-in">
            <span class="text-gold mb-3" style="display: block; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">Minh Bạch Tài Chính</span>
            <h1 style="font-size: 3.5rem; margin-bottom: 20px;">Sự Minh Bạch Là Nền Tảng Của Niềm Tin</h1>
            <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.9;">Khám phá cách chúng tôi phân bổ mọi khoản quyên góp để tối đa hóa tác động tích cực đến môi trường và sinh kế.</p>
        </div>
    </section>
`;

const joinUsHero = `
    <!-- Hero Section -->
    <section class="page-hero" style="background: linear-gradient(rgba(10, 37, 64, 0.7), rgba(10, 37, 64, 0.7)), url('join_us_hero.jpg') center/cover; padding: 150px 0 100px; text-align: center; color: white;">
        <div class="container fade-in">
            <span class="text-gold mb-3" style="display: block; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">Tham Gia Cùng SHF</span>
            <h1 style="font-size: 3.5rem; margin-bottom: 20px;">Cùng Nhau, Chúng Ta Thay Đổi Thế Giới</h1>
            <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.9;">Góp sức mình vào những dự án mang tính bước ngoặt, từ xử lý ô nhiễm công nghiệp đến mang năng lượng sạch cho bản làng.</p>
        </div>
    </section>
`;

const contactHero = `
    <!-- Hero Section -->
    <section class="page-hero" style="background: linear-gradient(rgba(10, 37, 64, 0.85), rgba(10, 37, 64, 0.85)), url('contact_hero.jpg') center/cover; padding: 150px 0 100px; text-align: center; color: white;">
        <div class="container fade-in">
            <span class="text-gold mb-3" style="display: block; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">Liên Hệ SHF</span>
            <h1 style="font-size: 3.5rem; margin-bottom: 20px;">Hãy Lên Tiếng, Chúng Tôi Luôn Lắng Nghe</h1>
            <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.9;">Mọi ý kiến đóng góp, đề xuất hợp tác hay thắc mắc của bạn đều là nguồn động lực to lớn giúp chúng tôi hoàn thiện sứ mệnh.</p>
        </div>
    </section>
`;

function injectHero(filename, heroHtml) {
    let content = fs.readFileSync(filename, 'utf8');
    // Inject right after </header>
    content = content.replace('</header>', '</header>\n' + heroHtml);
    fs.writeFileSync(filename, content, 'utf8');
}

injectHero('financials.html', financialsHero);
injectHero('join-us.html', joinUsHero);
injectHero('contact.html', contactHero);

console.log('Heroes injected!');

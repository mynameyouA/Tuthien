const fs = require('fs');

// 1. Contact.html: Add Google Map
let contactHtml = fs.readFileSync('contact.html', 'utf8');
const mapHtml = `
    <!-- Google Map -->
    <div class="map-container mt-5" style="border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.42765379058!2d106.78248901533423!3d10.854974760706427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276e0a811c79%3A0xc0083236e8b4e724!2zUGjGsOG7nW5nIFTDom5nIE5oxqFuIFBow7osIFRQLiBUaOG7pyDEkOG7qWMsIFRQLiBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1690000000000!5m2!1svi!2s" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
`;
contactHtml = contactHtml.replace('</section>', mapHtml + '\n</section>');
fs.writeFileSync('contact.html', contactHtml, 'utf8');


// 2. Financials.html: Add Report Download
let finHtml = fs.readFileSync('financials.html', 'utf8');
const reportHtml = `
    <!-- Annual Report -->
    <section class="section bg-light text-center">
        <div class="container fade-in">
            <h2 class="mb-4">Báo Cáo Thường Niên 2025</h2>
            <p class="lead mb-5" style="max-width: 700px; margin: 0 auto;">Tài liệu chi tiết về các hoạt động giải ngân, kiểm toán độc lập và tác động xã hội mà SHF đã đạt được trong năm qua.</p>
            <a href="#" class="btn btn-primary" style="padding: 15px 40px; font-size: 1.1rem; border-radius: 50px; box-shadow: 0 10px 20px rgba(46,139,87,0.3);"><i class="fa-solid fa-file-pdf"></i> Tải Xuống PDF (12MB)</a>
            
            <div class="mt-5" style="display: flex; justify-content: center; gap: 40px; opacity: 0.7;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/1200px-USAID-Identity.svg.png" height="50" alt="USAID">
                <img src="https://www.thegef.org/sites/default/files/gef_logo_0.png" height="50" alt="GEF">
            </div>
        </div>
    </section>
`;
finHtml = finHtml.replace('</section>', '</section>\n' + reportHtml);
fs.writeFileSync('financials.html', finHtml, 'utf8');


// 3. Join Us.html: Add Timeline
let joinHtml = fs.readFileSync('join-us.html', 'utf8');
const timelineHtml = `
    <!-- Volunteer Timeline -->
    <section class="section bg-light">
        <div class="container">
            <div class="section-header text-center fade-in">
                <h2 data-i18n="join_timeline_title">Hành Trình Tham Gia</h2>
            </div>
            <div class="grid-3 mt-5 text-center">
                <div class="timeline-step reveal-up">
                    <div style="width: 80px; height: 80px; background: var(--color-primary); color: white; border-radius: 50%; line-height: 80px; font-size: 2rem; margin: 0 auto 20px;">1</div>
                    <h4>Đăng Ký</h4>
                    <p>Điền thông tin và chia sẻ mong muốn đóng góp của bạn với SHF.</p>
                </div>
                <div class="timeline-step reveal-up delay-1">
                    <div style="width: 80px; height: 80px; background: var(--color-gold); color: white; border-radius: 50%; line-height: 80px; font-size: 2rem; margin: 0 auto 20px;">2</div>
                    <h4>Phỏng Vấn & Đào Tạo</h4>
                    <p>Tham gia khóa huấn luyện về an toàn và kỹ năng thực địa cốt lõi.</p>
                </div>
                <div class="timeline-step reveal-up delay-2">
                    <div style="width: 80px; height: 80px; background: var(--color-navy); color: white; border-radius: 50%; line-height: 80px; font-size: 2rem; margin: 0 auto 20px;">3</div>
                    <h4>Hành Động</h4>
                    <p>Triển khai dự án tại các khu vực đang chịu ảnh hưởng nặng nề nhất.</p>
                </div>
            </div>
        </div>
    </section>
`;
joinHtml = joinHtml.replace('</section>', '</section>\n' + timelineHtml);
fs.writeFileSync('join-us.html', joinHtml, 'utf8');

console.log('Extra content injected!');

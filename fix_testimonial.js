const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');
if (!script.includes('Testimonial Auto-scroll')) {
    const testimonialScript = `
    // Testimonial Auto-scroll
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        let scrollAmount = 0;
        const scrollStep = testimonialCarousel.clientWidth;
        
        setInterval(() => {
            if (scrollAmount < testimonialCarousel.scrollWidth - scrollStep) {
                scrollAmount += scrollStep;
            } else {
                scrollAmount = 0;
            }
            testimonialCarousel.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 5000); // 5 seconds
    }
`;
    // Insert into DOMContentLoaded
    script = script.replace(/document.addEventListener\('DOMContentLoaded', \(\) => \{/, "document.addEventListener('DOMContentLoaded', () => {" + testimonialScript);
    fs.writeFileSync('script.js', script);
    console.log('Added testimonial auto-scroll to script.js');
}

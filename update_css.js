const fs = require('fs');

// 1. Update styles.css
let css = fs.readFileSync('styles.css', 'utf8');

if (!css.includes('.btn-donate')) {
    css += `

/* New Donate Button Styles */
.btn-donate {
    background-color: #f59e0b !important; /* Gold/Amber */
    color: white !important;
    border: none !important;
    box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4) !important;
    animation: pulse-donate 2s infinite;
}
.btn-donate:hover {
    background-color: #d97706 !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6) !important;
}

@keyframes pulse-donate {
    0% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(245, 158, 11, 0); }
    100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }
}

/* Social Icons */
.social-icons {
    display: flex;
    gap: 16px;
    margin-top: 20px;
}
.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    color: white;
    font-size: 1.2rem;
    transition: all 0.3s;
}
.social-icons a:hover {
    background: var(--color-secondary);
    transform: translateY(-3px);
}

/* Gateway Buttons */
.gateway-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px;
    border-radius: var(--radius);
    border: 2px solid var(--color-border);
    background: white;
    color: var(--color-text);
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
}
.gateway-btn:hover {
    border-color: var(--color-primary);
    background: var(--color-bg);
}
.gateway-momo { color: #A50064; border-color: #A50064; }
.gateway-momo:hover { background: #A50064; color: white; }
.gateway-zalo { color: #0068FF; border-color: #0068FF; }
.gateway-zalo:hover { background: #0068FF; color: white; }

/* Testimonial Carousel */
.testimonial-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 20px;
    padding-bottom: 20px;
    scrollbar-width: none;
}
.testimonial-carousel::-webkit-scrollbar { display: none; }
.testimonial-slide {
    flex: 0 0 100%;
    scroll-snap-align: center;
}
`;
}
fs.writeFileSync('styles.css', css);
console.log('styles.css updated');

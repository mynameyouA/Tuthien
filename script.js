document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .reveal-up');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // News loading logic
    const newsContainer = document.getElementById('news-container');
    const newsDetailContainer = document.getElementById('news-detail-container');
    
    if (newsContainer || newsDetailContainer) {
        fetch('news-data.json?v=' + new Date().getTime())
            .then(res => res.json())
            .then(data => {
                if (newsContainer) {
                    renderNewsList(data);
                }
                if (newsDetailContainer) {
                    renderNewsDetail(data);
                }
            })
            .catch(err => console.error("Error loading news data:", err));
    }
});

function renderNewsList(articles) {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    articles.forEach(article => {
        const item = document.createElement('div');
        item.className = 'news-item';
        item.innerHTML = `
            <a href="news-detail.html?id=${article.id}" style="display: block; overflow: hidden; border-radius: var(--radius);"><img src="${article.thumbnail}" alt="${article.title}" style="width: 100%; height: 180px; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"></a>
            <div>
                <h2 style="font-size: 1.5rem; margin-bottom: 8px; line-height: 1.4;"><a href="news-detail.html?id=${article.id}" style="color: var(--color-primary); text-decoration: none;">${article.title}</a></h2>
                <p style="color: var(--color-text-light); font-size: 0.95rem; margin-bottom: 12px;"><i class="fa-regular fa-calendar" style="color: var(--color-secondary); margin-right: 6px;"></i> ${new Date(article.date).toLocaleDateString()}</p>
                <p style="line-height: 1.7; color: #4a5568;">${article.description}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderNewsDetail(articles) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const article = articles.find(a => a.id === id);
    const container = document.getElementById('news-detail-container');
    
    if (article) {
        // Simple markdown parsing for the body
        let htmlBody = article.body
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>')
            .replace(/<\/ul>\n<ul>/gim, '')
            .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
            .replace(/\n/gim, '<br>');

        container.innerHTML = `
            <h1>${article.title}</h1>
            <p style="color: var(--color-text-light); font-size: 0.9rem; margin-bottom: 20px;">${new Date(article.date).toLocaleDateString()}</p>
            <img src="${article.thumbnail}" alt="${article.title}" style="width:100%; max-height:400px; object-fit:cover; margin-bottom:30px; border: 1px solid var(--color-border);">
            <div style="font-size: 1.1rem; line-height: 1.8;">${htmlBody}</div>
        `;
    } else {
        container.innerHTML = '<p>Article not found.</p>';
    }
}

function openGenericModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}

function closeGenericModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}


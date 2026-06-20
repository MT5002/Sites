document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Update QR Code URL automatically ---
    const qrImg = document.getElementById('qrCodeImg');
    if (qrImg) {
        const currentUrl = window.location.href;
        // Replace the placeholder with the actual live URL
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`;
    }

    // --- 3. Tab Filtering System ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    // Initially show all (they are all visible by default)
    // But we need to hide categories that don't match "all" if coming from a filtered state.
    function filterMenu(filterValue) {
        menuCategories.forEach(category => {
            const categoryType = category.dataset.category;
            if (filterValue === 'all' || categoryType === filterValue) {
                category.style.display = 'block';
                // Optional: add a small fade-in effect
                category.style.opacity = '1';
            } else {
                category.style.display = 'none';
                category.style.opacity = '0';
            }
        });
    }

    // Add click listeners to tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            filterMenu(filter);
        });
    });

    // --- 4. Sticky Nav shadow effect (just for flair) ---
    const nav = document.querySelector('.menu-nav');
    const hero = document.querySelector('.hero');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.style.boxShadow = '0 8px 30px rgba(0,0,0,0.5)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });
    }, { threshold: 0.1 });
    if (hero) observer.observe(hero);

    // --- 5. Console welcome (for you) ---
    console.log('🍷 La Maison Menu loaded successfully!');
});
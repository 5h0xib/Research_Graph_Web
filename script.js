document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarBrand = document.querySelector('.navbar-brand');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Close navbar when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });

        // Close navbar when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        });

        if (navbarBrand) {
            navbarBrand.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        }
    }

    // Classic Scroll Animation Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Animate once
                }
            });
        }, {
            root: null,
            threshold: 0.15, // Trigger when 15% of element is visible
            rootMargin: "0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }
});

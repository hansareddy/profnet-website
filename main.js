// Standalone Script - Styles are loaded via <link>

// Add scroll effects
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 20) {
        nav.classList.add('bg-white/100', 'shadow-2xl');
        nav.classList.remove('bg-gray-50/95', 'shadow-xl');
    } else {
        nav.classList.add('bg-gray-50/95', 'shadow-xl');
        nav.classList.remove('bg-white/100', 'shadow-2xl');
    }
});

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close menu when a link is clicked
            mobileMenu.classList.add('translate-x-full');

            // Handle scroll target if applicable
            const targetAttr = link.getAttribute('data-target');
            const hrefAttr = link.getAttribute('href');
            const targetId = targetAttr || (hrefAttr && hrefAttr.startsWith('#') ? hrefAttr.substring(1) : null);

            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    // Check if it's the join-container toggle which might need special handling or just scrolling
                    // For now, let the smooth scroll handler below take care of 'href', 
                    // but we might need to manually trigger scroll if the default action is prevented by the other listener.
                    // Actually, the existing smooth scroll listener works on [data-target] and a[href^="#"],
                    // but since we preventDefault there, we need to ensure the menu closing happens first.
                    // The menu closing adds the class, which is instant.
                }
            }
        });
    });
}

console.log('Professional Networking Site Initialized');

const joinForm = document.getElementById('joinForm');
if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const container = document.getElementById('join-container');
        container.innerHTML = `
            <div class="animate-fade-in py-10">
                <div class="w-20 h-20 mx-auto mb-8 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent ring-8 ring-brand-accent/5">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 class="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white">Welcome to the <span class="text-brand-accent">Inner Circle!</span></h2>
                <p class="text-lg text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
                    You've taken the first step toward building a powerful network. Join our private ecosystem below.
                </p>
                <div class="p-6 bg-white/5 border-2 border-brand-accent/30 rounded-2xl inline-block group hover:border-brand-accent transition-all duration-500 cursor-pointer">
                    <p class="text-brand-accent font-black uppercase tracking-widest text-sm mb-2">WhatsApp Exclusive Access</p>
                    <p class="text-white font-mono text-xs opacity-60">community-invite.whatsapp.com/PFN-AU</p>
                </div>
            </div>
        `;
    });
}

// Smooth Scroll for elements with data-target
document.querySelectorAll('[data-target], a[href^="#"]').forEach(el => {
    el.addEventListener('click', (e) => {
        const targetAttr = el.getAttribute('data-target');
        const hrefAttr = el.getAttribute('href');
        const targetId = targetAttr || (hrefAttr && hrefAttr.startsWith('#') ? hrefAttr.substring(1) : null);

        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Mobile Snap Highlight Logic (Features & Industries)
const setupMobileSnap = (containerId) => {
    const container = document.getElementById(containerId);
    if (container && window.innerWidth < 768) {
        const mobileCards = container.querySelectorAll('.glass-card-new');
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mobileCards.forEach(card => card.classList.remove('mobile-snap-active'));
                    entry.target.classList.add('mobile-snap-active');
                }
            });
        }, {
            root: container,
            threshold: 0.6
        });
        mobileCards.forEach(card => cardObserver.observe(card));
    }
};

// Initialize for both sections
setupMobileSnap('features-scroll');
setupMobileSnap('industries-scroll');

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        if (backToTopBtn) {
            backToTopBtn.classList.remove('translate-y-24', 'opacity-0');
            backToTopBtn.classList.add('translate-y-0', 'opacity-100');
        }
    } else {
        if (backToTopBtn) {
            backToTopBtn.classList.add('translate-y-24', 'opacity-0');
            backToTopBtn.classList.remove('translate-y-0', 'opacity-100');
        }
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

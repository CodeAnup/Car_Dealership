const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    const oddSections = document.querySelectorAll('.odd');
    const evenSections = document.querySelectorAll('.even');

    const animateSection = (section, from) => {
        section.style.opacity = '0';
        section.style.transform = `translateX(${from})`;
        section.style.transition = 'all 0.8s ease-out';

        window.addEventListener('scroll', () => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateX(0)';
            }
        });
    };

    oddSections.forEach(section => animateSection(section, '-100px'));
    evenSections.forEach(section => animateSection(section, '100px'));
});
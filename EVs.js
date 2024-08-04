const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// Slide-in animation for cards
const cards = document.querySelectorAll('.grid > div');
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    card.classList.add('opacity-0', 'transform', 'translate-x-[-100px]');
    window.addEventListener('scroll', () => {
        if (card.getBoundingClientRect().top < window.innerHeight) {
            card.classList.remove('opacity-0', 'translate-x-[-100px]');
            card.classList.add('opacity-100', 'transform', 'translate-x-0');
        }
    });
});

// Hover effect on buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('animate-bounce');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('animate-bounce');
    });
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '⬆️';
scrollTopBtn.classList.add('fixed', 'bottom-5', 'right-5', 'bg-gray-800', 'text-white', 'p-3', 'rounded-full', 'hidden');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
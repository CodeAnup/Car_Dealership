const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// 
   
   // Toggle for the mobile menu
    document.getElementById('menu-toggle').onclick = function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    };

    // Slide-up animation for content
    window.onload = function() {
        document.getElementById('content').classList.add('show');
    };

    // Scroll down on arrow click
    document.getElementById('scroll-arrow').onclick = function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
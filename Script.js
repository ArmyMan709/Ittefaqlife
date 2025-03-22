// Responsive hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile nav if open
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
    }
  });
});

// Simple reveal on scroll animation
const revealElements = document.querySelectorAll('section');
function reveal() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('reveal');
    }
  });
}
window.addEventListener('scroll', reveal);
// Trigger on page load
reveal();

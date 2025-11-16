// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
  if (!navLinks) return;
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = '';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.right = '5%';
    navLinks.style.top = '64px';
    navLinks.style.background = 'white';
    navLinks.style.padding = '12px';
    navLinks.style.borderRadius = '10px';
    navLinks.style.boxShadow = '0 12px 30px rgba(2,6,23,0.08)';
  }
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    // close mobile menu if open
    if (navLinks && window.innerWidth < 760 && navLinks.style.display === 'flex') {
      navLinks.style.display = '';
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

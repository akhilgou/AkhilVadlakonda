// Smooth scrolling + mobile nav toggle + year
document.addEventListener('DOMContentLoaded', function() {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetSelector = this.getAttribute('href');
      if (targetSelector && targetSelector !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetSelector);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // close mobile nav if open
      const navList = document.getElementById('navList');
      if (navList && navList.classList.contains('show')) navList.classList.remove('show');
      const navToggle = document.getElementById('navToggle');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});

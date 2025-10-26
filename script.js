/* script.js
   Small helpers for navigation toggle, active link and smooth scrolling
*/

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
    }
  });

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navLinks.style.display = 'none';
      }
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // set copyright year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;
});

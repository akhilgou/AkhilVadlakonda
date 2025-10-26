// script.js — navigation toggle, active link, smooth scroll offset, current year

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const topbar = document.getElementById('topbar');

  // toggle mobile nav
  navToggle.addEventListener('click', () => {
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.position = 'absolute';
      nav.style.right = '18px';
      nav.style.top = '62px';
      nav.style.background = 'white';
      nav.style.padding = '10px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 24px rgba(17,24,39,0.08)';
    }
  });

  // close mobile nav on link click
  document.querySelectorAll('#nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 800) nav.style.display = '';
    });
  });

  // active link on scroll
  const sections = Array.from(document.querySelectorAll('main section'));
  function onScroll() {
    const scrollPos = window.scrollY + topbar.offsetHeight + 6;
    let current = sections[0];
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec;
    }
    document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
    const currentLink = document.querySelector(`.nav a[href="#${current.id}"]`);
    if (currentLink) currentLink.classList.add('active');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // smooth scroll with offset (accounts for fixed top bar)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const offset = topbar.offsetHeight + 8;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

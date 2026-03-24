/* ============================================================
   DeKalb Schools Coalition — Shared JS
   ============================================================ */

// ── Mobile Nav ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.nav-burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Set active nav link
  const links = document.querySelectorAll('.nav-links a, .mobile-nav a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && window.location.pathname.endsWith(href.replace(/^\.\.\//, ''))) {
      link.classList.add('active');
    }
  });
});

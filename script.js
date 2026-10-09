const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('#mobile-nav');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.textContent = open ? '×' : '☰';
  mobileNav.hidden = !open;
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    setMenu(false);
    menu.focus();
  }
});
const mobileBreakpoint = window.matchMedia('(max-width: 900px)');
mobileBreakpoint.addEventListener('change', () => setMenu(false));

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (btn && menu) {
  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
  }

  btn.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));

  // close when clicking elsewhere or pressing Escape
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
}
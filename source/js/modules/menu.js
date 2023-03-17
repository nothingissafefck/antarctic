function toggleMenu() {
  const menu = document.querySelector('[data-menu]');

  menu.classList.toggle('is-open');
}

export function initMenu() {
  const button = document.querySelector('[data-menu-button]');

  button.addEventListener('click', toggleMenu);
}

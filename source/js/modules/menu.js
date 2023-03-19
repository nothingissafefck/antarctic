const menu = document.querySelector('[data-menu]');
const closeControls = document.querySelectorAll('[data-menu-close]');

function toggleMenu() {
  menu.classList.toggle('is-open');
  document.body.classList.toggle('scroll-lock');
}

function onBackdropClick(event) {
  if (event.target.closest('[data-menu]')) {
    return;
  }

  document.body.removeEventListener('click', onBackdropClick, true);
  toggleMenu();
}

function onMenuToggle() {
  if (menu.classList.contains('is-open')) {
    document.body.removeEventListener('click', onBackdropClick, true);
    toggleMenu();

    return;
  }

  document.body.addEventListener('click', onBackdropClick, true);
  toggleMenu();
}

export function initMenu() {
  closeControls.forEach((control) => control.addEventListener('click', onMenuToggle));
}

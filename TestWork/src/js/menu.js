const menuStyleFunction = (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) return;
  let active = document.querySelector('.menu__nav-link--active');
  let img = active.querySelector('img');

  if (event.target.dataset.menuItem || event.target.closest('[data-menu-item]')) {
    if (active === event.target || active === event.target.closest('[data-menu-item]')) {
      return;
    } else {
      active.classList.remove('menu__nav-link--active');
      active.classList.remove('menu__nav-link--arrow-active');
      active.classList.add('menu__nav-link--arrow');
      event.target.hasAttribute('data-menu-item')
        ? event.target.classList.add('menu__nav-link--active')
        : event.target.closest('[data-menu-item]').classList.add('menu__nav-link--active');

      img.src = img.src.replace('activeSvg', 'currentSvg');

      active = document.querySelector('.menu__nav-link--active');
      active.classList.add('menu__nav-link--arrow-active');
      img = active.querySelector('img');
      img.src = img.src.replace('currentSvg', 'activeSvg');
    }
  }
};

const menuContentFunction = (event) => {};

export { menuStyleFunction, menuContentFunction };

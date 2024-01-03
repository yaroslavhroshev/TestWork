import { menuStyleFunction, menuContentFunction } from './src/js/menu';

const menu = document.querySelector('.js-menu');
menu.addEventListener('click', (event) => {
  menuStyleFunction(event);
  menuContentFunction(event);
});

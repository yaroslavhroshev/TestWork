import { menuNavigationFunction } from './src/js/menu';
import { customers, customersRenderFn } from './src/js/customers';

const menu = document.querySelector('.js-menu');
menu.addEventListener('click', menuNavigationFunction);

const customersTable = document.querySelector('.customers__list-wrapper > table');

customersTable.insertAdjacentHTML('beforeend', customersRenderFn(customers).join(''));
console.log(customersTable);

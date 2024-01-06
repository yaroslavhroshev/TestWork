import { menuNavigationFunction } from './src/js/menu';
import { customers, customersRenderFn } from './src/js/customers';
import 'paginationjs';

const menu = document.querySelector('.js-menu');
menu.addEventListener('click', menuNavigationFunction);

const customersTable = document.querySelector('.customers__list-wrapper > table');

$(document).ready(function () {
  $('#pagination-container').pagination({
    dataSource: [...customers],
    pageSize: 8,
    pageRange: 1,
    className: 'paginationjs',
    showPrev: true,
    showNext: true,
    callback: function (data, pagination) {
      const html = customersRenderFn(data);
      $('#data-container').html(function () {
        html.unshift(`<tr class="customers__customers-table-header--border">
        <th>Customer Name</th>
        <th>Company</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Country</th>
        <th>Status</th>
      </tr>`);
        return html;
      });
    },
  });
});

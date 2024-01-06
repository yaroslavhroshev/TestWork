import { customersRenderFn, customers } from './customers';

const main = () => {
  const customersArray = customersRenderFn(customers);
  let currentPage = 1;
  let rows = 8;
  const displayList = (arrData, rowPerPage, page) => {
    const customersContainer = document.querySelector('.customers__list-wrapper > table');
    customersContainer.querySelectorAll('tr').forEach((el, index) => {
      index === 0 ? null : el.remove();
    });
    page -= 1;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);
    customersContainer.insertAdjacentHTML('beforeend', paginatedData.join(''));
  };

  const displayPaginationButton = (page) => {
    const li = document.createElement('li');
    li.classList.add('pagination__item');
    li.innerText = page;
    li.addEventListener('click', (event) => {
      currentPage = page;
      displayList(customersArray, rows, currentPage);
    });
    return li;
  };

  const displayPagination = (arrData, rowPerPage) => {
    const pagination = document.querySelector('.js-pagination');
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ul = document.createElement('ul');
    ul.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
      const li = displayPaginationButton(i + 1);
      ul.append(li);
    }

    pagination.append(ul);
  };

  displayList(customersArray, rows, currentPage);
  displayPagination(customersArray, rows);
};

export { main };

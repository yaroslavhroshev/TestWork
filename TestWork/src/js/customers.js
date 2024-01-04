const customers = [
  {
    customerName: 'Jane Cooper',
    company: 'Microsoft',
    phoneNumber: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: {
      text: 'Active',
      class: 'active-button',
    },
  },
  {
    customerName: 'Floyd Miles',
    company: 'Yahoo',
    phoneNumber: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: {
      text: 'Inactive',
      class: 'inactive-button',
    },
  },
  {
    customerName: 'Ronald Richards',
    company: 'Adobe',
    phoneNumber: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: {
      text: 'Inactive',
      class: 'inactive-button',
    },
  },
  {
    customerName: 'Marvin McKinney',
    company: 'Tesla',
    phoneNumber: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: {
      text: 'Active',
      class: 'active-button',
    },
  },
  {
    customerName: 'Jerome Bell',
    company: 'Google',
    phoneNumber: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: {
      text: 'Active',
      class: 'active-button',
    },
  },
  {
    customerName: 'Kathryn Murphy',
    company: 'Microsoft',
    phoneNumber: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: {
      text: 'Active',
      class: 'active-button',
    },
  },
  {
    customerName: 'Jacob Jones',
    company: 'Yahoo',
    phoneNumber: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: {
      text: 'Active',
      class: 'active-button',
    },
  },
  {
    customerName: 'Kristin Watson',
    company: 'Facebook',
    phoneNumber: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: {
      text: 'Inactive',
      class: 'inactive-button',
    },
  },
];

const customersRenderFn = (arr) => {
  const customersTable = arr.map(
    ({ customerName, company, phoneNumber, email, country, status }) => `
    <tr>
    <td>${customerName}</td>
    <td>${company}</td>
    <td>${phoneNumber}</td>
    <td>${email}</td>
    <td>${country}</td>
    <td class="${status.class}" >${status.text}</td>
  </tr>
    `,
  );
  return customersTable;
};

export { customers, customersRenderFn };

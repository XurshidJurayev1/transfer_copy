export const customStyles = {
  rows: {
    style: {},
  },
  headCells: {
    style: {
      border: '1px solid #d0d0d0',
      fontWeight: '700',
      fontSize: '18px',
    },
  },
  cells: {
    style: {
      border: '1px solid #d0d0d0',

    },
  },
};
export const columns = [
  {
    name: 'Content-Type',
    selector: row => row.title,
  },
  {
    name: 'Value',
    selector: row => row.year,
  },
];
export const data = [
  {
    id: 1,
    title: 'Content-Type',
    year: 'application/json',
  },
  {
    id: 2,
    title: 'access_token',
    year: 'Токен полученный в кабинете Merchant',
  },
];


// data2

export const column2 = [
  {
    name: 'Название',
    selector: row => row.name,
  },
  {
    name: 'Описание',
    selector: row => row.title,
  },
  {
    name: 'Тип',
    selector: row => row.type,
  },
];
export const data2 = [
  {
    id: 1,
    name: 'uid',
    title: 'ID клиента в системе',
    type: 'string',
  },
  {
    id: 2,
    name: 'amount',
    title: 'Сумма заказа',
    type: 'numeric',
  },
  {
    id: 3,
    name: 'pen',
    title: 'Номер карты (отправителя UZCARD или HUMO) 8600123456789012',
    type: 'string',
  },
  {
    id: 4,
    name: 'eks',
    title: 'Срок карты (отправителя) 2501 ГГ/ММ',
    type: 'string',
  },
  // {
  //     id: 5,
  //     name: 'k',
  //     title: 'Валюта приема UZS RUB USD',
  //     type: 'string',
  // },
  {
    id: 6,
    name: 'tid',
    title: 'Id заказа в системе Мерчанта',
    type: 'string',
  },
  {
    id: 7,
    name: 'cid',
    title: 'Id клиента в системе Мерчанта',
    type: 'string',
  },
  // {
  //     id: 8,
  //     name: 'client_ip',
  //     title: 'Ip адрес клиента',
  //     type: 'string',
  // },
];


// data3
export const column3 = [
  {
    name: 'Content-Type',
    selector: row => row.title,
  },
  {
    name: 'Value',
    selector: row => row.year,
  },
];
export const data3 = [
  {
    id: 1,
    title: 'Content-Type',
    year: 'application/json',
  },
  {
    id: 2,
    title: 'access_token',
    year: 'Токен полученный в кабинете Merchant',
  },
];

// data4
export const column4 = [
  {
    name: 'Название',
    selector: row => row.name,
  },
  {
    name: 'Описание',
    selector: row => row.title,
  },
  {
    name: 'Тип',
    selector: row => row.type,
  },
];
export const data4 = [
  {
    id: 1,
    name: 'tid',
    title: 'Id заказа возращенный в предыдущем запросе',
    type: 'string',
  },
  {
    id: 2,
    name: 'otp',
    title: 'Смс код который пришел покупателю',
    type: 'string',
  },
];


// data5
export const column5 = [
  {
    name: 'Content-Type',
    selector: row => row.name,
  },
  {
    name: 'Value',
    selector: row => row.title,
  },
  {
    name: 'Тип',
    selector: row => row.type,
  },
];
export const data5 = [
  {
    id: 1,
    name: 'Content-Type',
    title: 'application/json',
    type: 'string',
  },
  {
    id: 2,
    name: 'access_token',
    title: 'application/json',
    type: 'string',
  },
];
// data6
export const column6 = [
  {
    name: 'Название',
    selector: row => row.name,
  },
  {
    name: 'Описание',
    selector: row => row.title,
  },
  {
    name: 'Тип',
    selector: row => row.type,
  },
];
export const data6 = [
  {
    id: 1,
    name: 'uid',
    title: 'ID Вашего мерчанта в системе',
    type: 'string',
  },
  {
    id: 2,
    name: 'pan',
    title: 'номер карты отправителя (пример: 8600000000000000)',
    type: 'string',
  },
  {
    id: 3,
    name: 'amount',
    title: 'сумма списания ',
    type: 'string',
  },
  {
    id: 4,
    name: 'token ',
    title: 'захэшированное алгоритмом SHA-512 секретное слово для вывода средств (п1) ',
    type: 'string',
  },
];


// data7
export const column7 = [
  {
    name: 'Content-Type',
    selector: row => row.name,
  },
  {
    name: 'Value',
    selector: row => row.title,
  },
];
export const data7 = [
  {
    id: 1,
    name: 'access_token',
    title: 'Токен полученный в кабинете Merchant',
  },
];
// data8
export const column8 = [
  {
    name: 'Название',
    selector: row => row.name,
  },
  {
    name: 'Описание',
    selector: row => row.title,
  },
  {
    name: 'Тип',
    selector: row => row.type,
  },
];
export const data8 = [
  {
    id: 1,
    name: 'uid',
    title: 'ID Вашего мерчанта в системе',
    type: 'string',
  },
  {
    id: 2,
    name: 'opid',
    title: 'ID Транзакции в нашей системе',
    type: 'string',
  },

];


// data9
export const column9 = [
  {
    name: 'Content-Type',
    selector: row => row.name,
  },
  {
    name: 'Value',
    selector: row => row.title,
  },

];
export const data9 = [
  {
    id: 1,
    name: 'Content-Type',
    title: 'application/json',
  },
  {
    id: 2,
    name: 'access_token',
    title: 'Токен полученный в кабинете Merchant',
  },

];


// data10
export const column10 = [
  {
    name: 'Название',
    selector: row => row.name,
  },
  {
    name: 'Описание',
    selector: row => row.title,
  },
  {
    name: 'Тип',
    selector: row => row.type,
  },

];
export const data10 = [
  {
    id: 1,
    name: 'uid',
    title: 'ID Вашего мерчанта в системе',
    type: 'string',
  },
  {
    id: 2,
    name: 'from',
    title: 'Дата начала в формате UNIX_TIMESTAMP',
    type: 'string',
  },
  {
    id: 3,
    name: 'to',
    title: 'Дата конца в формате UNIX_TIMESTAMP',
    type: 'string',
  },

];


// data11
export const column11 = [
  {
    name: 'Content-Type',
    selector: row => row.name,
  },
  {
    name: 'Value',
    selector: row => row.title,
  },

];
export const data11 = [
  {
    id: 1,
    name: 'Content-Type',
    title: 'application/json',
  },
  {
    id: 2,
    name: 'access_token',
    title: 'Токен полученный в кабинете Merchant',
  },
];

// data12
export const column12 = [
  {
    name: 'Название',
    selector: row => row.name,
  },
  {
    name: 'Описание',
    selector: row => row.title,
  },
  {
    name: 'Тип',
    selector: row => row.type,
  },

];
export const data12 = [
  {
    id: 1,
    name: 'uid',
    title: 'ID Вашего мерчанта в системе',
    type: 'string',
  },
  {
    id: 2,
    name: 'from',
    title: 'Дата начала в формате UNIX_TIMESTAMP',
    type: 'string',
  },
  {
    id: 3,
    name: 'to',
    title: 'Дата конца в формате UNIX_TIMESTAMP',
    type: 'string',
  },

];
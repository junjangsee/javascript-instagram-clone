const datas = require('./data.json');
const MainPage = require('./src/pages/MainPage');

const myInfo = {
  nickname: 'junjangsee',
  name: '김준형',
  thumbnail:
    'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
};

const followers = [
  {
    thumbnail:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    nickname: 'test1',
  },
  {
    thumbnail:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    nickname: 'test2',
  },
];

const people = [
  {
    thumbnail:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    nickname: 'junjangsee',
    isRealtime: true,
  },
  {
    thumbnail:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    nickname: 'olaf',
    isRealtime: true,
  },
  {
    thumbnail:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    nickname: 'test3',
    isRealtime: false,
  },
];

const page = new MainPage(datas, followers, myInfo, people);
page.render();
page.mount();

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

const footers = [
  '소개',
  '도움말',
  '홍보 센터',
  'API',
  '채용 정보',
  '개인정보처리방침',
  '약관',
  '위치',
  '인기 계정',
  '해시 태그',
  '언어',
];

const page = new MainPage(datas, followers, myInfo, people, footers);
page.render();
page.mount();

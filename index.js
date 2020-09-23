const datas = require('./data.json');
const MainPage = require('./src/pages/MainPage');
const ProfilePage = require('./src/pages/ProfilePage');

const profileInfo = {
  nickname: 'junjangsee',
  name: '김준형',
  description: '코딩은 재밌지만 어렵네요...',
  thumbnail:
    'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
  posts: [
    {
      id: 1,
      title: '코딩 중',
      comment: '어려움의 연속이다.',
      images: [
        {
          id: 1,
          image:
            'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
        },
        {
          id: 2,
          image:
            'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
        },
      ],
    },
  ],
  followers: [
    {
      nickname: 'follower1',
    },
    {
      nickname: 'follower2',
    },
  ],
  followings: [
    {
      nickname: 'following1',
    },
    {
      nickname: 'following2',
    },
  ],
  stories: [
    {
      title: '코딩스타그램',
      thumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    },
    {
      title: '개스타그램',
      thumbnail:
        'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    },
  ],
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

// const mainPage = new MainPage(datas, followers, profileInfo, people, footers);
const profilePage = new ProfilePage(profileInfo);
// mainPage.render();
// mainPage.mount();
profilePage.render();
profilePage.mount();

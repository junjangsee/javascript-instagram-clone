const mockData = [
  {
    nickname: 'junjangsee',
    thumbnail:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E',
    pictures: [
      {
        id: 1,
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQc7vUezLJbElOtP19-xjeLpuFwMhw92S6Y6g&usqp=CAU',
      },
    ],
    likes: ['olaf', 'developer'],
    content: '컴포넌트를 분리하는 것은 아주 중요합니다. 번들링 개념 또한 중요하죠',
    comments: [
      {
        id: 1,
        nickname: 'olaf',
        comment: '열심히 하고 있군요!',
      },
      {
        id: 2,
        nickname: 'goodjoob',
        comment: '화이팅하세요!',
      },
    ],
    date: '2020-09-01',
  },
];

const Peed = require('./src/Peed');

const peeds = mockData.map((data) => new Peed(data));

const app = document.getElementById('app');
app.innerHTML += peeds.map((peed) => peed.render());

const Router = require('./src/lib/Router');
const MainPage = require('./src/pages/MainPage');
const ProfilePage = require('./src/pages/ProfilePage');

// url 보다는 경로 개념인 path
const pages = [
  { page: MainPage, path: '/' },
  { page: ProfilePage, path: '/profile' },
];

const router = new Router({ pages: pages });
router.push(pages[0].path);

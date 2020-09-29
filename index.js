const Router = require('./src/lib/Router');
const MainPage = require('./src/pages/MainPage');
const ProfilePage = require('./src/pages/ProfilePage');
const PostPage = require('./src/pages/PostPage');

const pages = [
  { page: MainPage, path: '/' },
  { page: ProfilePage, path: '/profile' },
  { page: PostPage, path: '/post' },
];

const router = new Router({ pages: pages });
router.push(pages[0].path);

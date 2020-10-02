const Router = require('./src/lib/Router');
const MainPage = require('./src/pages/MainPage');
const ProfilePage = require('./src/pages/ProfilePage');
const PostPage = require('./src/pages/PostPage');

const pages = [
  { page: ProfilePage, path: '/profile' },
  { page: PostPage, path: '/post' },
  { page: MainPage, path: '/' },
];

const router = new Router({ pages: pages });
router.push('/');

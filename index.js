const datas = require('./data.json');
const { subject } = require('./src/lib/Subject');

const Carousel = require('./src/lib/Carousel');
const Feed = require('./src/Feed');
const Header = require('./src/Header');
const Detail = require('./src/Detail');

datas.forEach((data) => {
  const feed = new Feed();
  new Header(feed, data.thumbnail, data.nickname);
  new Carousel(feed, data.images, 0);
  new Detail(feed, data.nickname, data.likes, data.content, data.comments, data.date);
});

console.log(subject);
subject.render();
subject.mount();

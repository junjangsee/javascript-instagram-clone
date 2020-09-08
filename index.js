const datas = require('./data.json');
const { subject } = require('./src/lib/Subject');

const Feed = require('./src/Feed');
const Header = require('./src/Header');
const Picture = require('./src/Picture');
const Detail = require('./src/Detail');

datas.forEach((data) => {
  const feed = new Feed();
  new Header(feed, data.thumbnail, data.nickname);
  new Picture(feed, data.pictures);
  new Detail(feed, data.nickname, data.likes, data.content, data.comments, data.date);
});

console.log(subject);
subject.render();

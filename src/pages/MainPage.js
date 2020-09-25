const Header = require('../components/Header');
const Realtime = require('../components/Realtime');
const Carousel = require('../lib/Carousel');
const Button = require('../components/shared/Button');
const Text = require('../components/shared/Text');
const Feed = require('../components/feed/Feed');
const FeedHeader = require('../components/feed/Header');
const Detail = require('../components/feed/Detail');
const Page = require('../lib/Page');
const Container = require('../components/shared/Container');
const Recommend = require('../components/recommend/Recommend');
const Profile = require('../components/recommend/Profile');
const Recommends = require('../components/recommend/Recommends');
const Recommender = require('../components/recommend/Recommender');
const Footer = require('../components/Footer');

class MainPage extends Page {
  constructor(feeds, followers, profileInfo, people, footers) {
    super();
    new Header();
    const mainWrapper = new Container({ tag: 'section', className: 'main-wrapper' });
    const main = new Container({ parent: mainWrapper, tag: 'div', className: 'main' });
    new Realtime({ parent: main, people: people });

    feeds.forEach((data) => {
      const feed = new Feed({ parent: main });
      new FeedHeader(feed, data.thumbnail, data.nickname);
      const carousel = new Carousel(feed, data.images, 0);
      const prevButton = new Button({
        parent: carousel,
        type: 'button',
        className: 'prev',
        onClick: carousel.prev,
      });
      new Text({ parent: prevButton, text: '이전', tag: 'span' });
      const nextButton = new Button({
        parent: carousel,
        type: 'button',
        className: 'next',
        onClick: carousel.next,
      });
      new Text({ parent: nextButton, text: '다음', tag: 'span' });
      new Detail(feed, data.nickname, data.likes, data.content, data.comments, data.date);
    });

    const asideContainer = new Container({
      parent: main,
      tag: 'aside',
      className: 'aside-wrapper',
    });
    const recommend = new Recommend({ parent: asideContainer });
    new Profile({
      parent: recommend,
      nickname: profileInfo.nickname,
      name: profileInfo.name,
      thumbnail: profileInfo.thumbnail,
    });
    new Recommends({ parent: recommend });
    new Recommender({ parent: recommend, users: followers });
    new Footer({ parent: recommend, footers: footers });
  }
}

module.exports = MainPage;

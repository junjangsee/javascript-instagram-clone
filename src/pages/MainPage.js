const Header = require('../components/Header');
const Realtime = require('../components/Realtime');
const Carousel = require('../lib/Carousel');
const Button = require('../components/shared/Button');
const Text = require('../components/shared/Text');
const Feed = require('../components/feed/Feed');
const FeedHeader = require('../components/feed/Header');
const Detail = require('../components/feed/Detail');
const Page = require('../lib/Page');
const Aside = require('../components/aside/Aside');
const Profile = require('../components/aside/Profile');
const RecommendBox = require('../components/aside/RecommendBox');
const Recommend = require('../components/aside/Recommend');
const Container = require('../components/shared/Container');

class MainPage extends Page {
  constructor(feeds, followers, myInfo, people) {
    super();
    new Header();
    const container = new Container({ tag: 'section', className: 'main' });
    new Realtime({ parent: container, people: people });
    feeds.forEach((data) => {
      const feed = new Feed({ parent: container });
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
    const aside = new Aside();
    new Profile({
      parent: aside,
      nickname: myInfo.nickname,
      name: myInfo.name,
      thumbnail: myInfo.thumbnail,
    });
    new RecommendBox({ parent: aside });
    new Recommend({ parent: aside, users: followers });
  }
}

module.exports = MainPage;

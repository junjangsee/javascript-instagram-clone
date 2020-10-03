const Header = require('../components/Header');
const Realtime = require('../components/Realtime');
const Page = require('../lib/Page');
const Container = require('../components/shared/Container');
const FeedContainer = require('../containers/FeedContainer');
const RecommendContainer = require('../containers/RecommendContainer');
const { profileInfo, followers, footers, people, feeds } = require('./mocks/datas');
const Button = require('../components/shared/Button');
const Image = require('../components/shared/Image');

class MainPage extends Page {
  constructor({ router }) {
    super(router);
    const header = new Header();
    const homeButton = new Button({
      parent: header,
      className: 'home-button',
      onClick: function () {
        router.push('/');
      },
    });
    new Image({ parent: homeButton, src: '../src/images/home.png' });

    const shareButton = new Button({
      parent: header,
      className: 'share-button',
      onClick: function () {
        router.push('/share');
      },
    });
    new Image({ parent: shareButton, src: '../src/images/share.png' });

    const exploreButton = new Button({
      parent: header,
      className: 'explore-button',
      onClick: function () {
        router.push('/explore');
      },
    });
    new Image({ parent: exploreButton, src: '../src/images/explore.png' });

    const heartButton = new Button({
      parent: header,
      className: 'heart-button',
      onClick: function () {
        router.push('/heart');
      },
    });
    new Image({ parent: heartButton, src: '../src/images/heart.png' });

    const profileButton = new Button({
      parent: header,
      className: 'profile-button',
      onClick: function () {
        router.push('/profile');
      },
    });
    new Image({ parent: profileButton, src: '../src/images/profile.png' });

    const mainWrapper = new Container({ tag: 'section', className: 'main-wrapper' });
    const main = new Container({ parent: mainWrapper, tag: 'div', className: 'main' });
    new Realtime({ parent: main, people: people });

    feeds.forEach((data) => {
      new FeedContainer(main, data, footers);
    });
    const asideContainer = new Container({
      parent: main,
      tag: 'aside',
      className: 'aside-wrapper',
    });

    new RecommendContainer(asideContainer, profileInfo, followers, footers);
  }
}

module.exports = MainPage;

const Page = require('../lib/Page');
const Header = require('../components/Header');
const Container = require('../components/shared/Container');
const Profile = require('../components/profile/Profile');
const Story = require('../components/profile/Story');
const Tab = require('../components/profile/Tab');
const Post = require('../components/profile/Post');
const Footer = require('../components/Footer');
const Button = require('../components/shared/Button');
const Image = require('../components/shared/Image');
const { profileInfo, footers } = require('./mocks/datas');

class ProfilePage extends Page {
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
    const containerWrapper = new Container({ tag: 'div', className: 'container-wrapper' });
    const container = new Container({
      parent: containerWrapper,
      tag: 'div',
      className: 'container',
    });
    new Profile(container, profileInfo);
    new Story(container, profileInfo.stories);
    new Tab(container);
    new Post(container, profileInfo.posts, router);
    new Footer({ parent: containerWrapper, footers: footers });
  }
}

module.exports = ProfilePage;

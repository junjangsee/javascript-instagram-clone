const Page = require('../lib/Page');
const Header = require('../components/Header');
const Container = require('../components/shared/Container');
const Profile = require('../components/profile/Profile');
const Story = require('../components/profile/Story');
const Tab = require('../components/profile/Tab');
const Post = require('../components/profile/Post');

class ProfilePage extends Page {
  constructor(profileInfo) {
    super();
    new Header();
    const containerWrapper = new Container({ tag: 'div', className: 'container-wrapper' });
    const container = new Container({
      parent: containerWrapper,
      tag: 'div',
      className: 'container',
    });
    new Profile(container, profileInfo);
    new Story(container, profileInfo.stories);
    new Tab(container);
    new Post(container, profileInfo.posts);
  }
}

module.exports = ProfilePage;

const Page = require('../lib/Page');
const Header = require('../components/Header');
const Container = require('../components/shared/Container');
const Profile = require('../components/profile/Profile');

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
    const profile = new Profile(container, profileInfo);
  }
}

module.exports = ProfilePage;

const Footer = require('../components/Footer');
const Profile = require('../components/recommend/Profile');
const Recommend = require('../components/recommend/Recommend');
const Recommender = require('../components/recommend/Recommender');
const Recommends = require('../components/recommend/Recommends');
const Component = require('../lib/Component');

class RecommendContainer extends Component {
  constructor(parent, profileInfo, followers, footers) {
    super(parent);
    const recommend = new Recommend({ parent: parent });
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

  render() {
    return '';
  }
}

module.exports = RecommendContainer;

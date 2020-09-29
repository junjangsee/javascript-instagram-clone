const Component = require('../lib/Component');
const Thumbnail = require('../components/post/Thumbnail');
const Image = require('../components/shared/Image');
const Content = require('../components/post/Content');
const { profileInfo } = require('../pages/mocks/datas');

class PostContainer extends Component {
  constructor(parent) {
    super(parent);
    const thumbnail = new Thumbnail({ parent: parent });
    new Image({
      parent: thumbnail,
      src:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtzfgVAiFqLmcrULkb5qDJ16hlDgsMsB83EQ&usqp=CAU',
    });
    const content = new Content({
      parent: parent,
      thumbnail: profileInfo.thumbnail,
      nickname: profileInfo.nickname,
    });
  }

  render() {
    return '';
  }
}

module.exports = PostContainer;

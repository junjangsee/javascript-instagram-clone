const Component = require('../lib/Component');
const Thumbnail = require('../components/post/Thumbnail');
const Image = require('../components/shared/Image');
const Content = require('../components/post/Content');

class PostContainer extends Component {
  constructor({ parent, postInfo }) {
    super(parent);
    this.postInfo = postInfo[0][0];

    const thumbnail = new Thumbnail({ parent: parent });
    this.postInfo.images.forEach((image) => {
      new Image({
        parent: thumbnail,
        src: image.image,
      });
    });
    new Content({
      parent: parent,
      thumbnail: this.postInfo.thumbnail,
      nickname: this.postInfo.nickname,
      description: this.postInfo.description,
      date: this.postInfo.date,
      comments: this.postInfo.comments,
      likes: this.postInfo.likes,
    });
  }

  render() {
    return '';
  }
}

module.exports = PostContainer;

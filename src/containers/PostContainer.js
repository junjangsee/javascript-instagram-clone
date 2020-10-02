const Component = require('../lib/Component');
const Thumbnail = require('../components/post/Thumbnail');
const Button = require('../components/shared/Button');
const Image = require('../components/shared/Image');
const Content = require('../components/post/Content');
const Carousel = require('../lib/Carousel');
const { profileInfo } = require('../pages/mocks/datas');

class PostContainer extends Component {
  constructor({ parent, router }) {
    super(parent);
    this.router = router;

    const datas = profileInfo.posts.map((post) => {
      return post;
    });

    const post = datas.filter((data) => {
      return data.id === parseInt(this.router.getRouteIndex(), 10);
    });

    const thumbnail = new Thumbnail({ parent: parent });
    const carousel = new Carousel(thumbnail, post[0].images, 0);
    const prevButton = new Button({
      parent: carousel,
      type: 'button',
      className: 'prev',
      onClick: carousel.prev,
    });
    new Image({ parent: prevButton, src: '../../src/images/left-arrow.png' });
    const nextButton = new Button({
      parent: carousel,
      type: 'button',
      className: 'next',
      onClick: carousel.next,
    });
    new Image({ parent: nextButton, src: '../../src/images/right-arrow.png' });
    new Content({
      parent: parent,
      thumbnail: post[0].thumbnail,
      nickname: post[0].nickname,
      description: post[0].description,
      date: post[0].date,
      comments: post[0].comments,
      likes: post[0].likes,
    });
  }

  render() {
    return '';
  }
}

module.exports = PostContainer;

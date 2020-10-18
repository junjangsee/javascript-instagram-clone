const Detail = require('../components/feed/Detail');
const Feed = require('../components/feed/Feed');
const Button = require('../components/shared/Button');
const Image = require('../components/shared/Image');
const Carousel = require('../lib/Carousel');
const Component = require('../lib/Component');

class FeedContainer extends Component {
  constructor(parent, data) {
    super(parent);
    this.parent = parent;
    this.feed = new Feed({
      parent: parent,
      header: { nickname: data.nickname, thumbnail: data.thumbnail }
    });
    const carousel = new Carousel(this.feed, data.images, 0);
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
    new Detail(this.feed, data.nickname, data.likes, data.content, data.comments, data.date);
  }

  reRender(data) {
    const feedWrapper = document.getElementById(this.feed.id).parentElement;
    feedWrapper.innerHTML = '';

    this.feed = new Feed({
      parent: this.parent,
      header: { nickname: data[0].nickname, thumbnail: data[0].thumbnail }
    });

    this.create(data[0]);
    feedWrapper.innerHTML += this.feed.render();
    this.feed.mount();
  }

  create(data) {
    const carousel = new Carousel(this.feed, data.images, 0);
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
    new Detail(this.feed, data.nickname, data.likes, data.content, data.comments, data.date);
  }

  render() {
    return '';
  }
}

module.exports = FeedContainer;

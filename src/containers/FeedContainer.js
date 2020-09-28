const Detail = require('../components/feed/Detail');
const Feed = require('../components/feed/Feed');
const Button = require('../components/shared/Button');
const Text = require('../components/shared/Text');
const Carousel = require('../lib/Carousel');
const Component = require('../lib/Component');

class FeedContainer extends Component {
  constructor(parent, data, footers) {
    super(parent);
    const feed = new Feed({
      parent: parent,
      header: { nickname: data.nickname, thumbnail: data.thumbnail },
      footers,
    });
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
  }

  render() {
    return '';
  }
}

module.exports = FeedContainer;

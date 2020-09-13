const Carousel = require('./lib/Carousel');
const Button = require('./lib/Button');
const Text = require('./lib/Text');
const Feed = require('./Feed');
const Header = require('./Header');
const Detail = require('./Detail');

class Render {
  constructor(datas) {
    this.datas = datas;
  }

  render() {
    this.datas.forEach((data) => {
      const feed = new Feed();
      new Header(feed, data.thumbnail, data.nickname);
      const carousel = new Carousel(feed, data.images, 0);
      new Detail(feed, data.nickname, data.likes, data.content, data.comments, data.date);
      const prevButton = new Button({
        parent: feed,
        type: 'button',
        className: 'prev',
        onClick: carousel.prev,
      });
      const nextButton = new Button({
        parent: feed,
        type: 'button',
        className: 'next',
        onClick: carousel.next,
      });
      new Text(prevButton, '이전', 'span');
      new Text(nextButton, '다음', 'span');
    });
  }
}

module.exports = Render;

const Carousel = require('./lib/Carousel');
const Button = require('./components/Button');
const Text = require('./components/Text');
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
    });
  }
}

module.exports = Render;

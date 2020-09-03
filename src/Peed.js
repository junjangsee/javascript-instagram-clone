const Header = require('./Header');
const Picture = require('./Picture');
const Detail = require('./Detail');

class Peed {
  constructor(data) {
    this.header = new Header(data.thumbnail, data.nickname);
    this.picture = new Picture(data.pictures);
    this.detail = new Detail(data.nickname, data.likes, data.content, data.comments, data.date);
  }

  render() {
    return `
        <article class="peed">
            ${this.header.render()}
            ${this.picture.render()}
            ${this.detail.render()}
        </article>
      `;
  }
}

module.exports = Peed;

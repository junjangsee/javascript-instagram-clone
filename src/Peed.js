const Header = require('./Header');
const Picture = require('./Picture');

class Peed {
  constructor(data) {
    this.header = new Header(data.thumbnail, data.nickname);
    this.picture = new Picture(data.pictures);
  }

  render() {
    return `
        <article class="peed">
            ${this.header.render()}
            ${this.picture.render()}
        </article>
      `;
  }
}

module.exports = Peed;

const Header = require('./Header');

class Peed {
  constructor(data) {
    this.header = new Header(data.thumbnail, data.nickname);
  }

  render() {
    return `
        <article class="peed">
            ${this.header.render()}
        </article>
      `;
  }
}

module.exports = Peed;

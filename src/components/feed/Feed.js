const Component = require('../../lib/Component');

class Feed extends Component {
  constructor({ parent = null, header }) {
    super(parent);
    this.thumbnail = header.thumbnail;
    this.nickname = header.nickname;
  }

  render() {
    return `<article class="feed">
              <header class="feed-header">
                <div class="user-profile">
                  <a class="thumbnail" href="">
                    <img src="${this.thumbnail}" alt="userthumbnail" />
                  </a>
                  <a class="nickname" href="">
                    <span>${this.nickname}</span>
                  </a>
                </div>
                <div class="user-tab">
                  <button type="button">
                    <img src="../src/images/more.png" alt="" />
                  </button>
                </div>
              </header>
              ${this.renderToString()}
            </article>`;
  }
}

module.exports = Feed;

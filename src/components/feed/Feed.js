const Component = require('../../lib/Component');

class Feed extends Component {
  constructor({ parent = null }) {
    super(parent);
  }

  render() {
    return `<article class="feed">${this.renderToString()}</article>`;
  }
}

module.exports = Feed;

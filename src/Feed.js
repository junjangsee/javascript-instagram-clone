const Component = require('./lib/Component');

class Feed extends Component {
  constructor() {
    super();
  }

  render() {
    return `<article class="feed">${this.components
      .map((component) => component.render())
      .join('')}</article>`;
  }
}

module.exports = Feed;

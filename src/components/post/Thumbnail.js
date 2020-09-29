const Component = require('../../lib/Component');

class Thumbnail extends Component {
  constructor({ parent }) {
    super(parent);
  }

  render() {
    return `<div class="thumnail-wrapper">
                ${this.renderToString()}
            </div>`;
  }
}

module.exports = Thumbnail;

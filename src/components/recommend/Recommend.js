const Component = require('../../lib/Component');

class Recommend extends Component {
  constructor({ parent }) {
    super(parent);
  }

  render() {
    return `<div class="recommend-aside">
                ${this.renderToString()}
            </div>`;
  }
}

module.exports = Recommend;

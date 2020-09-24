const Component = require('../../lib/Component');

class Aside extends Component {
  constructor({ parent }) {
    super(parent);
  }

  render() {
    return `<div class="recommend-aside">
                ${this.components.map((component) => component.render()).join('')}
            </div>`;
  }
}

module.exports = Aside;

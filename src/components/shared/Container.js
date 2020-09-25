const Component = require('../../lib/Component');

class Container extends Component {
  constructor({ parent = null, tag = null, className = null }) {
    super(parent);
    this.tag = tag;
    this.className = className;
  }

  render() {
    return `<${this.tag} class="${this.className}">
                ${this.renderToString()}
            </${this.tag}>`;
  }
}

module.exports = Container;

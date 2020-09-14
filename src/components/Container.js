const Component = require('../lib/Component');

class Container extends Component {
  constructor({
    parent = null,
    children = [],
    tag = null,
    className = null,
    width = null,
    height = null,
    display = 'block',
  }) {
    super(parent);
    this.children = children;
    this.tag = tag;
    this.className = className;
    this.width = `width: ${width};`;
    this.height = `height: ${height};`;
    this.display = `display: ${display};`;
  }

  render() {
    return `<${this.tag} class="${this.className}" style="${this.display} ${this.width} ${
      this.height
    }">
    ${this.children.map((child) => child.render()).join('')}
    </${this.tag}>`;
  }
}

module.exports = Container;

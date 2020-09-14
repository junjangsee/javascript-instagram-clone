const Component = require('../lib/Component');

class Text extends Component {
  constructor({ parent, text, tag }) {
    super(parent);
    this.text = text;
    this.tag = tag;
  }

  render() {
    return `<${this.tag}>${this.text}</${this.tag}>`;
  }
}

module.exports = Text;

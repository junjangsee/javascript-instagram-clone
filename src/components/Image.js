const Component = require('../lib/Component');

class Image extends Component {
  constructor({ parent, src }) {
    super(parent);
    this.src = src;
  }

  render() {
    return `<img class="image" src="${this.src}" />`;
  }
}

module.exports = Image;

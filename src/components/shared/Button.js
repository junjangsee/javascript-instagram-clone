const Component = require('../../lib/Component');

class Button extends Component {
  constructor({ parent = null, type = 'button', className = null, onClick = null }) {
    super(parent);
    this.type = type;
    this.className = className;
    this.onClick = onClick;
  }

  mount() {
    if (this.onClick === null) return;
    const button = document.getElementById(this.id);
    button.addEventListener('click', () => {
      this.onClick();
    });
  }

  render() {
    return `<button id="${this.id}" class="${this.className}" type="${
      this.type
    }">${this.renderToString()}</button>`;
  }
}

module.exports = Button;

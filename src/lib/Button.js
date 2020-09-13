const Component = require('./Component');

class Button extends Component {
  constructor({ parent = null, type = 'button', className = null, onClick = null }) {
    super(parent);
    this.type = type;
    this.className = className;
    this.onClick = onClick;
  }

  render() {
    return `<button id="${this.id}" class="${this.className}" type="${
      this.type
    }">${this.components.map((component) => component.render()).join('')}</button>`;
  }

  mount() {
    if (this.onClick === null) return;
    const button = document.getElementById(this.id);
    button.addEventListener('click', () => {
      this.onClick();
    });
  }
}

module.exports = Button;

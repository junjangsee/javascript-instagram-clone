const Component = require('../../lib/Component');

class Footer extends Component {
  constructor({ parent, footers }) {
    super(parent);
    this.footers = footers;
  }

  render() {
    return `<div class="footer-wrapper">
              <ul class="main-footer">
                  ${this.footers.map((data) => `<li class="footer-text">${data}</li>`).join('')}
              </ul>
              <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
            </div>
            `;
  }
}

module.exports = Footer;

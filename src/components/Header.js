const Component = require('../lib/Component');

class Header extends Component {
  render() {
    return `<header class="main-header">
                <div class="header-wrapper">
                    <div class="logo">
                        <img src="../src/images/logo.png" />
                    </div>
                    <div class="search">
                        <img src="../src/images/see.png" />
                        <span>검색</span>
                    </div>
                    <div class="tabs">
                        ${this.renderToString()}
                    </div>
                </div>
            </header>`;
  }
}

module.exports = Header;

const Component = require('../lib/Component');

class Header extends Component {
  render() {
    return `<header class="main-header">
                <div class="header-wrapper">
                    <div class="logo">
                        <a href="">
                            <img src="../src/images/logo.png" />
                        </a>
                    </div>
                    <div class="search">
                        <img src="../src/images/see.png" />
                        <span>검색</span>
                    </div>
                    <div class="tabs">
                        <div class="home">
                            <a href="">
                                <img src="../src/images/home.png" />
                            </a>
                        </div>
                        <div class="share">
                            <a href="">
                                <img src="../src/images/share.png" />
                            </a>
                        </div>
                        <div class="explore">
                            <a href="">
                                <img src="../src/images/explore.png" />
                            </a>
                        </div>
                        <div class="heart">
                            <a href="">
                                <img src="../src/images/heart.png" />
                            </a>
                        </div>
                        <div class="profile">
                            <button type="button">
                                <img src="../src/images/profile.png" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>`;
  }
}

module.exports = Header;

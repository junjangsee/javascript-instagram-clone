const Component = require('../../lib/Component');

class Tab extends Component {
  constructor(parent) {
    super(parent);
  }

  render() {
    return `<div class="tab-wrapper">
                <div class="tabs">
                    <a class="tab on" href="">
                        <img src="../src/images/post.png" />
                        <span>게시물</span>
                    </a>
                    <a class="tab" href="">
                        <img src="../src/images/tag.png" />
                        <span>태그됨</span>
                    </a>
                </div>
            </div>`;
  }
}

module.exports = Tab;

const Component = require('../../lib/Component');

class RecommendBox extends Component {
  constructor({ parent }) {
    super(parent);
  }

  render() {
    return `
        <div class="recommend-all">
            <span>회원님을 위한 추천</span><a href="">모두 보기</a>
        </div>`;
  }
}

module.exports = RecommendBox;

const Component = require('../../lib/Component');

class Recommend extends Component {
  constructor({ parent, users }) {
    super(parent);
    this.users = users;
  }

  render() {
    return `<div class="recommend-users">
                <div class="recommenders">
                    ${this.users
                      .map(
                        (user) => `<div class="recommender-profile">
                    <img src="${user.thumbnail}" />
                    <div class="recommender-info">
                        <span class="nickname">${user.nickname}</span>
                        <span class="follow">회원님을 팔로우합니다</span>
                    </div>
                    <button type="button">팔로우</button> 
                </div>`
                      )
                      .join('')}
                </div>
            </div>

      `;
  }
}

module.exports = Recommend;

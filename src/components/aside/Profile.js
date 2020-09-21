const Component = require('../../lib/Component');

class Profile extends Component {
  constructor({ parent, nickname, name, thumbnail }) {
    super(parent);
    this.nickname = nickname;
    this.name = name;
    this.thumbnail = thumbnail;
  }

  render() {
    return `<div class="user-recommend-profile">
               <img src="${this.thumbnail}" />
               <div class="user-recommend">
                  <a href="">${this.nickname}</a>
                  <span>${this.name}</span>
               </div>
            </div>`;
  }
}

module.exports = Profile;

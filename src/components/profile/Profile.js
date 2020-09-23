const Component = require('../../lib/Component');

class Profile extends Component {
  constructor(parent, profileInfo) {
    super(parent);
    this.profileInfo = profileInfo;
  }

  render() {
    return `<div class="profile-wrapper">
                <div class="profile">
                    <img src="${this.profileInfo.thumbnail}" />
                    <div class="profile-info">
                        <div class="profile-tabs">
                            <span>${this.profileInfo.nickname}</span>
                            <button type="button">메시지 보내기</button>
                            <button type="button"><span class="following"></span></button>
                            <button type="button"><span class="scroll"></span></button>
                            <button type="button"><span class="more"></span></button>
                        </div>
                        <div class="profile-status">
                            <dl class="status">
                                <dt>게시물</dt>
                                <dd>${this.profileInfo.posts.length}</dd>
                                <dt>팔로워</dt>
                                <dd>${this.profileInfo.followers.length}</dd>
                                <dt>팔로우</dt>
                                <dd>${this.profileInfo.followings.length}</dd>
                            </dl>
                        </div>
                        <div class="profile-description">
                            <h1>${this.profileInfo.name}</h1>
                            <p>${this.profileInfo.description}</p>
                        </div>
                    </div>
                </div>
            </div>`;
  }
}

module.exports = Profile;

const Component = require('../../lib/Component');

class Profile extends Component {
  constructor(parent, profileInfo) {
    super(parent);
    this.profileInfo = profileInfo;
  }

  render() {
    return `<div class="profile-wrapper">
                <div class="profile">
                    <div class="thumbnail">
                        <img src="${this.profileInfo.thumbnail}" />
                    </div>
                    <div class="profile-info">
                        <div class="profile-tabs">
                            <h2 class="nickname">${this.profileInfo.nickname}</h2>
                            <button type="button" class="direct-message">메시지 보내기</button>
                            <button type="button" class="following"><img src="../src/images/following.png"></button>
                            <button type="button" class="scroll"><img src="../src/images/scroll.png"></button>
                            <button type="button" class="more"><img src="../src/images/more2.png"></button>
                        </div>
                        <div class="profile-status">
                            <dl class="status">
                                <div class="posts">
                                    <dt>게시물</dt>
                                    <dd>${this.profileInfo.posts.length}</dd>
                                </div>
                                <div class="follower">
                                    <dt>팔로워</dt>
                                    <dd>${this.profileInfo.followers.length}</dd>
                                </div>
                                <div class="follow">
                                    <dt>팔로우</dt>
                                    <dd>${this.profileInfo.followings.length}</dd>
                                <div>
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

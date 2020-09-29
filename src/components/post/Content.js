const Component = require('../../lib/Component');

class Content extends Component {
  constructor({ parent, thumbnail, nickname, description, date, comments, likes }) {
    super(parent);
    this.thumbnail = thumbnail;
    this.nickname = nickname;
    this.description = description;
    this.date = date;
    this.comments = comments;
    this.likes = likes;
  }

  render() {
    return `<div class="content-wrapper">
              <div class="header-wrapper">
                <header class="content-header">
                  <div class="content-profile">
                      <img src="${this.thumbnail}" />
                      <span>${this.nickname}</span>
                      <button type="button">팔로잉</button>
                  </div>
                  <div class="content-tab">
                    <button type="button">
                      <img src="../src/images/more.png" />
                    </button>
                  </div>
                </header>
              </div>
              <div class="inner-wrapper">
                <div class="contents">
                  <img src="${this.thumbnail}" />
                  <div class="content">
                    <div class="detail">
                      <span class="nickname">${this.nickname}</span>
                      <span class="description">${this.description}</span>
                    </div>
                    <div class="date">
                      <span>${this.date}</span>
                    </div>
                  </div>
                </div>
                <div class="comments">
                  ${this.comments
                    .map(
                      (comment) =>
                        `<div class="comment">
                        <img class="thumbnail" src="${comment.thumbnail}" />
                        <div div class="comment-detail">
                          <div class="detail">
                            <span class="nickname">${comment.nickname}</span>
                            <span class="description">${comment.content}</span>
                          </div>
                          <div class="date">
                            <span>${comment.date}</span>
                            <button type="button">답글 달기</button>
                          </div>
                          <div class="comment-list">
                            <span>⎯⎯⎯⎯⎯</span>
                            <button type="button">답글 보기(1개)</button>
                          </div>
                        </div>
                        <img class="heart" src="../src/images/heart.png" />
                      </div>`
                    )
                    .join('')}
                </div>
              </div>
              <div class="tabs-wrapper">
                <div class="tabs">
                  <div class="left-tab">
                    <img src="../src/images/heart.png" alt="" />
                    <img src="../src/images/comment.png" alt="" />
                    <img src="../src/images/share.png" alt="" />
                  </div>
                  <div class="right-tab">
                    <span class="pictures-length"></span>
                    <span class="save">
                      <img src="../src/images/save.png" alt="" />
                    </span>
                  </div>
                </div>
                <div class="like-count">
                  <span>좋아요 ${this.likes}개</span>
                </div>
                <div class="date">
                  <span>${this.date}<span>
                </div>
              </div>
              <div class="comment-area">
                <form action="POST">
                  <textarea class="text-comment" placeholder="댓글 달기..."></textarea>
                  <button type="button">게시</button>
                </form>
              </div>
            </div>
    `;
  }
}

module.exports = Content;

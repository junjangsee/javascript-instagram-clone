const Component = require('../../lib/Component');

class Content extends Component {
  constructor({ parent, thumbnail, nickname }) {
    super(parent);
    this.thumbnail = thumbnail;
    this.nickname = nickname;
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
                      <span class="description">안녕하세요 저는 김준형입니다. 안녕하세요 저는 김준형입니다. 안녕하세요 저는 김준형입니다. 안녕하세요 저는 김준형입니다. 안녕하세요 저는 김준형입니다. 안녕하세요 저는 김준형입니다. 안녕하세요 저는 김준형입니다.</span>
                    </div>
                    <div class="date">
                      <span>2020-05-20</span>
                    </div>
                  </div>
                </div>
                <div class="comments">
                  <div class="comment">
                    <img class="thumbnail" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E" />
                    <div class="comment-detail">
                      <div class="detail">
                        <span class="nickname">umbrella_ryu</span>
                        <span class="description">오오오</span>
                      </div>
                      <div class="date">
                        <span>1주</span>
                        <button type="button">답글 달기</button>
                      </div>
                      <div class="comment-list">
                        <span>⎯⎯⎯⎯⎯</span>
                        <button type="button">답글 보기(1개)</button>
                      </div>
                    </div>
                    <img class="heart" src="../src/images/heart.png" />
                  </div>
                  <div class="comment">
                    <img class="thumbnail" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24283C3858F778CA2E" />
                    <div class="comment-detail">
                      <div class="detail">
                        <span class="nickname">umbrella_ryu</span>
                        <span class="description">오오오</span>
                      </div>
                      <div class="date">
                        <span>1주</span>
                        <button type="button">답글 달기</button>
                      </div>
                      <div class="comment-list">
                        <span>⎯⎯⎯⎯⎯</span>
                        <button type="button">답글 보기(1개)</button>
                      </div>
                    </div>
                    <img class="heart" src="../src/images/heart.png" />
                  </div>
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
                  <span>좋아요 345개</span>
                </div>
                <div class="date">
                  <span>3일 전<span>
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

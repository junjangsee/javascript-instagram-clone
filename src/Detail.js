const Component = require('./lib/Component');

class Detail extends Component {
  constructor(parent, nickname, likes, content, comments, date) {
    super(parent);
    this.nickname = nickname;
    this.likes = likes;
    this.content = content;
    this.comments = comments;
    this.date = date;
  }

  render() {
    return `
      <div class="feed-detail">
      <div class="feed-info">
        <div class="tabs">
          <div class="left-tab">
            <span class="like">
              <img src="../src/images/heart.png" alt="" />
            </span>
            <span class="comment">
              <img src="../src/images/comment.png" alt="" />
            </span>
            <span class="share">
              <img src="../src/images/share.png" alt="" />
            </span>
          </div>
          <div class="right-tab">
            <span class="pictures-length"></span>
            <span class="save">
              <img src="../src/images/save.png" alt="" />
            </span>
          </div>
        </div>
        <div class="likes">
          <button type="button">
            좋아요
            <span class="likes-length">${this.likes.length}</span>
          </button>
        </div>
        <div class="contents">
          <span class="nickname">${this.nickname}</span>
          <span class="content"
            >${this.content}</span
          >
          <span class="more">
            <button type="button">더보기</button>
          </span>
        </div>
        <div class="comments">
          <a class="comments-length" href="">
            <span>댓글 ${this.comments.length}개 모두 보기</span>
          </a>
          <ul class="comment-lists">
          ${this.comments
            .map(
              (comment) =>
                `
              <li class="list">
                <div class="comment-info">
                  <span class="nickname">
                    <a href="">${comment.nickname}</a>
                  </span>
                  <span class="list">${comment.comment}</span>
                </div>
              </li>
              `
            )
            .join('')}
          </ul>
          <div class="since">
            <a href="">
              <span>${this.date}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-area">
      <form action="POST">
        <textarea class="text-comment" placeholder="댓글 달기..."></textarea>
        <button type="button">게시</button>
      </form>
    </div>
      `;
  }
}

module.exports = Detail;

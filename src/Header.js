class Header {
  constructor(thumbnail, nickname) {
    this.thumbnail = thumbnail;
    this.nickname = nickname;
  }

  render() {
    return `
    <header class="peed-header">
      <div class="user-profile">
        <a class="thumbnail" href="">
          <img src="${this.thumbnail}" alt="userthumbnail" />
        </a>
        <a class="nickname" href="">
          <span>${this.nickname}</span>
        </a>
      </div>
      <div class="user-tab">
        <button type="button">
          <img src="../src/images/more.png" alt="" />
        </button>
      </div>
    </header>
    `;
  }
}

module.exports = Header;

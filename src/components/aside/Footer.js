class Footer {
  constructor(datas) {
    this.datas = datas;
  }

  render() {
    return `<ul class="main-footer">
                ${this.datas.map((data) => `<li class="footer-text">${data}</li>`)}
            </ul>`;
  }
}

module.exports = Footer;

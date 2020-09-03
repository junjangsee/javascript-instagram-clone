class Picture {
  constructor(pictures) {
    this.pictures = pictures;
  }

  render() {
    return `
      <div class="main-pictures">
        <ul class="pictures">
            ${this.pictures.map(
              (picture) =>
                `
              <li class="picture">
                <img src="${picture.picture}" alt="" />
              </li>
              `
            )}
        </ul>
      </div>
      `;
  }
}

module.exports = Picture;

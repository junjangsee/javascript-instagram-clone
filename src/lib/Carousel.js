const Component = require('./Component');
const Image = require('./Image');

class Carousel extends Component {
  constructor(parent, images, startIndex = 0) {
    super(parent);
    this.images = images;
    this.startIndex = startIndex;
  }

  mount() {
    const maxLength = this.images.length;
    let index = this.startIndex;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');

    prevButton.addEventListener('click', () => {
      if (index === 0) return;
      index -= 1;

      carousel.style.transform = `translate3d(-${614 * index}px, 0, 0)`;
    });

    nextButton.addEventListener('click', () => {
      if (index === maxLength - 1) return;
      index += 1;

      carousel.style.transform = `translate3d(-${614 * index}px, 0, 0)`;
    });
  }

  render() {
    return `
        <div class="carousel-wrapper">
            <div class="carousel">
                ${this.images.map((image) => new Image(this, image.image).render()).join('')}
            </div>
        </div>
        <button class="prev" type="button">prev</button>
        <button class="next" type="button">next</button>
      `;
  }
}

module.exports = Carousel;

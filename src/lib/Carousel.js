const Component = require('./Component');
const Image = require('../components/shared/Image');

class Carousel extends Component {
  constructor(parent, images, startIndex = 0) {
    super(parent);
    this.images = images;
    this.startIndex = startIndex;
    this.mount = this.mount.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  mount() {
    this.carousel = document.querySelector(`#${this.id}`);

    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselWidth = window.getComputedStyle(carouselWrapper).width.replace('px', '');
    const prevButton = this.carousel.parentElement.children[1];
    const nextButton = this.carousel.parentElement.children[2];

    prevButton.addEventListener('click', () => {
      this.prev(carouselWidth);
    });

    nextButton.addEventListener('click', () => {
      this.next(carouselWidth);
    });
  }

  prev(width) {
    if (this.startIndex === 0) return;
    this.startIndex -= 1;

    this.carousel.style.transform = `translate3d(-${width * this.startIndex}px, 0, 0)`;
  }

  next(width) {
    if (this.startIndex === this.images.length - 1) return;
    this.startIndex += 1;

    this.carousel.style.transform = `translate3d(-${width * this.startIndex}px, 0, 0)`;
  }

  render() {
    return `
        <div class="carousel-wrapper">
            <div class="carousel" id=${this.id}>
                ${this.images.map((image) => new Image({ src: image.image }).render()).join('')}
            </div>
            ${this.components.map((component) => component.render()).join('')}
        </div>
      `;
  }
}

module.exports = Carousel;

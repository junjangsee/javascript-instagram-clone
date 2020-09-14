const Component = require('./Component');
const Image = require('../components/Image');

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

    const prevButton = this.carousel.parentElement.children[1];
    const nextButton = this.carousel.parentElement.children[2];

    prevButton.addEventListener('click', () => {
      this.prev();
    });

    nextButton.addEventListener('click', () => {
      this.next();
    });
  }

  prev() {
    if (this.startIndex === 0) return;
    this.startIndex -= 1;

    this.carousel.style.transform = `translate3d(-${614 * this.startIndex}px, 0, 0)`;
  }

  next() {
    if (this.startIndex === this.images.length - 1) return;
    this.startIndex += 1;

    this.carousel.style.transform = `translate3d(-${614 * this.startIndex}px, 0, 0)`;
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

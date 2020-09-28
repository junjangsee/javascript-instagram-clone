const { subject } = require('./Subject');

class Page {
  constructor(router) {
    subject.reset();
    this.router = router;
  }

  render() {
    subject.render();
  }

  mount() {
    subject.mount();
  }
}

module.exports = Page;

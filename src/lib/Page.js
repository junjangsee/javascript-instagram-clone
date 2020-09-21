const { subject } = require('./Subject');

class Page {
  render() {
    subject.render();
  }

  mount() {
    subject.mount();
  }
}

module.exports = Page;

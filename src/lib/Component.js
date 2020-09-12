const Observable = require('./Observable');

class Component extends Observable {
  components = [];

  constructor(parent) {
    super();
    super.registration(!parent ? this : null);
    if (parent) {
      parent.addChild(this);
    }
  }

  addChild(child) {
    this.components.push(child);
  }

  render() {}

  mount() {
    this.components.forEach((component) => component.mount());
  }

  updated() {}

  end() {}
}

module.exports = Component;

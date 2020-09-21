const Observable = require('./Observable');

const uniqueId = Math.floor(Math.random() * 10000000);
let uniqueIdCount = uniqueId;

class Component extends Observable {
  components = [];
  id = '';

  constructor(parent) {
    super();
    super.registration(!parent ? this : null);
    if (parent) {
      parent.addChild(this);
    }
    this.id = `component_id_${uniqueIdCount++}`;
  }

  addChild(child) {
    this.components.push(child);
  }

  render() {
    this.components.map((component) => component.render());
  }

  mount() {
    this.components.forEach((component) => component.mount());
  }

  updated() {}

  end() {}
}

module.exports = Component;

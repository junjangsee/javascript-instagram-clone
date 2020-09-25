const Observable = require('./Observable');

const uniqueId = Math.floor(Math.random() * 10000000);
let uniqueIdCount = uniqueId;

class Component extends Observable {
  components = [];
  stringComponents = '';
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

  renderToString() {
    if (this.components.length === 0) {
      return null;
    }

    this.components.map((component) => (this.stringComponents += component.render()));
    return this.stringComponents;
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

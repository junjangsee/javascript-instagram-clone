class Subject {
  observerCollection = [];

  constructor() {
    this.app = document.getElementById('app');
  }

  render() {
    this.app.innerHTML = this.observerCollection.map((component) => component.render()).join('');
  }

  mount() {
    this.observerCollection.forEach((component) => {
      component.mount();
    });
  }

  registration(observer) {
    this.observerCollection.push(observer);
  }

  reset() {
    this.observerCollection = [];
  }
}

const subject = new Subject();

module.exports = { Subject, subject };

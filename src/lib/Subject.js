class Subject {
  observerCollection = [];

  constructor() {
    this.app = document.getElementById('app');
  }

  render() {
    this.app.innerHTML += this.observerCollection.map((component) => component.render()).join('');
  }

  registration(observer) {
    this.observerCollection.push(observer);
  }
}

const subject = new Subject();

module.exports = { Subject, subject };

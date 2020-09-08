const { subject } = require('./Subject');

class Observable {
  registration(target) {
    if (target) {
      subject.registration(target);
    }
  }
}

module.exports = Observable;

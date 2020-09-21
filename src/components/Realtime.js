const Component = require('../lib/Component');

class Realtime extends Component {
  constructor({ parent, people }) {
    super(parent);
    this.people = people;
  }

  render() {
    return `<div class="realtime-wrapper">
                <div class="realtime">
                    <ul class="people">
                        ${this.people
                          .map((person) =>
                            person.isRealtime
                              ? `
                        <li class="person">
                            <div class="image-wrapper">
                                <img src="${person.thumbnail}"/>
                            </div>
                            <span>${person.nickname}</span>
                        </li>`
                              : null
                          )
                          .join('')}
                    </ul>
                </div>
            </div>`;
  }
}

module.exports = Realtime;

const Component = require('../../lib/Component');

class Story extends Component {
  constructor(parent, stories) {
    super(parent);
    this.stories = stories;
  }

  render() {
    return `<div class="story-wrapper">
                ${this.stories
                  .map(
                    (story) =>
                      `
                        <div class="story">
                          <img src="${story.thumbnail}"/>
                          <span>${story.title}</span>
                        </div>
                      `
                  )
                  .join('')}
            </div>`;
  }
}

module.exports = Story;

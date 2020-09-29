const Component = require('../../lib/Component');

class Post extends Component {
  constructor(parent, posts) {
    super(parent);
    this.posts = posts;
  }

  getSeparatePosts() {
    const postLength = this.posts.length;
    const allPosts = [];
    let posts = [];
    let count = 0;

    for (let i = 0; i < postLength; i += 1) {
      count += 1;
      posts.push(this.posts[i]);

      if (count === 3) {
        allPosts.push(posts);
        posts = [];
        count = 0;
      }

      if (count < 3 && i - (postLength - 1) === 0) {
        allPosts.push(posts);
      }
    }

    return allPosts;
  }

  makePostsEl() {
    const postsWrapper = document.createElement('div');

    for (let i = 0; i < this.getSeparatePosts().length; i += 1) {
      const postsEl = document.createElement('div');
      postsEl.classList.add('posts');

      for (let j = 0; j < this.getSeparatePosts()[i].length; j += 1) {
        const post = document.createElement('div');
        post.classList.add('post');
        post.id = this.getSeparatePosts()[i][j].id;

        const button = document.createElement('button');
        button.classList.add('post-button');
        const img = document.createElement('img');
        img.src = this.getSeparatePosts()[i][j].images[0].image;

        button.appendChild(img);
        post.appendChild(button);
        postsEl.appendChild(post);
      }

      postsWrapper.appendChild(postsEl);
    }

    return postsWrapper.innerHTML;
  }

  render() {
    return `<div class="posts-wrapper">
                ${this.makePostsEl()}
            </div>`;
  }
}

module.exports = Post;

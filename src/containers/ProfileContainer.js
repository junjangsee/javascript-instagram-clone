const Component = require('../lib/Component');

class ProfileContainer extends Component {
  constructor({ parent, posts, router }) {
    super(parent);
    this.posts = posts;
    this.router = router;
  }

  mount() {
    this.getPostIds().forEach((postId) => {
      document.querySelector(`#post_${postId}`).addEventListener('click', () => {
        this.router.push(`/post/${postId}`);
      });
    });
  }

  getPostIds() {
    const posts = this.posts.map((post) => {
      return post.id;
    });

    return posts;
  }

  getPostInfo(postId) {
    const postInfo = this.posts.reduce((acc, curr) => {
      if (curr.id === postId) {
        acc.push(curr);
      }

      return acc;
    }, []);

    return postInfo;
  }

  render() {
    return '';
  }
}

module.exports = ProfileContainer;

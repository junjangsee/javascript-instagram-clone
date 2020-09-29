const Container = require('../components/shared/Container');
const Page = require('../lib/Page');
const PostContainer = require('../containers/PostContainer');
const Image = require('../components/shared/Image');

class PostPage extends Page {
  constructor({ router = null }) {
    super(router);

    const postWrapper = new Container({ tag: 'div', className: 'post-wrapper' });
    new Image({ parent: postWrapper, src: '../src/images/exit.png' });
    const post = new Container({ parent: postWrapper, tag: 'div', className: 'post' });
    new PostContainer(post);
  }
}

module.exports = PostPage;

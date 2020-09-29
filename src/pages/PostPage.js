const Container = require('../components/shared/Container');
const Page = require('../lib/Page');
const PostContainer = require('../containers/PostContainer');
const Button = require('../components/shared/Button');
const Image = require('../components/shared/Image');

class PostPage extends Page {
  constructor({ router, datas }) {
    super(router, datas);

    const postWrapper = new Container({ tag: 'div', className: 'post-wrapper' });
    const exitButton = new Button({
      parent: postWrapper,
      className: 'exit-button',
      onClick: function () {
        router.push('/profile');
      },
    });
    new Image({ parent: exitButton, src: '../src/images/exit.png' });
    const post = new Container({ parent: postWrapper, tag: 'div', className: 'post' });
    new PostContainer({ parent: post, postInfo: datas });
  }
}

module.exports = PostPage;

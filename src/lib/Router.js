class Router {
  nowPage = '';
  pages = [];

  constructor({ pages }) {
    this.pages = pages;
    window.onhashchange = () => {
      this.nowPage = window.location.hash.replace('#', '');
      const page = this.pages.find((page) => page.path === this.nowPage);
      const Page = page.page;
      const currentPage = new Page(this);
      currentPage.render();
      currentPage.mount();
    };
  }

  push(pageName) {
    window.location.hash = pageName;
  }

  replace(pageName) {
    window.location.replace(`${window.location.origin}#${pageName}`);
  }
}

module.exports = Router;

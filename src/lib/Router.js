class Router {
  nowPage = '';
  pages = [];
  routeIndex = '';

  constructor({ pages }) {
    this.pages = pages;
    window.onhashchange = () => {
      this.nowPage = window.location.hash.replace('#', '');
      const page = this.pages.find((page) =>
        this.nowPage.replace('/', '').includes(page.path.replace('/', ''))
      );
      const postPath = this.nowPage.split('/');
      const id = postPath[postPath.length - 1];
      this.routeIndex = id;
      const Page = page.page;
      const currentPage = new Page({ router: this });
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

  getRouteIndex() {
    return this.routeIndex;
  }
}

module.exports = Router;

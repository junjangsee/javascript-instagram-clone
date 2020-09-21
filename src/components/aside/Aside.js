const Component = require('../../lib/Component');

class Aside extends Component {
  render() {
    return `<div class="recommend-aside">
                ${this.components.map((component) => component.render()).join('')}
            </div>`;
  }
}

module.exports = Aside;

// 쓸데없는 코드들 다 재사용
// 파일 하나로 통합한다.
// feed도 마찬가지.

// 메인 페이지
// 프로필 페이지

// 라이프 사이클!!!!!!
// 철학을 이해하고 공부해야함

// 왜 이런 형태를 사용해서 개발을 하고 있는가?
// 에 대해 학습해오기 @@@@

// 한 줄 한 줄 잘 생각....

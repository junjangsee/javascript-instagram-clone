class API {
  constructor(url) {
    this.url = url;
    this.request = new XMLHttpRequest();
  }

  open(method, data) {
    return new Promise((resolve, reject) => {
      this.request.open(method, this.url);
      this.request.onload = () => {
        this.onload(resolve, reject);
      };

      if (data) {
        this.request.setRequestHeader('content-type', 'application/json');
        this.request.send(JSON.stringify(data));
      } else {
        this.request.send();
      }
    });
  }

  onload(resolve, reject) {
    if (this.request.status === 200 || this.request.status === 201) {
      resolve(this.request.responseText);
    } else {
      reject(Error('응답 실패'));
    }
  }

  get() {
    return this.open('GET');
  }

  post(data) {
    return this.open('POST', data);
  }
}

module.exports = API;

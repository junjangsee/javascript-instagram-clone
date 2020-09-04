const datas = require('./data.json');
const Peed = require('./src/Peed');

const peeds = datas.map((data) => new Peed(data));

const app = document.getElementById('app');

app.innerHTML += peeds.map((peed) => peed.render()).join('');

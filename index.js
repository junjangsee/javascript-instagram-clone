const datas = require('./data.json');
const { subject } = require('./src/lib/Subject');

const Render = require('./src/Render');

const init = new Render(datas);
init.render();

subject.render();
subject.mount();

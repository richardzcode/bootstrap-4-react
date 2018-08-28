import README from './README.md';
import gettingStarted from './getting-started';
import layout from './layout';
import components from './components';
import utilities from './utilities';

const repo = {};

function fillRepo(category, category_key) {
  Object.keys(category).forEach(key => {
    const doc = category[key];
    repo[category_key + '/' + key] = doc;
    if (!repo[category_key]) { repo[category_key] = doc; }
  })
}

fillRepo(gettingStarted, 'getting-started');
fillRepo(layout, 'layout');
fillRepo(components, 'components');
fillRepo(utilities, 'utilities');

class Docs {
  findDoc(path) {
    return repo[path] || README;
  }
}

const docs = new Docs();
export default docs;

const Alert1 = components.Alert1;
export { Alert1 };

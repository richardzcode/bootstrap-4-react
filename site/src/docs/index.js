import README from './README.md';
import gettingStarted from './getting-started';
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
fillRepo(components, 'components');
fillRepo(utilities, 'utilities');

class Docs {
  findDoc(path) {
    return repo[path] || README;
  }
}

const docs = new Docs();
export default docs;

var glob = require('glob');
var fs = require('fs-extra');
var algoliasearch = require('algoliasearch');

var config = require('./config');

var client = algoliasearch(
  config.application_id,
  config.api_key
);
var index = client.initIndex('docs');

function indexingFile(file) {
  var path = file.replace(root + '/', '');

  var obj = readFile(file);
  obj.objectID = path.replace('.md', '');
  index.addObjects([obj], function(err, content) {
    if (err) {
      console.log('ERR', err);
    } else {
      console.log(content);
    }
  });
}

function readFile(file) {
  var content = fs.readFileSync(file, { encoding: 'utf8' });
  var lines = content.split(/\r?\n/)
    .filter(line => line.trim());
  if (lines.length === 0) { return ''; }

  var title = lines[0].replace(/^#+/, '').trim();
  var contentLines = stripCode(lines.slice(1));

  return {
    title: title,
    content: contentLines.join('\n\n')
  }
}

function stripCode(lines) {
  var after = [];
  var open = false;
  lines.forEach(line => {
    if (open) { return; }
    if (line.startsWith('```')) {
      open = !open;
      return;
    }
    after.push(line);
  });
  return after;
}

var CWD = process.cwd(),
    root = CWD + '/src/docs';

glob.sync(root + '/*/*.md', { dot: false })
  .filter(file => indexingFile(file));

const yaml = require('js-yaml');
const fs   = require('fs');
const exec = require('child_process').exec;

let keys = [];

try {
  const doc = yaml.safeLoad(fs.readFileSync('./src/constants/data.yml', 'utf8'));
  keys = Object.keys(doc);
} catch (e) {
  console.log(e);
}

keys.forEach((key) => {
  const script = `IDEA_TYPE=${key} yarn run build`;
  console.log(script);
  exec(script, (err, stdout, stderr) => {
    if (err) { console.log(err); }
    console.log(stdout);
  });
});

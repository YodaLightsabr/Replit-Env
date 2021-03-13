const fs = require('fs');
function filterEnv (filter) {
  var object = {};
  Object.keys(process.env).filter(k => k.startsWith(filter)).map(item => object[item] = process.env[item]);
  return object;
}
function getCode () {
  var object = filterEnv("L");
  var items = [];
  for (var i = 0; i < Object.keys(object).length; i++) {
    items.push(object["L"+i])
  }
  return items;
}
function getString () {
  return getCode().join`\n`;
}
function run () {
  var id = Date.now() + ("_" + Math.floor(Math.random() * 10000));
  fs.writeFileSync('replit-env-'+id+'.js', getString(), 'utf-8');
  return require('./replit-env-'+id+'.js');
  fs.writeFileSync('replit-env-'+id+'.js', '', 'utf-8');
}
module.exports = run;

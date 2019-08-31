
const fs = require('fs');
const nodeModules = {};

fs.readdirSync('node_modules')
    .filter(dir => ['.bin'].indexOf(dir) === -1)
    .forEach(m => nodeModules[m] = 'commonjs ' + m);

module.exports = nodeModules;

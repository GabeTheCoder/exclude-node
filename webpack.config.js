
const excludeNode = require('./src');

const js = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
};

const config = {
    entry: './src/index',
    target: 'node',
    output: { path: __dirname + '/dist', filename: 'index.js' },
    module: { rules: [js] },
    stats: { children: false },
    externals: excludeNode
};

module.exports = [config];

const path = require('path');

const rootPath = path.resolve(__dirname, '../');

const srcPath = path.resolve(rootPath, './src');
const publicPath = path.resolve(rootPath, './public');

module.exports = {
	rootPath,
	srcPath,
	publicPath,
};

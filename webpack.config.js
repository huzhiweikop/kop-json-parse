const path = require("path");
module.exports = {
	entry: "./index.js",
	output: {
		libraryTarget: "umd",
		globalObject: "typeof self !== 'undefined' ? self : this",
		filename: "index.js",
		path: path.resolve(__dirname, "lib")
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};

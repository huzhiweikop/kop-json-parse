let kopJsonParse = require('./src/index.js')
if(typeof window != 'undefined'){
	window.kopJsonParse = kopJsonParse;
}
module.exports = require('./src/index.js');
exports.default = require('./src/index.js');

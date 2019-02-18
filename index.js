let kopJsonParse = require('./src/index.js')
if(typeof window != 'undefined'){
	window.kopJsonParse = kopJsonParse;
}
module.exports = kopJsonParse;
exports.default = kopJsonParse;

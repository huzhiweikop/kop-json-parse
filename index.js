let kopJsonParse = require('./src/index.js')
if(window){
	window.kopJsonParse = kopJsonParse;
}
module.exports = kopJsonParse;
exports.default = kopJsonParse;

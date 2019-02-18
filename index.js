let kopJsonParse = require('./src/index.js')
if(typeof window != 'undefined'){
	window.kopJsonParse = kopJsonParse;
}
console.log(kopJsonParse);
module.exports = kopJsonParse;

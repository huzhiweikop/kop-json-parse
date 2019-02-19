let kopJsonParse = (str) =>{
	if(typeof str !== 'string'){
		return str
	}
	try {
		return JSON.parse(str)
	} catch (e) {
		return str
	}
}
if(typeof window != 'undefined'){
	window.kopJsonParse = kopJsonParse
}
module.exports = kopJsonParse

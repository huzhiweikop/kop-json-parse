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

if(typeof module != 'undefined'){
	module.exports = kopJsonParse
}

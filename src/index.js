let kopJsonParse = (str) =>{
	if(typeof str !== 'string'){
		return str
	}
	if(str.trim() == ''){
		return {}
	}
	try {
		return JSON.parse(str)
	} catch (e) {
		return str
	}
}
module.exports = kopJsonParse

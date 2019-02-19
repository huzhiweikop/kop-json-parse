function kopJsonParse(str,defaultResult){
	//传参不是字符串，返回参数本身
	if(typeof str != 'string'){
		return str
	}
	//传参为字符串
	try {
		return JSON.parse(str)
	} catch (e) {
		if(arguments.length == 1){
			return str
		}
		else {
			return defaultResult
		}
	}
}
if(typeof window != 'undefined'){
	window.kopJsonParse = kopJsonParse
}
module.exports = kopJsonParse

# kop-json-parse

 解决JSON.parse()中传参为非规范JSON字符串而导致抛出异常问题。

```
kopJsonParse(str,defaultResult) //第二个参数可选
```

-  若参数str不是字符串类型，则返回str本身,忽略参数defaultResult。
-  若参数str是字符串类型：
    -  如果JSON.parse(str)未抛出异常，则返回JSON.parse(str)的结果,忽略参数defaultResult。
    -  如果JSON.parse(str)抛出异常，若设置defaultResult参数，则返回defaultResult，否则返回参数本身。


```
//示例
//若参数str不是字符串类型，则返回str本身,忽略参数defaultResult
kopJsonParse(1) //1
kopJsonParse({a:1}) //{a:1}
kopJsonParse([1,2]) //[1,2]
kopJsonParse(function(){}) //ƒ (){}
kopJsonParse(new Date()) //Tue Feb 19 2019 14:22:07 GMT+0800 (中国标准时间)

//参数str是字符串类型
//如果JSON.parse(str)未抛出异常，则返回JSON.parse(str)的结果,忽略参数defaultResult
kopJsonParse('{}') //{}
kopJsonParse('true') //true
kopJsonParse('"foo"') //"foo"
kopJsonParse('[1, 5, "false"]') //[1, 5, "false"]
kopJsonParse('null') //null
kopJsonParse('1') //1

//参数str是字符串类型
//如果JSON.parse(str)抛出异常，若设置defaultResult参数，则返回defaultResult，否则返回参数本身
kopJsonParse('') //''
kopJsonParse('abcd',{}) //{}
kopJsonParse('a,b,c,d') //"a,b,c,d"
kopJsonParse('a,b,c,d',[]) //[]

```


## Install

- 下载地址：https://github.com/huzhiweikop/kop-json-parse/releases
- NPM：`npm i kop-json-parse`
- CDN：http://unpkg.com/kop-json-parse/lib/index.js

## Usage

```
//引入方法(CDN下载不需要这一步)
let kopJsonParse = require('kopJsonParse')

//执行方法
kopJsonParse(str,defaultResult)
```

## Test

- Runkit：https://npm.runkit.com/kop-json-parse

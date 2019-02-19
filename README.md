# kop-json-parse

 解决JSON.parse()中传参为非标准json字符串而导致报错问题。
-  标准json字符串返回JSON.parse()的结果，非标准json字符串返回字符串本身。
-  参数若不是字符串类型，将返回参数本身。

## Install

- 下载地址：https://github.com/huzhiweikop/kop-json-parse/releases
- NPM：`npm i kop-json-parse`
- CDN：http://unpkg.com/kop-json-parse/lib/index.js

## Usage

```
//引入方法(CDN下载不需要这一步)
let kopJsonParse = require('kopJsonParse')

//执行方法
kopJsonParse(str)
```

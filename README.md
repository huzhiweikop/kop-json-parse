# kop-json-parse

## 介绍

 解决JSON.parse()中传参为非标准json字符串而导致报错问题。
 非标准json字符串返回字符串本身。
 参数若不是字符串类型，将返回参数本身。

## 安装下载

- 下载地址：https://github.com/huzhiweikop/kop-json-parse/releases
- NPM：`npm i kop-json-parse`
- CDN：http://unpkg.com/kop-json-parse/lib/index.js

## 使用方法


```
//引入方法（cdn方式不用引入，会直接写入window对象kopJsonParse属性）
let kopJsonParse = require('kopJsonParse')
//执行方法
kopJsonParse(str)
```

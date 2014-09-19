# Koa Override Method

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/koa-override-method.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-override-method
[travis-image]: https://img.shields.io/travis/koajs/override-method.svg?style=flat-square
[travis-url]: https://travis-ci.org/koajs/override-method
[coveralls-image]: https://img.shields.io/coveralls/koajs/override-method.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/koajs/override-method?branch=master
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
[david-image]: https://img.shields.io/david/koajs/override-method.svg?style=flat-square
[david-url]: https://david-dm.org/koajs/override-method
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/koa-override-method.svg?style=flat-square
[download-url]: https://npmjs.org/package/koa-override-method

Method override middleware.
Let you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

## Install

```bash
$ npm install koa-override-method
```

## Usage

```js
var bodyParser = require('koa-body-parser')
var override = require('koa-override-method')

app.use(bodyParser())
app.use(override())
```

## API

### var mw = override()

If `body` exists, check `body._method` first.
Otherwise check `X-HTTP-Method-Override` header.

If there is no override parameter, then it's simply `this.request.method`.
You shouldn't use this unless you know you're using override.

## License

The MIT License (MIT)

Copyright (c) 2014 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


var methods = require('methods').map(function (method) {
  return method.toUpperCase()
})

module.exports = overrideMethod;

function overrideMethod() {
  return function* (next) {
    var method = this.request.method

    // body support
    var body = this.request.body
    if (body && body._method) method = body._method.toUpperCase()

    // header support
    var header = this.req.headers['x-http-method-override']
    if (header) method = header.toUpperCase()

    // only allow supported methods
    // if you want to support other methods,
    // just create your own utility!
    if (!~methods.indexOf(method)) this.throw(400, 'invalid overriden method: "' + method + '"')

    this.request.method = method;

    yield* next;
  }
}

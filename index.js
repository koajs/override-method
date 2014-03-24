
var methods = require('methods').map(function (method) {
  return method.toUpperCase()
})

module.exports = function overrideMethod(body) {
  var method = this.request.method

  // body support
  if (body && body._method) method = body._method.toUpperCase()

  // header support
  var header = this.req.headers['x-http-method-override']
  if (header) method = header.toUpperCase()

  // only allow supported methods
  // if you want to support other methods,
  // just create your own utility!
  if (!~methods.indexOf(method)) this.throw(400, 'invalid overriden method: "' + method + '"')

  return method
}
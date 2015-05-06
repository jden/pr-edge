var edge = require('edge')
var Promise = require('polyfill-promise')

function prEdge (src) {
  var func = edge.func(src)
  return function (obj) {
    return new Promise(function (resolve, reject) {
      func(obj, function (e, ret) {
        if (e) { return reject(e) }
        resolve(ret)
      })
    })
  }
}

module.exports = prEdge
module.exports.func = prEdge
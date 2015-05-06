# pr-edge
promisified edge.js

## usage
```js
var edge = require('pr-edge')

var hello = edge(function () {/*

  async (name) => {
    return String.Format("Hello {0}", name);
  }

*/})

hello('friend').then(console.log)
// => "Hello friend"
```


## api
see [edge.js](https://www.npmjs.com/package/edge)

Can be called as plain function (npm idiomatic) or `.func` method (.Net idiomatic).

Created function proxy returns a Promise.


## installation

    $ npm install pr-edge


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXV jden <jason@denizac.org>. See LICENSE.md

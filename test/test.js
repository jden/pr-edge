require('chai').should()

describe('pr-edge', function () {
  var edge = require('../')
  
  it('', function (done) {

    var hello = edge(function () {/*

      async (name) => {
        return String.Format("Hello {0}", name);
      }

    */})

    hello('friend').then(function (x) {
      x.should.equal('Hello friend')
    })
    .then(done, done)

  })
})
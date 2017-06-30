var expect = require('chai').expect
var sum = require ('../examples/sum')

describe('Testing Suite', function(){
  context('sum()', function() {
    it('returns the addition of two parameters', function() {
      let a = 1
      let b = 3
      expect(sum(a,b)).to.be.equal(4)
    })

  })
})

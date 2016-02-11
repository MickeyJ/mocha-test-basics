var code = require('../main.js');
var expect = require('chai').expect;

describe('Test', function(){

  it('for String', function(){

      expect(code.helloWorld()).to.equal('Hello World');

  });
});
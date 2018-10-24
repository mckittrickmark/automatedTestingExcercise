const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../nameFormatter');


describe('invert name', function() {
  it('return an empty string when passed an empty string', function (){
    let nF = new NameFormatter

    let name = ""

    let formatName = nF.invertName(name)
    assert.equal(formatName, '')
  })
  it('return a single name when passed a single name', function (){
    let nF = new NameFormatter
    let name = 'Single'

    let formatName = nF.invertName(name)
    assert.equal(formatName, 'Single')
  })
  it('return a single name when passed a single name with extra spaces', function (){
    let nF = new NameFormatter
    let name = 'Single  '

    let formatName = nF.invertName(name)
    assert.equal(formatName, 'Single')
  })
  it('return a last-name, first-name when passed a first and last-name', function (){
    let nF = new NameFormatter
    let name = 'First Last'

    let formatName = nF.invertName(name)
    assert.equal(formatName, 'Last, First')
  })
  it('return a last-name, first-name when passed a first and last-name with extra spaces around the names ', function (){
    let nF = new NameFormatter
    let name = 'First  Last  '

    let formatName = nF.invertName(name)
    assert.equal(formatName, 'Last, First')
  })
  it('return an empty string when passed a single honorific', function (){
    let nF = new NameFormatter
    let name = 'Dr.'

    let formatName = nF.invertName(name)
    assert.equal(formatName, '')
  })
  it('return honorific first-name when passed honorific first-name', function (){
    let nF = new NameFormatter
    let name = 'Dr. Spaghetti'

    let formatName = nF.invertName(name)
    assert.equal(formatName, 'Dr. Spaghetti')
  })
  it('return a honorific last-name, first-name when passed honorific first-name last-name', function (){
    let nF = new NameFormatter
    let name = 'Dr. Belvedere Spaghetti'

    let formatName = nF.invertName(name)
    assert.equal(formatName, 'Dr. Spaghetti, Belvedere')
  })
  it('return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function (){
    let nF = new NameFormatter
    let name = 'Dr.   Belvedere  Spaghetti  '

    let formatName = nF.invertName(name)
    assert.equal(formatName, 'Dr. Spaghetti, Belvedere')
  })
  it('throw an error when name is undefined', function (){
    let nF = new NameFormatter
    let name = undefined

    let formatName = nF.invertName(name)
    assert.equal(formatName, Error)
  })

});
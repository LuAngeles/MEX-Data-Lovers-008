//require('../src/data.js');


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('../test/data.spec.js');

//Ver que sea una función carData//

describe('cardData',() => {
  it ('Debería ser una función',() =>{
    assert.equal(typeof cardData,'function')
  });
})

//Ver que sea una función sorData//
describe('sorData',()=>{
  it('Debería ser una función',()=>{
    assert.equal(typeof sorData,'function')
  });


it('Debería retornar "Abra","Aerodactyl",Alakazam" ordenando los pokémones de A a Z',()=>{
  assert.equal((dataPokemon,'name','ASC')[0,1,2]);
})
})

// PRUEBAS CON SILVANA 10/07/19////


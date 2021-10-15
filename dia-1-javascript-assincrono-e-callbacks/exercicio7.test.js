const { it, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Verifica se casa retorna CASA: ', (done) => {
  uppercase('casa', (str) => {
    try {
      expect(str).toBe('CASA');
      done();
    } catch (error){
      done(error)
    }
  })
})

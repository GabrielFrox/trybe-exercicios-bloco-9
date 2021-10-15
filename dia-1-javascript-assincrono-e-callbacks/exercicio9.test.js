// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectError = new Error('Não temos esse pokémon para você :(');

    function callback(error, message) {
      expect(error).toEqual(expectError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Arceus', callback);
  });
  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember'

    function callback(error, message) {
      expect(message).toBe(expectString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});
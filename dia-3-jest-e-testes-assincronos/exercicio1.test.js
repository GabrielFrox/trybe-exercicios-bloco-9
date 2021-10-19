// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

describe('Teste se o fetch retorna o array desejado:', () => {
  test('Testa se sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram no resultado', async () => {
    const currentArray = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(currentArray).toContain('sd-01-week4-5-project-todo-list');
    expect(currentArray).toContain('sd-01-week4-5-project-meme-generator');
  })
})
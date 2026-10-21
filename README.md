# Livro de Pokémons

Um buscador de Pokémons feito com HTML, CSS e JavaScript puro, consumindo a PokéAPI. Você digita o nome (ou o número) de um Pokémon e o card mostra a imagem, o nome e o tipo, com a cor do card mudando de acordo com o tipo.
🔗 Ver online: (coloque aqui o link da Vercel)
O que o projeto faz
Busca um Pokémon pelo nome ou número, clicando no botão ou apertando Enter
Mostra imagem, nome e tipo no card
Muda a cor do card conforme o tipo (elétrico, fogo, água, grama e psíquico)
Exibe "Buscando..." enquanto espera a API responder
Avisa na tela quando o Pokémon não é encontrado
Já abre a página com o Pikachu carregado
Tecnologias
HTML
CSS (flexbox, grid, `box-shadow`, `::before` com `blur` para o efeito esfumaçado)
JavaScript (`fetch`, `async/await`, manipulação do DOM, eventos)
PokéAPI
Como rodar
Baixe ou clone este repositório
Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code)
Não precisa instalar nada.
Estrutura

```text
pokedex/
├── index.html
├── style.css
├── script.js
└── pokebola.svg
```

O que aprendi
Consumir uma API com `fetch` e `async/await`
Que `res.json()` transforma a resposta da API em um objeto JavaScript
Navegar dentro do objeto até o dado que eu preciso, como em `data.types[0].type.name`
Que variáveis criadas dentro de uma função só existem ali dentro (escopo)
Mudar o conteúdo da página com `textContent`, `innerHTML` e `src`
Ouvir eventos de clique e de teclado com `addEventListener`
Tratar erro com `res.ok` e avisar o usuário na própria página
Trocar a classe do card pelo JS para mudar o estilo conforme o tipo

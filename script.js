async function buscar(pokemon) {
  // Essa função é a estrutura que chama a API.
  const mensagem = document.getElementById("mensagem"); // A const mensagem guarda o elemento erro que vem do document HTML.
  mensagem.textContent = "Buscando..."; // A variavel mensagem mostrar na tela a mensagem para caso a API demore a enviar os dados do pokemon digitado.
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (!res.ok) {
    // Essa linha verifica se a response esta ok
    mensagem.textContent = "Pokémon não encontrado"; // aqui ela exibe a mensagem não encontrado caso não seja ok
    return;
  }

  mensagem.textContent = ""; // Aqui apaga o aviso Buscando...  que aparece na tela quando o pokemon não é encotrado

  const data = await res.json(); // Aqui transforma a resposta da API que vem em formatoJSON e transforma em objeto JS, POR ISSO FOI NECESSARIO COLCOA A MSG BUSCANDO PORQUE DEMORAUM POUCO A RESPOSTA DA API

  const imagem = document.getElementById("imagem"); // Na variavel imagem é guardado o link da imagem que vem da API e exibe na tela o pokemon buscado
  imagem.src = data.sprites.front_default;

  const nome = document.getElementById("nome");
  nome.textContent = data.name.toUpperCase(); // renderiza o nome do pokemon e tranforma ele em maiusculo

  const tipo = document.getElementById("tipo");
  tipo.innerHTML = `Tipo: <span class="tipo-nome">${data.types[0].type.name.toUpperCase()}</span>`; // Aqui eu usei o innerHTML no tipo de pokemon para da um destaque criando o span

  const card = document.querySelector(".card");
  card.classList =
    "card " +
    data.types[0].type
      .name; /* Aqui o classList substitui a classe toda vez que um tipo de pokmon é chamado deixando o
   card com estilo diferente que esta criado no CSS. Exemplo, o tipo de pokmon fogo, deixa o card laranja cor de fogo */
}

const botao = document.getElementById("botao");
const busca = document.getElementById("busca");

botao.addEventListener("click", () => {
  // aqui é o evento de click de busca esta ligado ao botão, que chama a funçao de busca trazendo o pokemon
  buscar(busca.value.toLowerCase().trim());
});

busca.addEventListener("keydown", (evento) => {
  // aqui o evento de teclado que ao aperta enter ele faz a mesma coisa que o evento de click do botão
  if (evento.key === "Enter") {
    buscar(busca.value.toLowerCase().trim());
  }
});

buscar("pikachu"); // por fim a função é chamada requisitando a API

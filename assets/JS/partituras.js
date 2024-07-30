// partituras.js

export const musicas = {
  musica1: [
    ["Twinkle Twinkle Little Star"],
    [
      ["do", 1],
      ["do", 1],
      ["sol", 1],
      ["sol", 1],
      ["la", 1],
      ["la", 1],
      ["sol", 2],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 1],
      ["re", 1],
      ["do", 2],
    ],
    [
      ["sol", 1],
      ["sol", 1],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 2],
      ["sol", 1],
      ["sol", 1],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 2],
    ],
    [
      ["do", 1],
      ["do", 1],
      ["sol", 1],
      ["sol", 1],
      ["la", 1],
      ["la", 1],
      ["sol", 2],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 1],
      ["re", 1],
      ["do", 2],
    ],
  ],
  musica2: [
    ["Do Re Mi Fa"],
    [
      ["do", 1],
      ["re", 1],
      ["mi", 1],
      ["fa", 1],
      ["fa", 1],
      ["fa", 2],
      ["do", 1],
      ["re", 1],
      ["do", 1],
      ["re", 1],
      ["re", 1],
      ["re", 2],
      ["", 0],
      ["", 0],
    ],
    [
      ["do", 1],
      ["sol", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["mi", 2],
      ["do", 1],
      ["re", 1],
      ["mi", 1],
      ["fa", 1],
      ["fa", 1],
      ["fa", 2],
      ["", 0],
      ["", 0],
    ],
    [
      ["do", 1],
      ["re", 1],
      ["mi", 1],
      ["fa", 1],
      ["fa", 1],
      ["fa", 2],
      ["do", 1],
      ["re", 1],
      ["mi", 1],
      ["fa", 1],
      ["fa", 1],
      ["fa", 2],
      ["", 0],
      ["", 0],
    ],
  ],
  musica3: [
    ["Black Sheep"],
    [
      ["do", 1],
      ["do", 1],
      ["sol", 1],
      ["sol", 1],
      ["la", 1],
      ["la", 1],
      ["sol", 2],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 1],
      ["re", 1],
      ["do", 2],
    ],
    [
      ["sol", 1],
      ["sol", 1],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 2],
      ["sol", 1],
      ["sol", 1],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 2],
    ],
    [
      ["do", 1],
      ["do", 1],
      ["sol", 1],
      ["sol", 1],
      ["la", 1],
      ["la", 1],
      ["sol", 2],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["mi", 1],
      ["re", 1],
      ["re", 1],
      ["do", 2],
    ],
  ],
  musica4: [
    ["Happy Birthday"],
    [
      ["do", 1],
      ["do", 1],
      ["re", 1],
      ["do", 1],
      ["fa", 1],
      ["mi", 2],
      ["do", 1],
      ["do", 1],
      ["re", 1],
      ["do", 1],
      ["sol", 1],
      ["fa", 2],
      ["", 0],
      ["", 0],
    ],
    [
      ["do", 1],
      ["do", 1],
      ["do", 1],
      ["la", 1],
      ["fa", 1],
      ["mi", 1],
      ["re", 2],
      ["la", 1],
      ["la", 1],
      ["fa", 1],
      ["fa", 1],
      ["mi", 1],
      ["re", 2],
      ["", 0],
    ],
  ],
};

// Função para gerar links dinâmicos no dropdown
export function gerarLinksMusicas() {
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (!dropdownMenu) {
    console.error("Elemento do dropdown não encontrado.");
    return;
  }

  // Limpa o conteúdo atual do dropdown
  dropdownMenu.innerHTML = "";

  // Itera sobre o objeto musicas
  for (const chave in musicas) {
    if (musicas.hasOwnProperty(chave)) {
      const musica = musicas[chave];
      const nomeMusica = musica[0][0];

      // Cria o link
      const link = document.createElement("a");
      link.className = "dropdown-item text-center"; // Adicione suas classes CSS aqui
      link.href = "#";
      link.textContent = nomeMusica;

      // Adiciona um listener de clique para trocar a música
      link.addEventListener("click", () => {
        trocarMusica(musica);
      });

      // Adiciona o link ao dropdown
      dropdownMenu.appendChild(link);
    }
  }
}

// Função para trocar a música (exportada para uso no notas.js)
export function trocarMusica(musica) {
  // Função definida em notas.js que deve ser importada
  window.trocarMusica(musica);
}

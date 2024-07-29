// Mapeamento das notas para números
const notaParaNumero = {
  do: 12,
  re: 11,
  mi: 10,
  fa: 9,
  sol: 8,
  la: 7,
  si: 6,
  "do+": 5,
  "re+": 4,
  "mi+": 3,
  "fa+": 2,
  "sol+": 1,
};

let currentNoteTimeout; // Variável para armazenar o timeout da nota atual

// Função para exibir a partitura
function exibirPartitura(musica) {
  // Definir o título da partitura
  document.getElementById("tittle").innerHTML = musica[0][0];

  // Iterar pelas linhas da partitura
  for (let linha = 1; linha < musica.length; linha++) {
    for (let posicao = 0; posicao < musica[linha].length; posicao++) {
      const nota = Array.isArray(musica[linha][posicao])
        ? musica[linha][posicao][0]
        : musica[linha][posicao];
      const numeroNota = notaParaNumero[nota] || 0;

      // Definir a variável para a linha e a posição
      const x = posicao + 2; // Ajustar a posição
      const y = linha;

      // Selecionar o elemento correspondente e exibir a imagem
      const elemento = document.querySelector(
        `body .pentagrama_${y} .linhas_espacos:nth-child(${x}) div:nth-child(${numeroNota}) img`
      );

      if (elemento) {
        elemento.style.display = "block"; // Exibe a nota
      }
    }
  }
}

// Função para exibir as notas com círculos sequencialmente
function exibirNotasSequenciais(musica) {
  let currentNoteIndex = 0;
  let maxNotes = 0;

  // Calcula o número máximo de notas
  for (let linha = 1; linha < musica.length; linha++) {
    maxNotes += musica[linha].length;
  }

  // Função que exibe o círculo na nota atual e remove o círculo da nota anterior
  function showNextNote() {
    if (currentNoteIndex > 0) {
      // Remove o círculo da nota anterior
      const previousNote = document.querySelector(".highlight");
      if (previousNote) {
        previousNote.classList.remove("highlight");
      }
    }

    if (currentNoteIndex >= maxNotes) {
      clearTimeout(currentNoteTimeout); // Limpa o timeout quando todas as notas foram exibidas
      return;
    }

    let counter = 0;

    // Encontra a nota atual baseada no índice
    for (let linha = 1; linha < musica.length; linha++) {
      for (let posicao = 0; posicao < musica[linha].length; posicao++) {
        if (counter === currentNoteIndex) {
          const nota = musica[linha][posicao];
          const notaValor = Array.isArray(nota) ? nota[0] : nota;
          const duracao = Array.isArray(nota) ? nota[1] : 1;
          const numeroNota = notaParaNumero[notaValor] || 0;

          // Definir a variável para a linha e a posição
          const x = posicao + 2; // Ajustar a posição
          const y = linha;

          // Selecionar o elemento correspondente e exibir o círculo
          const elemento = document.querySelector(
            `body .pentagrama_${y} .linhas_espacos:nth-child(${x}) div:nth-child(${numeroNota}) img`
          );

          if (elemento) {
            elemento.classList.add("highlight"); // Adicionar classe para o círculo vermelho
          }

          currentNoteTimeout = setTimeout(showNextNote, duracao * 1000); // Configura o próximo destaque após a duração especificada
          currentNoteIndex++; // Incrementa o índice da nota atual
          return; // Sai da função para esperar o próximo destaque
        }
        counter++;
      }
    }
  }

  // Inicia a exibição das notas
  showNextNote();
}

// Função para limpar a partitura (notas apenas)
function limparNotas() {
  const notas = document.querySelectorAll(".notas");
  notas.forEach((img) => {
    img.classList.remove("highlight"); // Remove a borda
  });
}

// Função para limpar a exibição da partitura
function limparPartitura() {
  const notas = document.querySelectorAll(".notas");
  notas.forEach((img) => {
    img.style.display = "none"; // Esconde todas as notas
  });
}

// Função para parar a exibição dos círculos
function pararExibicao() {
  clearTimeout(currentNoteTimeout); // Limpa o timeout
  limparNotas(); // Limpa destaques de notas anteriores
}

// Função para trocar a música
function trocarMusica(musica) {
  global = musica;
  pararExibicao(); // Para a exibição dos círculos
  limparPartitura(); // Limpa todas as notas da partitura
  exibirPartitura(global); // Exibe a nova partitura
}

// Definir a música padrão
const musicas = {
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

// Define a música padrão
let global = musicas.musica1;

// Chama a função para exibir a partitura inicial
exibirPartitura(global);

// Adicionar event listeners para os links das músicas
document.querySelector(".m1").addEventListener("click", () => {
  trocarMusica(musicas.musica1);
});
document.querySelector(".m2").addEventListener("click", () => {
  trocarMusica(musicas.musica2);
});
document.querySelector(".m3").addEventListener("click", () => {
  trocarMusica(musicas.musica3);
});
document.querySelector(".m4").addEventListener("click", () => {
  trocarMusica(musicas.musica4);
});

// Adicionar event listener para o botão Play
document.getElementById("playButton").addEventListener("click", () => {
  limparNotas(); // Limpar qualquer destaque de nota anterior
  exibirNotasSequenciais(global); // Exibir as notas sequencialmente
});

// Adicionar event listener para o botão Stop
document.getElementById("stopButton").addEventListener("click", () => {
  pararExibicao(); // Parar a exibição dos círculos
});

// Adicionar event listener para o botão Imprimir
document.getElementById("printButton").addEventListener("click", () => {
  window.print(); // Imprime a partitura
});

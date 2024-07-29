function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Definição das músicas
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
      ["", 0],
      ["", 0],
    ],
    [
      ["do", 1],
      ["fa", 1],
      ["mi", 1],
      ["re", 1],
      ["do", 1],
      ["re", 1],
      ["do", 1],
      ["do", 1],
      ["do", 1],
      ["re", 1],
      ["do", 1],
      ["re", 1],
      ["mi", 1],
      ["fa", 2],
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
      ["fa", 1],
      ["la", 1],
      ["fa", 1],
      ["mi", 1],
      ["re", 2],
      ["fa", 1],
      ["sol", 1],
      ["la", 1],
      ["fa", 1],
      ["sol", 1],
      ["fa", 2],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
  ],
};

let global = musicas.musica3;
let interval = null;

// Update the text content of music links
document.querySelector(".m1").textContent = musicas.musica1[0][0];
document.querySelector(".m2").textContent = musicas.musica2[0][0];
document.querySelector(".m3").textContent = musicas.musica3[0][0];
document.querySelector(".m4").textContent = musicas.musica4[0][0];

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
        elemento.style.display = "block"; // Mostrar a imagem
      }
    }
  }
}

// Função para exibir as notas com círculos sequencialmente
function exibirNotasSequenciais(musica) {
  let currentNoteIndex = 0;
  let maxNotes = 0;
  let tempoAcumulado = 0;

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
      clearInterval(interval); // Para o intervalo quando todas as notas foram exibidas
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

          tempoAcumulado += duracao; // Adiciona a duração ao tempo acumulado
          setTimeout(showNextNote, duracao * 1000); // Configura o próximo destaque após a duração especificada
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

// Função para limpar a partitura
function limparPartitura() {
  const notas = document.querySelectorAll(".notas");
  notas.forEach((img) => {
    img.classList.remove("highlight"); // Remove a borda
  });
}

// Função para trocar a música
function trocarMusica(musica) {
  global = musica;
  limparPartitura();
  exibirPartitura(global);
}

// Adicionar event listeners para os links das músicas
document.querySelector(".m1").addEventListener("click", () => {
  trocarMusica(musicas.musica1);
  clearInterval(interval); // Parar qualquer intervalo anterior
});
document.querySelector(".m2").addEventListener("click", () => {
  trocarMusica(musicas.musica2);
  clearInterval(interval);
});
document.querySelector(".m3").addEventListener("click", () => {
  trocarMusica(musicas.musica3);
  clearInterval(interval);
});
document.querySelector(".m4").addEventListener("click", () => {
  trocarMusica(musicas.musica4);
  clearInterval(interval);
});

// Adicionar event listener para o botão Play
document.getElementById("playButton").addEventListener("click", () => {
  limparPartitura(); // Limpar qualquer destaque anterior
  exibirNotasSequenciais(global);
});

// Chamar a função com a música inicial
exibirPartitura(global);

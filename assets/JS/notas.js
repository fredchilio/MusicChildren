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
      "do",
      "do",
      "sol",
      "sol",
      "la",
      "la",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
      "re",
      "do",
    ],
    [
      "sol",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
      "sol",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
    ],
    [
      "do",
      "do",
      "sol",
      "sol",
      "la",
      "la",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
      "re",
      "do",
    ],
  ],
  musica2: [
    ["Do Re Mi Fa"],
    [
      "do",
      "re",
      "mi",
      "fa",
      "fa",
      "fa",
      "do",
      "re",
      "do",
      "re",
      "re",
      "re",
      "do",
      "sol",
    ],
    [
      "fa",
      "mi",
      "mi",
      "mi",
      "do",
      "re",
      "mi",
      "fa",
      "fa",
      "fa",
      "",
      "",
      "",
      "",
    ],
    [
      "do",
      "fa",
      "mi",
      "re",
      "do",
      "re",
      "do",
      "do",
      "do",
      "re",
      "do",
      "re",
      "mi",
      "fa",
    ],
  ],
  musica3: [
    ["Black Sheep"],
    [
      "do",
      "do",
      "sol",
      "sol",
      "la",
      "la",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
      "re",
      "do",
    ],
    [
      "sol",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
      "sol",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
    ],
    [
      "do",
      "do",
      "sol",
      "sol",
      "la",
      "la",
      "sol",
      "fa",
      "fa",
      "mi",
      "mi",
      "re",
      "re",
      "do",
    ],
  ],
  musica4: [
    ["Happy Birthday"],
    [
      "do",
      "do",
      "re",
      "do",
      "fa",
      "mi",
      "do",
      "do",
      "re",
      "do",
      "sol",
      "fa",
      "",
      "",
    ],
    [
      "do",
      "do",
      "fa",
      "la",
      "fa",
      "mi",
      "re",
      "fa",
      "sol",
      "la",
      "fa",
      "sol",
      "fa",
      "",
    ],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ],
};

let global = musicas.musica3;

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

  let currentNoteIndex = 0;
  let maxNotes = 0;

  // Calcula o número máximo de notas
  for (let linha = 1; linha < musica.length; linha++) {
    maxNotes += musica[linha].length;
  }

  // Função que exibe a nota atual e limpa a anterior
  function showNextNote() {
    if (currentNoteIndex >= maxNotes) {
      return;
    }

    // Limpa todas as notas anteriores
    limparPartitura();

    let counter = 0;

    // Encontra a nota atual baseada no índice
    for (let linha = 1; linha < musica.length; linha++) {
      for (let posicao = 0; posicao < musica[linha].length; posicao++) {
        if (counter === currentNoteIndex) {
          const nota = musica[linha][posicao];
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
            elemento.style.border = "2px solid red"; // Adicionar círculo vermelho
            elemento.style.borderRadius = "50%"; // Tornar a borda redonda
          }
        }
        counter++;
      }
    }
    currentNoteIndex++;
  }

  // Inicia a exibição das notas a cada segundo
  showNextNote();
  const interval = setInterval(() => {
    showNextNote();
    if (currentNoteIndex >= maxNotes) {
      clearInterval(interval);
    }
  }, 1000);
}

function limparPartitura() {
  const notas = document.querySelectorAll(".notas");
  notas.forEach((img) => {
    img.style.display = "none";
    img.style.border = "none"; // Remove a borda
  });
}

// Função para trocar a música
function trocarMusica(musica) {
  global = musica;
  limparPartitura();
  exibirPartitura(global);
}

// Adicionar event listeners para os links das músicas
document
  .querySelector(".m1")
  .addEventListener("click", () => trocarMusica(musicas.musica1));
document
  .querySelector(".m2")
  .addEventListener("click", () => trocarMusica(musicas.musica2));
document
  .querySelector(".m3")
  .addEventListener("click", () => trocarMusica(musicas.musica3));
document
  .querySelector(".m4")
  .addEventListener("click", () => trocarMusica(musicas.musica4));

// Chamar a função com a música inicial
exibirPartitura(global);

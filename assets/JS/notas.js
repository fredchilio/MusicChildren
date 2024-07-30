// notas.js

import { gerarLinksMusicas, musicas } from "./partituras.js"; // Importa as funções e objeto

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
  document.getElementById("tittle").innerHTML = musica[0][0];
  for (let linha = 1; linha < musica.length; linha++) {
    for (let posicao = 0; posicao < musica[linha].length; posicao++) {
      const nota = Array.isArray(musica[linha][posicao])
        ? musica[linha][posicao][0]
        : musica[linha][posicao];
      const numeroNota = notaParaNumero[nota] || 0;
      const x = posicao + 2;
      const y = linha;
      const elemento = document.querySelector(
        `body .pentagrama_${y} .linhas_espacos:nth-child(${x}) div:nth-child(${numeroNota}) img`
      );
      if (elemento) {
        elemento.style.display = "block";
      }
    }
  }
}

// Função para exibir as notas com círculos sequencialmente
function exibirNotasSequenciais(musica) {
  let currentNoteIndex = 0;
  let maxNotes = 0;
  for (let linha = 1; linha < musica.length; linha++) {
    maxNotes += musica[linha].length;
  }
  function showNextNote() {
    if (currentNoteIndex > 0) {
      const previousNote = document.querySelector(".highlight");
      if (previousNote) {
        previousNote.classList.remove("highlight");
      }
    }
    if (currentNoteIndex >= maxNotes) {
      clearTimeout(currentNoteTimeout);
      return;
    }
    let counter = 0;
    for (let linha = 1; linha < musica.length; linha++) {
      for (let posicao = 0; posicao < musica[linha].length; posicao++) {
        if (counter === currentNoteIndex) {
          const nota = musica[linha][posicao];
          const notaValor = Array.isArray(nota) ? nota[0] : nota;
          const duracao = Array.isArray(nota) ? nota[1] : 1;
          const numeroNota = notaParaNumero[notaValor] || 0;
          const x = posicao + 2;
          const y = linha;
          const elemento = document.querySelector(
            `body .pentagrama_${y} .linhas_espacos:nth-child(${x}) div:nth-child(${numeroNota}) img`
          );
          if (elemento) {
            elemento.classList.add("highlight");
          }
          currentNoteTimeout = setTimeout(showNextNote, duracao * 1000);
          currentNoteIndex++;
          return;
        }
        counter++;
      }
    }
  }
  showNextNote();
}

// Função para limpar a partitura (notas apenas)
function limparNotas() {
  const notas = document.querySelectorAll(".notas");
  notas.forEach((img) => {
    img.classList.remove("highlight");
  });
}

// Função para limpar a exibição da partitura
function limparPartitura() {
  const notas = document.querySelectorAll(".notas");
  notas.forEach((img) => {
    img.style.display = "none";
  });
}

// Função para parar a exibição dos círculos
function pararExibicao() {
  clearTimeout(currentNoteTimeout);
  limparNotas();
}

// Define a função de troca de música no escopo global
window.trocarMusica = function (musica) {
  global = musica;
  pararExibicao();
  limparPartitura();
  exibirPartitura(global);
};

// Define a música padrão
let global = musicas.musica1;
exibirPartitura(global);

// Adiciona event listeners para os links das músicas
document.querySelector(".m1").addEventListener("click", () => {
  window.trocarMusica(musicas.musica1);
});
document.querySelector(".m2").addEventListener("click", () => {
  window.trocarMusica(musicas.musica2);
});
document.querySelector(".m3").addEventListener("click", () => {
  window.trocarMusica(musicas.musica3);
});
document.querySelector(".m4").addEventListener("click", () => {
  window.trocarMusica(musicas.musica4);
});
document.querySelector(".m5").addEventListener("click", () => {
  window.trocarMusica(musicas.musica5);
});

// Adiciona event listener para o botão Play
document.getElementById("playButton").addEventListener("click", () => {
  limparNotas();
  exibirNotasSequenciais(global);
});

// Adiciona event listener para o botão Stop
document.getElementById("stopButton").addEventListener("click", () => {
  pararExibicao();
});

// Adiciona event listener para o botão Imprimir
document.getElementById("printButton").addEventListener("click", () => {
  window.print();
});

// Adiciona event listener para gerar links de músicas quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", gerarLinksMusicas);

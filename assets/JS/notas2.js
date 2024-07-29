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
let interval = null;

// Mapeamento das notas para números
const notaParaNumero = {
  do: 1,
  re: 2,
  mi: 3,
  fa: 4,
  sol: 5,
  la: 6,
  si: 7,
  "do+": 8,
};

// Função para exibir a partitura
function exibirPartitura(musica) {
  document.getElementById("tittle").innerHTML = musica[0][0];
  for (let linha = 1; linha < musica.length; linha++) {
    for (let posicao = 0; posicao < musica[linha].length; posicao++) {
      const nota = musica[linha][posicao];
      const numeroNota = notaParaNumero[nota] || 0;

      const x = posicao + 1; // Ajustar a posição
      const y = linha;

      const elemento = document.querySelector(
        `.pentagrama_${y} .linhas_espacos div:nth-child(${x}) img:nth-child(${numeroNota})`
      );

      if (elemento) {
        elemento.style.display = "block"; // Mostrar a imagem
      }
    }
  }
}

// Função para exibir as notas com círculos sequencialmente e tocar MIDI
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
      clearInterval(interval);
      return;
    }

    let counter = 0;
    for (let linha = 1; linha < musica.length; linha++) {
      for (let posicao = 0; posicao < musica[linha].length; posicao++) {
        if (counter === currentNoteIndex) {
          const nota = musica[linha][posicao];
          const numeroNota = notaParaNumero[nota] || 0;

          const x = posicao + 1;
          const y = linha;

          const elemento = document.querySelector(
            `.pentagrama_${y} .linhas_espacos div:nth-child(${x}) img:nth-child(${numeroNota})`
          );

          if (elemento) {
            elemento.classList.add("highlight");

            tocarNotaMIDI(numeroNota);
          }
        }
        counter++;
      }
    }
    currentNoteIndex++;
  }

  showNextNote();
  interval = setInterval(() => {
    showNextNote();
  }, 1000);
}

// Função para limpar a partitura
function limparPartitura() {
  const notas = document.querySelectorAll(".notas");
  notas.forEach((img) => {
    img.style.display = "none";
    img.classList.remove("highlight");
  });
}

// Função para tocar uma nota MIDI
function tocarNotaMIDI(numeroNota) {
  const midiNota = 60 + (8 - numeroNota); // Mapeia a nota para a escala MIDI

  MIDI.loadPlugin({
    soundfont: "FluidR3_GM",
    onprogress: function (state, progress) {
      console.log(state, progress);
    },
    onsuccess: function () {
      MIDI.setVolume(0, 127);
      MIDI.noteOn(0, midiNota, 127, 0);
      MIDI.noteOff(0, midiNota, 0.75);
    },
  });
}

// Função para trocar a música
function trocarMusica(musica) {
  global = musica;
  limparPartitura();
  exibirPartitura(global);
}

// Adicionar event listeners para os links das músicas
document;

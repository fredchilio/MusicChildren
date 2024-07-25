function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          
        }
      }
    }
  }

  

  



//Definição das músicas
const musicas = {
    musica1: [
        ['Tinkle1'],
        ['do', 'do', 'sol', 'sol', 'la', 'la', 'sol', 'fa', 'fa', 'mi', 'mi', 're', 're', 'do'],
        ['sol', 'sol', 'fa', 'fa', 'mi', 'mi', 're', 'sol', 'sol', 'fa', 'fa', 'mi', 'mi', 're'],
        ['do', 'do', 'sol', 'sol', 'la', 'la', 'sol', 'fa', 'fa', 'mi', 'mi', 're', 're', 'do']
    ],
    musica2: [
        ['Do Re Mi Fa'],
        ['do', 're', 'mi', 'fa', 'fa', 'fa', 'do', 're', 'do', 're', 're', 're', 'do', 'sol'],
        ['fa', 'mi', 'mi', 'mi', 'do', 're', 'mi', 'fa', 'fa', 'fa', '', '', '', ''],
        ['do', 'fa', 'mi', 're', 'do', 're', 'do', 'do', 'do', 're', 'do', 're', 'mi', 'fa']
    ],
    musica3: [
        ['Black Shep'],
        ['do', 'do', 'sol', 'sol', 'la', 'la', 'sol', 'fa', 'fa', 'mi', 'mi', 're', 're', 'do'],
        ['sol', 'sol', 'fa', 'fa', 'mi', 'mi', 're', 'sol', 'sol', 'fa', 'fa', 'mi', 'mi', 're'],
        ['do', 'do', 'sol', 'sol', 'la', 'la', 'sol', 'fa', 'fa', 'mi', 'mi', 're', 're', 'do']
    ]
};
global=musicas.musica3
//var listaDeHokages = [,'Tobirama','Hiruzen','Minato','Tsunade','Kakashi','Naruto'];
//var Index = 0;
//var titulo = document.querySelector(".tituloDoSite");
var link1 = document.querySelector(".m1");
link1.textContent=musicas.musica1[0][0];





var link2 = document.querySelector(".m2");
link2.textContent=musicas.musica2[0][0];


var link3 = document.querySelector(".m3");
link3.textContent=musicas.musica3[0][0];

let imgm = document.querySelector(".body");
//imgm.style.background = '#eeb7b7 url("../img/sheep3.jpg")';




// Mapeamento das notas para números
const notaParaNumero = {
    'do': 12,
    're': 11,
    'mi': 10,
    'fa': 9,
    'sol': 8,
    'la': 7,
    'si': 6,
    'do+': 5,
    're+': 4,
    'mi+': 3,
    'fa+': 2,
    'sol+': 1
};

// Função para exibir a partitura
function exibirPartitura(musica) {
    // Definir o título da partitura
    document.getElementById('tittle').innerHTML = musica[0][0];

    // Iterar pelas linhas da partitura
    for (let linha = 1; linha < musica.length; linha++) {
        for (let posicao = 0; posicao < musica[linha].length; posicao++) {
            const nota = musica[linha][posicao];
            const numeroNota = notaParaNumero[nota] || 0;

            // Definir a variável para a linha e a posição
            const x = posicao + 2; // Ajustar a posição
            const y = linha;

            // Selecionar o elemento correspondente e exibir a imagem
            const elemento = document.querySelector(`body .pentagrama_${y} .linhas_espacos:nth-child(${x}) div:nth-child(${numeroNota}) img`);
            
            if (elemento) {
                elemento.style.display = 'block'; // Mostrar a imagem
            }
        }
    }
}

function limparPartitura() {
        const notas = document.querySelectorAll(".notas");
        notas.forEach(img => img.style.display = 'none');
        const notas2 = document.querySelectorAll(".notas");
        notas2.forEach(img => img.style.display = 'none');
        const notas3 = document.querySelectorAll(".notas");
        notas3.forEach(img => img.style.display = 'none');
    }

// Chamar a função com a música desejada
exibirPartitura(global);
link1.addEventListener("click", function(){

    global = musicas.musica1;
    limparPartitura()
    exibirPartitura(global)

    
    
    })
    
    link2.addEventListener("click", function(){

        global = musicas.musica2;
        limparPartitura();
        exibirPartitura(global);
        imgm.style.background="none";
       imgm.getElementsByTagName("body")[0].style = 'background-image:url("../img/sheep3.jpg");'
       
       
        
        })

        link3.addEventListener("click", function(){

            global = musicas.musica3;
            limparPartitura()
           
            exibirPartitura(global)
            
            })
/***const notaParaNumero = {
    'do': 12,
    're': 11,
    'mi': 10,
    'fa': 9,
    'sol': 8,
    'la': 7,
    'si': 6,
    'do+': 5,
    're+': 4,
    'mi+': 3,
    'fa+': 2,
    'sol+': 1
};

function exibirPartitura(musica) {
    // Limpar partitura existente
    for (let i = 1; i <= 3; i++) {
        const pentagrama = document.querySelector(`#pentagrama${i}`);
        pentagrama.innerHTML = '';
        for (let j = 0; j < 5; j++) {
            pentagrama.innerHTML += `<div class="linha" id="linha${(i - 1) * 5 + j + 1}"></div>`;
            pentagrama.innerHTML += `<div class="espaco" id="espaco${(i - 1) * 5 + j + 1}"></div>`;
        }
    }

    // Definir o título da partitura
    document.getElementById('tittle').innerHTML = musica[0][0];

    // Iterar pelas linhas da partitura
    for (let linha = 1; linha < musica.length; linha++) {
        for (let posicao = 0; posicao < musica[linha].length; posicao++) {
            const nota = musica[linha][posicao];
            const numeroNota = notaParaNumero[nota] || 0;

            // Criar um elemento para a nota
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.style.gridRow = numeroNota;

            // Adicionar a nota ao pentagrama
            const pentagrama = document.querySelector(`#pentagrama${linha}`);
            if (pentagrama) {
                pentagrama.appendChild(noteElement);
            }
        }
    }
}***/

 
var musica1 = [
    ['Tinkle1'],
    ['do', 'do', 'sol','sol','la','la','sol','fa','fa','mi','mi','re','re','do'],
    ['sol','sol','fa','fa','mi','mi','re','sol','sol','fa','fa','mi','mi','re'],
    ['do', 'do', 'sol','sol','la','la','sol','fa','fa','mi','mi','re','re','do']];
    var musica2 = [
    ['Tinkle2'],
    ['re', 're', 'la','sol','la','la','sol','fa','fa','mi','mi','re','re','do'],
    ['sol','sol','fa','fa','mi','mi','re','sol','sol','fa','fa','mi','mi','re'],
    ['do', 'do', 'sol','sol','la','la','sol','fa','fa','mi','mi','re','re','do']];
    var musica3 = [
    ['Tinkle3'],
    ['mi', 'mi', 'si','sol','la','la','sol','fa','fa','mi','mi','re','re','do'],
    ['sol','sol','fa','fa','mi','mi','re','sol','sol','fa','fa','mi','mi','re'],
    ['do', 'do', 'sol','sol','la','la','sol','fa','fa','mi','mi','re','re','do']];

var notes = [
   ['Tinkle'],
   ['do', 'do', 'sol','sol','la','la','sol','fa','fa','mi','mi','re','re','do'],
   ['sol','sol','fa','fa','mi','mi','re','sol','sol','fa','fa','mi','mi','re'],
   ['do', 'do', 'sol','sol','la','la','sol','fa','fa','mi','mi','re','re','do']];
    
   //var cssStart = [notes]    
        
      
             
              //function sheetMusic(notas){
              
                var notes_numbers=0;
                
                //for (var a = 0; a<cssStart.length; a++){//dois dias para conseguir colocar as figuras do css no estado inicial (none)
                    //cssStart[a].style.display='none'
               // }
                cssStart=[]
                     
            
               
                
               
               
                

cssStart = musica3
//

document.getElementById('tittle').innerHTML=cssStart[0][0]
for(var z = 1;z<4;z++ ){
    for (var i = 0; i<cssStart[z].length; i++){ // demorei muito para descobrir o tamanho(lenght) de um arrary bidimensional
        
        switch(cssStart[z][i]){
            case "do":
                notes_numbers=12
                break;
            case "re":
                notes_numbers=11
                break;           
            case "mi":
                notes_numbers=10
                break;
            case "fa":
                notes_numbers=9
                break;
            case "sol":
                notes_numbers=8
                break;
            case "la":
                notes_numbers=7
                break;
            case "si":
                notes_numbers=6
                break;
            case "do+":
                notes_numbers=5
                break;
            case "re+":
                notes_numbers=4
                break;
            case "mi+":
                notes_numbers=3
                break;
            case "fa+":
                notes_numbers=2
                break;
            case "sol+":
                notes_numbers=1
                break;
            case"":
                break;
                
        }
        
    
    var x = i+2;//para nao afetar o 'i' tive que criar uma variavel x para aplicar no comando abaixo
    var y = z;
    
    (document.querySelector(`body .pentagrama_${y} .linhas_espacos:nth-child(${x}) \
    div:nth-child(${notes_numbers}) img`)).style.display='block';//essa barra '\' eh utilizada para separar o codigo em mais de uma linha
    //cssStart[i].style.display='block';
    
    notes_numbers=0;
    
    }
    

//document.querySelector(`body .pentagrama_${y} .linhas_espacos:nth-child(${x}) \
//div:nth-child(${12}) img`).style.backgroundImage = "url('./img/loading-6')";


}
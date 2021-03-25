
// global variables 
let width = 0; 
let height = 0;
let lifes = 1;
let gameTime = 10;
let createMosquitoTime = 1500;

nivel = window.location.search;
nivel = nivel.replace('?', '');

    if(nivel === 'easy'){
        createMosquitoTime;
    }else if(nivel === 'hard'){
        createMosquitoTime = 1000; 
    }else if(nivel === 'veryHard'){
        createMosquitoTime = 750;
    }


function gameSizeAdjust(){
    width = window.innerWidth; 
    height = window.innerHeight;

    console.log(width, height);
}

gameSizeAdjust();

let stopWatch = setInterval(() =>{
    gameTime -= 1;

    if(gameTime < 0){
        clearInterval(stopWatch ); 
        clearInterval(createMosquito);
        window.location.href = 'victory.html'
    }else{
        document.getElementById('chronometer').innerHTML = gameTime;
    
    }

     
},1000)


// Create Element HTML

function randonPosition(){
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(lifes > 3){
            // redirect to the closing page 
            window.location.href = 'game_over.html'
        
         }else{

        document.getElementById(`v${lifes}`).src='imagens/coracao_vazio.png'; 
        lifes++
        }
    }

    let positionX = Math.floor(Math.random() * width) - 90; 
    let positionY = Math.floor(Math.random() * height) - 90;
    
    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX, positionY)

    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png'; 
    mosquito.className = `${randonSize()} ${randomSide()}`;
    mosquito.style.position = 'absolute';
    mosquito.style.left = positionX + 'px'; 
    mosquito.style.top = positionY + 'px'; 
    mosquito.id = 'mosquito'; 
    mosquito.onclick = function () {
        this.remove()
    }
    
    document.body.appendChild(mosquito);

}


function randonSize(){
     let size = Math.floor( Math.random() * 3);
     
     switch(size){
         case 0:
             return 'mosquito1'
         case 1:
             return 'mosquito2'
         case 2:
             return 'mosquito3'         
     }
}

function randomSide() {    
    let size = Math.floor(Math.random() * 2);

    switch(size){
        case 0: 
            return 'sideA'
        case 1: 
            return 'sideB'
    }

}
function startGame(){
    let nivel = document.getElementById('nivel').value;

      if(nivel === ' '){
          alert('Selecione um nível para iniciar o jogo')
          return false;
      } else{
          window.location.href = 'app.html?' + nivel;
      }

    }
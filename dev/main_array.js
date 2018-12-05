
let currentPlayer = 0;
let beforePlayer;
let gamecontinue =true;
const gameState =[];
const occuptedBlocks = document.getElementsByClassName('occupied');
const totalBoxes = document.querySelectorAll (".box");

const divs = document.getElementById('boxContainer');
const div = document.getElementsByClassName('box');
const player0 = document.querySelector('.Player-0');
const player1 = document.querySelector('.Player-1');
const newGame = document.getElementById('button');

player0.setAttribute('class','Player-0 active');
player1.setAttribute('class','Player-1');

newGame.addEventListener('click', reset);

divs.addEventListener('click', function(e){
if (gamecontinue){
    if (e.target.className == 'box unchecked' ) {   
      player0.classList.toggle('active');
      player1.classList.toggle('active');
          if (currentPlayer === 0){  
            e.target.innerHTML = '<img src="o.png" width="100%" height="100%">';
            e.target.setAttribute('class','box red');  
            beforePlayer = currentPlayer;          
            play0Array[e.target.dataset.element] = "1";
            currentPlayer = 1;
 
          } else {
            e.target.innerHTML = '<img src="x.png" width="100%" height="100%">';
            e.target.setAttribute('class','box blue');
            beforePlayer = currentPlayer;
            play1Array[e.target.dataset.element] = "1";
            currentPlayer = 0;
          }    
         
          for (let i = 0 ; i < winCondition.length ; i++) {
              if ((winCondition[i] == play0ArrayValue) || (winCondition[i] == play1ArrayValue) ) {
                console.log("Win")
                // setTimeout(()=>{},5000);
                myfun("Win",beforePlayer);
                gamecontinue =false;
              } else if (document.getElementsByClassName('box red').length == 5 && document.getElementsByClassName('box blue').length == 4){
                swal('This game is draw');
                gamecontinue =false;
                // setTimeout(()=>{},5000);
                myfun("Draw");
              }

          }
    }
  }
});
function reset(){
  for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = "";
    div[i].setAttribute('class','box unchecked');
}
player0.setAttribute('class','Player-0 active');
player1.setAttribute('class','Player-1');
currentPlayer = 0;
play0Array =[0,0,0,0,0,0,0,0];
play1Array =[0,0,0,0,0,0,0,0];
gamecontinue =true;
};

function  myfun(cheker,winner) {
    swal(cheker=="Win"?`player${winner+1} wins the game`:"This game is draw");    
  }


  const isWinner =function(palyer){
    const windcondition = [[0,1,2],[3,4,5],[6,7,8],[2,4,6],[0,4,8],[0,1,2],[0,1,2],[0,1,2]];
    for (const condition of isWwindcondition) {
      if(gamestate[condition[0]] == player && gamestate[condition[1]] == player && gamestate[condition[2]] == player);
      return true;
    }

  }
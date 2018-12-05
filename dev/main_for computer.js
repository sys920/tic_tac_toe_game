// const position = document.getElementsByClassName("");
let play0Array =[0,0,0,0,0,0,0,0];
let play1Array =[0,0,0,0,0,0,0,0];
const wind = [7,56,73,84,146,273,292,448]
let currentPlayer = 0;
let beforePlayer;
let gamecontinue = true;
let firstTimeSpot = true;

const divs = document.getElementById('boxContainer');
const div = document.getElementsByClassName('box');
const player0 = document.querySelector('.Player-0');
const player1 = document.querySelector('.Player-1');
const newGame = document.getElementById('button');

const blankSpot = document.getElementsByClassName('box unchecked'); // find blanksopt for computer
const nextSpot = document.getElementsByClassName('box blue');//find x computer
const redSpot = document.getElementsByClassName('box red');//find O computer

player0.setAttribute('class','Player-0 active');
player1.setAttribute('class','Player-1');

newGame.addEventListener('click', reset);

divs.addEventListener('click', function(e){
if (gamecontinue){
    if (e.target.className == 'box unchecked' || currentPlayer == 2 ) {   
      player0.classList.toggle('active');
      player1.classList.toggle('active');
          if (currentPlayer === 0){  
            e.target.innerHTML = '<img src="o.png" width="100%" height="100%">';
            e.target.setAttribute('class','box red');  
            beforePlayer = currentPlayer;
            currentPlayer = 2;
            play0Array[e.target.id] = "1";  //put the red value  in the newArray
          } else if(currentPlayer === 1){         
            e.target.innerHTML = '<img src="x.png" width="100%" height="100%">';
            e.target.setAttribute('class','box blue');
            beforePlayer = currentPlayer;
            currentPlayer = 0;
            play1Array[e.target.id] = "1";
          } else if(currentPlayer === 2)  {

            if (firstTimeSpot) {    //first position 
                 randomNumber = Math.floor(Math.random() * 9);
                while (  newArray[randomNumber] == "0" || newArray[randomNumber] == "1" ) {
                randomNumber = Math.floor(Math.random() * 9);                
                }
                document.getElementById(randomNumber).innerHTML = '<img src="x.png" width="100%" height="100%">';
                newArray[randomNumber] = "1";
                firstTimeSpot = false;     
            } 


                
              


         
            



            currentPlayer = 0;
          }
      if ((newArray[0]==newArray[1])&&(newArray[1]==newArray[2])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;
      } else if ((newArray[0]==newArray[3])&&(newArray[3]==newArray[6])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;
      } else if ((newArray[1]==newArray[4])&&(newArray[4]==newArray[7])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;
      } else if ((newArray[2]==newArray[5])&&(newArray[5]==newArray[8])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;  
      } else if ((newArray[3]==newArray[4])&&(newArray[4]==newArray[5])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;
      } else if ((newArray[6]==newArray[7])&&(newArray[7]==newArray[8])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;
      } else if ((newArray[0]==newArray[4])&&(newArray[4]==newArray[8])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;
      } else if ((newArray[2]==newArray[4])&&(newArray[4]==newArray[6])){
        swal(`Player${beforePlayer+1} wins the game`);
        gamecontinue =false;
      } else if (document.getElementsByClassName('box red').length ==5 && document.getElementsByClassName('box blue').length==4){
        swal('This game is draw');
        gamecontinue =false;
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
newArray =[11,22,33,44,55,66,77,88,99];
gamecontinue =true;
};


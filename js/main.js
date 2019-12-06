let startGame = document.querySelector('.startGame');
let gameContainer = document.querySelector('.container');
let weapons = document.querySelectorAll('button');
let playerWeaponChoiceImageDiv = document.querySelector('.player');
let computerWeaponChoiceImageDiv = document.querySelector('.computer');
let computerScore = document.querySelector('.computerScore');
let playerScore = document.querySelector('.playerScore');
let statusMessage = document.querySelector('.statusMessage');
let weaponImage = playerWeaponChoiceImageDiv.children[1];
let weaponImageComputer = computerWeaponChoiceImageDiv.children[1];
let roundPlayContainer = document.querySelector('.roundPlayContainer');
let roundsPlay = document.querySelector('.rounds');



startGame.addEventListener('click',showGame);

function showGame(){
    this.style.display = "none";
    gameContainer.style.display = "block";
    roundPlayContainer.style.display = "block";
    roundsPlay.innerHTML=0 ;
    let newMessage = document.querySelector('body');
    newMessage.lastChild.innerHTML="";
}

function hideGame(){
    gameContainer.style.display = "none";
    roundPlayContainer.style.display = "none";
    startGame.style.display = "block";
    startGame.children[0].innerHTML = "Replay";
    
    displayWinner();

    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    roundsPlay.innerHTML=0;
}


function displayWinner(){
    let body = document.querySelector('body');
    let newMessage = document.createElement('h1');
    let text = "";

    if(playerScore.innerHTML > computerScore.innerHTML){
        text = document.createTextNode(`Congratulations! You Won with ${playerScore.innerHTML} Points. Computer had ${computerScore.innerHTML} Point`);
    }
    else{
        text = document.createTextNode(`Sorry! Computer Won with ${computerScore.innerHTML} Points. You had ${playerScore.innerHTML} Point`);
    }
    newMessage.appendChild(text);
    body.appendChild(newMessage);
    
}


// Computer Make Choice a Randomly.

function computerPlay() {

    let weaponToChoose = [ 'rock', 'paper', 'scissor' ];
    weaponImageComputer.classList.add('won');
    
   return  weaponToChoose[Math.floor( Math.random() * weaponToChoose.length )] ;
  
}


// Get click buttons on the page and attach event to them

function getPlayerSelection(){

    let playerSelection = "";
   

    weapons.forEach ( (button) => {
        
            button.addEventListener('click',(e) => {

                playerSelection = e.target.innerHTML.toLowerCase();

                if(roundsPlay.innerHTML > 4){

                  return  hideGame();

                } else{
                    playerVsComputer(playerSelection,computerPlay());
                 
                }
            
                
            });
            
            
        }
    );
    
    
}

getPlayerSelection();
//console.log(playerSelection);





// Player Selection and Computer Selection Test

function playerVsComputer(playerSelection,computerSelection){
    
   

    switch (playerSelection + computerSelection) {
            
        case 'rock' + 'scissor':
                playerScore.innerHTML++;
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} Beat ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} `;
                ++roundsPlay.innerHTML;
            break;

        case 'scissor' + 'paper':
                playerScore.innerHTML++;
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} Beat ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} `;              // roundsPlay++;
                ++roundsPlay.innerHTML;
            break;

        case 'paper' + 'rock':
                playerScore.innerHTML++;
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} Beat ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} `;
                ++roundsPlay.innerHTML;
            break;

         

        case 'paper' + 'paper':
                
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`Its a Draw!! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} Vs ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} `;
                
            break;

        case 'rock' + 'rock':
             
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`Its a Draw! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Vs ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} `;
                
                break;
            
        case 'scissor' + 'scissor':

                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`Its a Draw! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Vs ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} `;
            
                break;
                          
                    
        case 'rock' + 'paper':
                computerScore.innerHTML++;
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`Computer Wins! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} `;
                ++roundsPlay.innerHTML;
                break;

        case 'paper' + 'scissor':
                computerScore.innerHTML++;
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`Computer Wins! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} `;
                ++roundsPlay.innerHTML;
                break;

        case 'scissor' + 'rock':
                computerScore.innerHTML++;
                weaponImage.attributes.src.value = `img/${playerSelection}.png`;
                weaponImageComputer.attributes.src.value = `img/${computerSelection}.png`;
                statusMessage.children[0].innerHTML =`Computer Wins! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} `;
                ++roundsPlay.innerHTML;
                break;


        default:
                console.log("Mi Ah NoBody")
                console.log(playerSelection  + computerSelection);   
            break;
    } 
}




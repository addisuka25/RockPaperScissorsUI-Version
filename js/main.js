let weapons = document.querySelectorAll('button');
let playerWeaponChoiceImageDiv = document.querySelector('.player');
let computerWeaponChoiceImageDiv = document.querySelector('.computer');
let computerScore = document.querySelector('.computerScore');
let playerScore = document.querySelector('.playerScore');

let stustusMessage = document.querySelector('.statusMessage')
let roundsPlay = 1;

let weaponImage = playerWeaponChoiceImageDiv.children[1];
let weaponImageComputer = computerWeaponChoiceImageDiv.children[1];

function getButtons(button){

    button.addEventListener('click',(e) => {

        if( roundsPlay != 6 ){
        

        let computerSelection = computerPlay();

        switch (e.target.id + computerSelection) {
            
            case 'btnRock' + 'scissors':
                    playerScore.innerHTML++;
                    weaponImage.attributes.src.value = 'img/rock.png';
                    weaponImageComputer.attributes.src.value = 'img/scissors.png';
                    stustusMessage.children[0].innerHTML = `You Win! ${e.target.innerHTML} Beat ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} `;
                    roundsPlay++;
                break;

            case 'btnPaper' + 'rock':
                    playerScore.innerHTML++;
                    weaponImage.attributes.src.value = 'img/paper.png';
                    weaponImageComputer.attributes.src.value = 'img/rock.png';
                    stustusMessage.children[0].innerHTML = `You Win! ${e.target.innerHTML} Beat ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} `;
                    roundsPlay++;
                break;

            case 'btnScissors' + 'paper':
                    playerScore.innerHTML++;
                    weaponImage.attributes.src.value = 'img/scissors.png';
                    weaponImageComputer.attributes.src.value = 'img/scissors.png';
                    stustusMessage.children[0].innerHTML = `You Win! ${e.target.innerHTML} Beat ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} `;
                    roundsPlay++;
                break;

             

            case 'btnScissors' + 'rock':
                    computerScore.innerHTML++;
                    weaponImage.attributes.src.value = 'img/scissors.png';
                    weaponImageComputer.attributes.src.value = 'img/rock.png';
                    stustusMessage.children[0].innerHTML = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Beat ${e.target.innerHTML} `;
                    roundsPlay++;
                        break;
            case 'btnRock' + 'paper':
                    computerScore.innerHTML++;
                    weaponImage.attributes.src.value = 'img/rock.png';
                    weaponImageComputer.attributes.src.value = 'img/paper.png';    
                    stustusMessage.children[0].innerHTML = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Beat ${e.target.innerHTML} `;
                    roundsPlay++;
                    break;
                
            case 'btnPaper' + 'scissors':
                    computerScore.innerHTML++;
                    weaponImage.attributes.src.value = 'img/paper.png';
                    weaponImageComputer.attributes.src.value = 'img/scissors.png';   
                    stustusMessage.children[0].innerHTML = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Beat ${e.target.innerHTML} `;
                    roundsPlay++;
                    break;
                              
                        
            case 'btnRock' + 'rock':
                    weaponImage.attributes.src.value = 'img/rock.png';
                    weaponImageComputer.attributes.src.value = 'img/rock.png'; 
            
                    stustusMessage.children[0].innerHTML = `Its a Draw ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Vs ${e.target.innerHTML} `;

                    break;
            case 'btnPaper' + 'paper':
                    weaponImage.attributes.src.value = 'img/paper.png';
                    weaponImageComputer.attributes.src.value = 'img/paper.png'; 
                    stustusMessage.children[0].innerHTML = `Its a Draw ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Vs ${e.target.innerHTML} `;
                    break;
            case 'btnScissors' + 'scissors':
                    weaponImage.attributes.src.value = 'img/scissors.png';
                    weaponImageComputer.attributes.src.value = 'img/scissors.png'; 
                    stustusMessage.children[0].innerHTML = `Its a Draw ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} Vs ${e.target.innerHTML} `;

                    break;


            default:
                    console.log("Mi Ah NoBody")
                break;
        } 


    weaponImage.classList.add('won');

    
     
    }else{

        let weaponDiv = document.querySelectorAll('button');
    //    let replayDiv = document.querySelector('replay');
      
        weaponImage.attributes.src.value = 'img/question.png';
        weaponImageComputer.attributes.src.value = 'img/question.png';
        
        weaponDiv.forEach(function(e){
        e.style.display = 'none'
        })

        /** 
        replayDiv.classList.remove('wrapperHide');
        replayDiv.classList.add('replay')

        */

        if(playerScore > computerScore){
            
            stustusMessage.children[0].innerHTML = `Congratulations! You Won`;
            
         

        }else{
            stustusMessage.children[0].innerHTML = ` Sorry! Computer Won`;
        }
    
} // end of if condition


}) // end of event

 } 
/** else {

    weapons.forEach(function (e) {
        console.log(e.target);
    });

}*/



function computerPlay() {

    let weaponToChoose = [ 'rock', 'paper', 'scissors' ];
    weaponImageComputer.classList.add('won');
    
   return  weaponToChoose[Math.floor( Math.random() * weaponToChoose.length )] ;

   
  

  
}


weapons.forEach(getButtons);


/** 
function game() {
    

    let computerScore = 0;
    let playerScore = 0;
    let roundsPlay = 1;

    while (roundsPlay != 6 ) {
        
       
        
// this function return either rock, paper or scissors

function computerPlay() {

    let weaponToChoose = [ 'rock', 'paper', 'scissors' ];

   return  weaponToChoose[Math.floor( Math.random() * weaponToChoose.length )] ;

}


// this function play only one round

function playRound(playerSelection, computerSelection) {


    switch (playerSelection + computerSelection) {

        case 'rock' + 'scissors':
                playerScore ++;
                console.log( `You Win! YourWeapon ${playerSelection} Beats Computer'sWeapon ${computerSelection}` );
                
                break;


        case 'paper' + 'rock':
                playerScore ++;
              
                console.log( `You Win! YourWeapon ${playerSelection} Beats Computer'sWeapon ${computerSelection}` );
                break;


        case 'scissors' + 'paper':
                playerScore ++;
             
                console.log( `You Win! YourWeapon ${playerSelection} Beats Computer'sWeapon ${computerSelection}` );
                
                break;
            
        

        case 'scissors' + 'rock':
                computerScore ++;
            
                console.log( `You Lose! YourWeapon ${playerSelection} Loses To Computer'sWeapon ${computerSelection}` );
                break;

        case 'rock' + 'paper':
                computerScore ++;
                
                console.log( `You Lose! YourWeapon ${playerSelection} Loses To Computer'sWeapon ${computerSelection}` );
                break;

        case 'paper' + 'scissors':
                computerScore ++;
              
                console.log( `You Lose! YourWeapon ${playerSelection} Loses To Computer'sWeapon ${computerSelection}` );
                break;
              
        
        case 'rock' + 'rock':
        case 'paper' + 'paper':
        case 'scissors' + 'scissors':

               
                console.log( `Its a Draw! YourWeapon ${playerSelection} Vs Computer'sWeapon ${computerSelection}` );
                break;
    
        default:
                console.log(playerSelection + " " + computerSelection);
            break;
    }

  

}


        
        const playerSelection = prompt("Choose Your Weapon :-  Rock Paper or Scissors ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

        roundsPlay ++;

        console.log(`Rounds: ${roundsPlay}  Computer Score: ${computerScore}  Player Score: ${playerScore}`)
    }

    

    

}

game();
      
*/


let isto;
let JsonObj;

const game = () => {
  let pScore = 0;
  let cScore = 0;

//passa o primeiro getData como parametro e apagar o segundo .


async function getData() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'rock-paper-scissor2.p.rapidapi.com',
      'X-RapidAPI-Key': 'b345b06c1emshcd872a66643f3d9p1534d8jsn78bf841a6f27'
    }
  };

  const response = await fetch(`https://rock-paper-scissor2.p.rapidapi.com/api/${isto}`, options)
  const data = await response.json()

  return data
 
}

	//Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
const playMatch = () => {

    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
  
    options.forEach(option => {
      option.addEventListener("click", async function() {
        isto= option.classList.value;
        
        const data = await getData()
        //Computer Choice
       // const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = await data.computer;
        console.log(isto + " foi mandado");
        console.log(computerChoice);
        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //console.log(computerChoice);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
    
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

   const  compareHands = async (playerChoice, computerChoice)  => {
         //Update Text
    const winner = document.querySelector(".winner");
    
    const data = await getData();
    //if (playerChoice === computerChoice) {
     // winner.textContent = `It is a${youWin}`;
    //}

    //Checking for a tie
    console.log(data.cstat + " resposta json")
    if (playerChoice === computerChoice) {
    
     
      winner.textContent ="draw" ;
      return;
    }
    //rock
if(playerChoice === "rock" && computerChoice === "scissor"){
  winner.textContent =data.pstat;
  
  pScore++;
  updateScore();
  return;
} if (playerChoice === "rock" && computerChoice === "paper") {
  winner.textContent = data.cstat;

  cScore++;
  updateScore();

}
//paper
if(playerChoice === "paper" && computerChoice === "scissor"){
  winner.textContent =data.cstat;
  cScore++;
  updateScore();
  return;
} if (playerChoice === "paper" && computerChoice === "rock") {
  winner.textContent = data.pstat;
  pScore++;
updateScore();
return;
}
//scissor
if(playerChoice === "scissor" && computerChoice === "paper"){
  winner.textContent =data.cstat;
  pScore++;
  updateScore();
  return;
}if(playerChoice === "scissor" && computerChoice === "rock"){
  
  winner.textContent =data.cstat;
  cScore++;
  updateScore();
  return;
}
    //Check for Rock
    //logic-if  playerChoice and computerChoice are different and computerChoice is not scissors then it Must be Paper
    //if(playerChoice === "rock" && computerChoice === "scissor"){
  /* if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
       
        winner.textContent = youWin;
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = youLost;
        cScore++;
        updateScore();
        return;
      }
    }*/
    //Check for Paper
    /*if (playerChoice === "paper") {
      if (computerChoice === "scissor") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }*/
    //Check for Scissors
   /* if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }*/
  };
  startGame();
  playMatch();




//
  

  //Is call all the inner function
  
};


//start the game function
game();

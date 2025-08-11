

// *********** Rock paper Scissors **********

let userScore = 0;
let computerScore = 0;
const boxes = document.querySelectorAll('.box');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#computer-score');
const restart = document.querySelector('#restart');


// generate computer choice
const genComChoice = () => {
    const boX = ["rock" , "paper" , "scissors"];
    const result = Math.floor(Math.random() * 3 ); //formula to genrate random no uder 3
    return boX[result];

};


const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game Draw! Play again..";
      msg.style.backgroundColor = "#cc8a10";
}

const showWinner = (userWin , userchoice , compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++
        compScorePara.innerText = computerScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


// main function to play game..
     const playGame = (userchoice) => {         //comes userchoice
        console.log("your choice was" ,userchoice);

      // Now computer choice
        const compChoice = genComChoice();
        console.log("Comp choice is" , compChoice);

     // main logic for winners 
    if(userchoice === compChoice ){      // draw condition
        drawGame();
         }
    else{
       let userWin = true;
          if(userchoice === "rock"){ 
               //paper scissor
                userWin = compChoice === "paper" ? false : true;
             }

          else if(userchoice === "paper"){
              //rock scissor
              userWin = compChoice === "scissors" ? false : true;
             }

           else{
                //rock paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin , userchoice , compChoice);
          }

        };





  // generate user choice
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
      const userchoice = box.getAttribute("id");
      playGame(userchoice); 
    });

});

 const restartGame = () => {
    userScore = 0;
    computerScore = 0;

    userScorePara.innerText = userScore;
    compScorePara.innerText = computerScore;
    msg.innerText = "Your Game Restarted!";
    msg.style.backgroundColor = "#275891";
    
 }

 restart.addEventListener("click" , restartGame)

 
 

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreUpdate = document.querySelector("#user-score");
const compScoreUpdate = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw, Play again!")
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        console.log("You Win!");
        msg.innerText = `You Win! your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "rgba(0, 255, 0, 1)";
    }
    else{
        compScore++;
        console.log("You Lose!");
        msg.innerText = `You Lose! computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "rgba(255, 0, 0, 1)";
    }
    userScoreUpdate.innerText = userScore;
    compScoreUpdate.innerText = compScore;
}

const playGame = (userChoice) =>{
    console.log("user-choice: ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp-choice: ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = (compChoice==="paper")? false:true;
        }
        else if(userChoice==="paper"){
            userWin = (compChoice==="scissors")? false:true;
        }
        else if(userChoice==="scissors"){
            userWin = (compChoice==="rock")? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});
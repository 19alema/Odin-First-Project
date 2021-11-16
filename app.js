window.addEventListener("load", function () {
    let loader = document.querySelector(".loader");
    loader.classList.add("hide");

    console.log(loader)
})




// UTILITIES

let playScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
const winnerDisplay = document.querySelector(".winner-display");


// GAME CHOICES

const hand = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");

hand.addEventListener("click", () => {
    gamePlay("ROCK") 
})

scissors.addEventListener("click", () => {
    gamePlay("SCISSOR") 
})

paper.addEventListener("click", () => {
    gamePlay("PAPER") 
})

// COMPUTER PLAY

function computerSelect() {
    const choice = ['ROCK', 'PAPER', 'SCISSOR'];
    let getRandom = Math.floor(Math.random() * choice.length);;
    let computerChoice = choice[getRandom];
    return computerChoice;
}

// GAME PLAY
 
function gamePlay(userChoice) {
   let computerChoice = computerSelect();

    let game = userChoice + computerChoice;

    switch (game) {
        case "ROCKSCISSOR":
        case "SCISSORPAPER":
        case "PAPERROCK":
            win(userChoice, computerChoice);
            break;
        case "SCISSORROCK":
        case "PAPERSCISSOR":
        case "ROCKPAPER":
            lost(userChoice, computerChoice);
            break;
        case "ROCKROCK":
        case "PAPERSCISSOR":
        case "SCISSORSCISSOR":
            draw(userChoice, computerChoice);
            break;
        
    }
}

// WIN LOSE AND DRAW LOGIC

let computer_score = 0;
let player_score = 0;
let scoreInfo = document.querySelector(".winner-infor")
function win(userChoice, computerChoice) {
    player_score++;
    let small_text = "player".fontsize(2).sub().fontcolor('orange');
    let comp_smalltext = "comp".fontsize(2).sub().fontcolor('#fc8a58')
    playScore.innerHTML  = player_score;
    computerScore.innerHTML = computer_score;
    scoreInfo.innerHTML = `${userChoice}${small_text} beat ${computerChoice}${comp_smalltext} . You win 🤩`;

    // document.querySelectorAll(".useChoice").forEach(e => {
    //     e.classList.add("green-glow");
    //     console.log(e)
    //  })
    
}

function lost(userChoice, computerChoice) {
    computer_score++;
    playScore.innerHTML = player_score;
    let small_text = "player".fontsize(2).sub().fontcolor('orange');
    let comp_smalltext = "comp".fontsize(2).sub().fontcolor('#fc8a58')
    computerScore.innerHTML = computer_score;
    scoreInfo.innerHTML = `${computerChoice}${comp_smalltext} beat ${userChoice}${small_text}. You lost 🤔`
    console.log("YOU lost")
}

function draw(userChoice, computerChoice) {
    // computer_score++;
    // player_score++;
    playScore.innerHTML = player_score;
    let small_text = "player".fontsize(2).sub().fontcolor('orange');
    let comp_smalltext = "comp".fontsize(2).sub().fontcolor('#fc8a58')
    computerScore.innerHTML = computer_score;
    scoreInfo.innerHTML = `${computerChoice}${comp_smalltext} is equal to ${userChoice}${small_text}. Draw game 👏`
    console.log("YOU WON")
}




let playGame = confirm("Shall we play rock, paper or scissors");
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock, paper or scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "scissors" || playerOne === "paper") {
        
        } 

    } else {
        alert("I guess you changed your mind, maybe next time")
    }

} else {
    alert("Ok, maybe next time")

} 
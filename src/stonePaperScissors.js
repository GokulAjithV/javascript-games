const prompt = require("prompt-sync")();

console.log("Welcome to Stone-Paper-Scissors Game!!!");

let ties = 0;
let wins = 0;
let losses = 0;

const choices = ["stone", "paper", "scissors"];

const noOfGames = Number(prompt("Enter how many games you want to play : "));

for(let i = 1; i <= noOfGames; i++){

const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randomIndex];

const userChoice = prompt(`${i}. Enter 'stone' or 'paper' or 'scissors' : `).toLowerCase();

console.log(`Your Choice : ${userChoice} -- Computer Choice : ${computerChoice}`);

if(userChoice === computerChoice){
    console.log("Match Tied!!");
    ties += 1;
} else if ((userChoice === "stone" && computerChoice === "scissors") ||
           (userChoice === "paper" && computerChoice === "stone") ||
           (userChoice === "scissors" && computerChoice === "paper")) {
            console.log("You Won!!");
            wins += 1;
} else {
    console.log("You lose!!");
    losses += 1;
};
};

console.log("---SCORE CARD---");
console.log("Total Games : ", noOfGames);
console.log("Wins : ", wins);
console.log("Losses : ", losses);
console.log("Ties : ", ties);




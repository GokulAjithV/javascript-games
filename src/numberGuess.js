const prompt = require("prompt-sync")();

console.log("Welcome to random number guesser game!!!");

const randomNumber = Math.round(Math.random() * 100);

let guesses = 0;

while (true){

    const userGuess = Number(prompt("Guess the random number (0-99) : "));
    guesses += 1;

    if(userGuess > randomNumber){
        console.log("The number you guessed is greater than the random number");
        continue;
    } else if(userGuess < randomNumber){
        console.log("The number you guessed is lesser than the random number");
        continue;
    };

    console.log(`You've guessed the number in ${guesses} tries!!`);
    break;
};

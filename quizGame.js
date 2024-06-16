console.log("Welcome to the CRICKET Quiz Game!");

const prompt = require("prompt-sync")();

const qA = [
    {
        q : "Who is the most successful Indian Captain : ",
        a : ["dhoni", "mahendra singh dhoni", "ms dhoni", "msd"]
    },
    {
        q : "Who is known as Mr.IPL : ",
        a : ["raina", "suresh raina"]
    },
    {
        q : "Who is the ICC No.1 Test Bowler : ",
        a : ["ashwin", "r ashwin", "ravi ashwin", "ravichandran ashwin"]
    },
    {
        q : "Who is the current captain of CSK : ",
        a : ["ruturaj gaikwad", "ruturaj"]
    }
];

const totalQuestions = qA.length;
let rightAnswers = 0;

for(let i=0; i < totalQuestions; i++){

    const userAnswer = prompt(qA[i].q);

    if(qA[i].a.includes(userAnswer)){
        console.log("Correct Answer!!");
        rightAnswers += 1;
    } else {
        console.log("Wrong Answer!!");
    };
};

const score = Math.round((rightAnswers / totalQuestions) * 100);

console.log(`You've answered ${rightAnswers} out of ${totalQuestions} questions correctly.`);
console.log(`Your score is ${score}`);
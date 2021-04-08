const { randomInt } = require("crypto");


const firstGate = 1;
let triesCount = 0;
let doorChange = true;
let nbWins = 0;
while(triesCount < 1000){
const gates = ["goat", "goat", "goat"];
const n = randomInt(0, 3)
gates[n] = "car"
let userChoice = gates[firstGate - 1];
gates.splice(userChoice, 1)

gates[0] === "goat" ? gates.splice(0, 1) : gates.splice(1, 1);
if(doorChange){
  userChoice = gates[0];
}
if(userChoice === "car"){
  nbWins++;
}
triesCount++;
}
console.log(`you won ${nbWins} cars by swapping door`)



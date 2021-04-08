const chalk = require("chalk");
const readLineSync = require("readline-sync");
const { randomInt } = require("crypto");


const gates = ["goat", "goat", "goat"];
const n = randomInt(0, 3);
gates[n] = "car";
const userChoice = readLineSync.keyInSelect(['Porte 1', 'Porte 2', 'Porte 3'], "Quelle porte choisissez vous ?")             // on demande de choisir une porte parmi les 3 disponibles


let userGate = gates[userChoice]
gates.splice(userChoice, 1)


gates[0] === "goat" ? console.log(`there is a ${gates[0]} behind that door, would you change your choice?`) 
                    : console.log(`there is a ${gates[1]} behind that door, would you change your choice?`)

gates[0] === "goat" ? gates.splice(0, 1) : gates.splice(1, 1)

let newChoice = readLineSync.keyInYN(["Desirez vous changer de porte ?"])
if(newChoice){
  userGate = gates[0]
}
console.log(`you won a super ${userGate}`)

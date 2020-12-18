"use strict";

const fs = require('fs');
const inputData = fs.readFileSync("./day6data").toString();

// Recycled from my day 1 solution
function removeCharacter(str, character) {
  return(str.split("").map(x => x.replace(character, "")).join(""));
}

const groups = inputData.split('\n\n').map(x => removeCharacter(x, '\n')).map(y => y.split(''));

//console.log(groups[0]);

let numOfQuestions = [];

for(let i of groups) {
  let questionsAsked = [];
  for(let j of i) {
    if(questionsAsked.indexOf(j) == -1) {
      questionsAsked.push(j);
    }
    //console.log(j);
    //console.log(questionsAsked);
  }
  numOfQuestions.push(questionsAsked.length);
}

console.log(`Number of questions list: ${numOfQuestions}`);
console.log(`Total questions answered yes: ${numOfQuestions.reduce((a,b) => a + b)}`)
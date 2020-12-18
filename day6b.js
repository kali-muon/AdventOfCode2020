"use strict";

const fs = require('fs');
const inputData = fs.readFileSync("./day6data").toString();

function getMatching(arr1, arr2) {
  let matchingValues = [];
  for(let i of arr1) {
    //console.log(`checking for ${i} in ${arr2}`)
    if(arr2.indexOf(i) != -1) {
      matchingValues.push(i);
    }
  }
  return(matchingValues);
}

const groups = inputData.split('\n\n').map(x => x.split('\n').map(y => y.split('')));

let numOfQuestions = [];

// probably could have done this with another reduce tbh
for(let i of groups) {
  numOfQuestions.push(i.reduce((a,b) => getMatching(a,b)).length);
}

// ok I tried (it didn't work)
//numOfQuestions = groups.reduce((a,b) => a.concat(b[0].reduce((c,d) => getMatching(c,d).length)));

console.log(`Number of questions list: ${numOfQuestions}`);
console.log(`Total questions answered yes: ${numOfQuestions.reduce((a,b) => a + b)}`)
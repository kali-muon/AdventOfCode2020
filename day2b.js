"use strict";

const fs = require('fs');

function parseEntry(entry) {
  let occurenceCount = entry[0].split("-").map(value => parseInt(value));
  let character = entry[1][0];
  let password = entry[2];
  return([occurenceCount, character, password]);
}

function removeCharacter(pass, character) {
  return(pass.split("").map(x => x.replace(character, "")).join(""));
}

const inputData = fs.readFileSync("./day2data").toString();

let processedData = inputData.split("\n").map(value => value.trim().split(" ")).map(value => parseEntry(value));

let counter = 0;

for(let i of processedData) {
  if((i[2][i[0][0] - 1] == i[1]) + (i[2][i[0][1] - 1] == i[1]) == 1) {
    counter++;
  }
}

//console.log(processedData);
console.log(counter);




/*
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
*/


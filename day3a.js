"use strict";

const fs = require('fs');

const inputData = fs.readFileSync("./day3data").toString();
const hillLevels = inputData.split("\n");
let position = [0,0]; // (x, y) format
const hillWidth = hillLevels[0].length;

console.log(hillLevels);
console.log(hillWidth);

let treeCounter = 0;

while(position[1] < hillLevels.length) {
  let x = position[0] % hillWidth;
  let y = position[1];
  if(hillLevels[y][x] == "#") {
    treeCounter++;
  }
  position = [position[0] + 3, position[1] + 1];
}

console.log(treeCounter);
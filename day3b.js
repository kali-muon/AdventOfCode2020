"use strict";

const fs = require('fs');

const inputData = fs.readFileSync("./day3data").toString();
const hillLevels = inputData.split("\n");
const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];

let treeCounter = 0;

function checkTrees(hill, slope) { // slope is in (x,y) format

  let position = [0,0];
  let hillWidth = hill[0].length;
  let treeCounter = 0;

  while(position[1] < hillLevels.length) {
    let x = position[0] % hillWidth;
    let y = position[1];
    if(hillLevels[y][x] == "#") {
      treeCounter++;
    }
    position = [position[0] + slope[0], position[1] + slope[1]];
  }

  return treeCounter;
}

let trees = slopes.map(x => checkTrees(hillLevels, x));

console.log(trees);
console.log(trees.reduce((a, b) => a * b));
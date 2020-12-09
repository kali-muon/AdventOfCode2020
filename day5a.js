'use strict';

const fs = require('fs');
const inputData = fs.readFileSync("./day5data").toString();

function FBLRtoBinary(character) {
  if(character == "F" || character == "L") {
    return 0;
  } else {
    return 1;
  }
}

function parseSeat(posCode) {
  let seat = {};
  seat["row"] = parseInt(posCode.substring(0, 7).split("").map(FBLRtoBinary).join(""), 2);
  seat["column"] = parseInt(posCode.substring(7, 10).split("").map(FBLRtoBinary).join(""), 2);
  seat["ID"] = seat["row"] * 8 + seat["column"];
  return seat;
}

const seats = inputData.split("\n").map(parseSeat);

console.log(seats.sort((x, y) => x["ID"] - y["ID"]).pop());
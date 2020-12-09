'use strict';

const fs = require('fs');
const inputData = fs.readFileSync("./day4data").toString();

const passports = inputData.split('\n\n');

function checkPassport(passport) {
  const fields = ['byr:','iyr:','eyr:','hgt:','hcl:','ecl:','pid:'];
  let fieldCounter = 0;
  for(let i of fields) {
    if(passport.indexOf(i) != -1) {
      fieldCounter++;
    }
  }

  if(fieldCounter < fields.length) {
    return(false);
  } else {
    return(true);
  }
}

let passportGoodOrBad = passports.map(checkPassport);

console.log(passportGoodOrBad.reduce((a,b) => a + b));
'use strict';

const fs = require('fs');
const inputData = fs.readFileSync("./day4data").toString();

function extractProperties(passport) {
  let dict = {};
  for(let i of passport) {
    dict[i[0]] = i[1];
  }
  return dict;
}

function checkPassportFields(passport) {
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

function checkPassport(passport) {
  const fields = ['byr:','iyr:','eyr:','hgt:','hcl:','ecl:','pid:'];
  let fieldCounter = 0;
  let byr = parseInt(passport['byr']);
  let iyr = parseInt(passport['iyr']);
  let eyr = parseInt(passport['eyr']);
  let hgt = passport['hgt'];
  let hcl = passport['hcl'];
  let ecl = passport['ecl'];
  let pid = passport['pid'].length;

  if(byr >= 1920 && byr <= 2002) {
    fieldCounter++;
  }
  
}

const passports = inputData.split('\n\n').map(x => x.replace('\n',' ').split(' ').map(y => y.split(':'))).map(extractProperties);
let passports2;

for(let i of passports) {
  if(checkPassportFields(i)) {
    passports2.push(i);
  }
}

console.log(passports[0]);



function checkPassportFields(passport) {
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

/*let passportGoodOrBad = passports.map(checkPassport);

console.log(passportGoodOrBad.reduce((a,b) => a + b));

/*
const passports = inputData.split('\n\n').map(x => x.replace('\n',' ').split(' ').map(y => y.split(':')));
*/
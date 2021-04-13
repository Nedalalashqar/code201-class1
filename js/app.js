/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

let sum = 0;
let userName = prompt('What is your name ?');
alert('Welcome' + ' ' + userName + ' ' + 'to my page');
console.log(userName);

alert('Please answer the following questions with yes or no');


let userLive = prompt('Do I live in Jordan?').toLowerCase();
if (userLive==='Yes' && userLive==='No'){
  alert('Correct answer: Yes, I live in Jordan');
  console.log(userLive);
  sum ++;
}else {
  alert('Wrong answer, I live in Jordan');
  console.log(userLive);

}


let userIcecream = prompt('Do I like ice cream?').toLowerCase();
if (userIcecream==='Yes' && userIcecream==='No'){
  alert('Correct answer: Yes, I like ice cream');
  console.log(userIcecream);
  sum ++;
}else {
  alert('Wrong answer, I like ice cream');
  console.log(userIcecream);

}


let userFlowers = prompt('Do I like flowers?').toLowerCase();
if (userFlowers==='Yes' && userFlowers==='No'){
  alert('Correct answer: Yes, I like flowers');
  console.log(userFlowers);
  sum ++;
}else {
  alert('Wrong answer, I like flowers');
  console.log(userFlowers);

}

let userTv = prompt('Do you like watching TV?').toLowerCase();
if (userTv==='Yes' && userTv==='No'){
  alert('Wrong answer, I do not like flowers');
  console.log(userTv);
}else {
  alert('Correct answer: Yes, I do not like watching TV');
  console.log(userTv);
  sum ++;
}

let userAnimals = prompt('Do you like animals ?').toLowerCase();
if (userAnimals==='Yes' && userAnimals==='No'){
  alert('Wrong answer, I do not like animals');
  console.log(userAnimals);
}else {
  alert('Correct answer: Yes, I do not like animals');
  console.log(userAnimals);
  sum ++;
}

for (let i =0 ; i < 4 ; i++){
  let num = prompt('What is my favorite number?').toLowerCase();
  while (num==='5'){
    alert('Well, this is my favorite number, you are amazing');
    console.log(num);
    sum ++;
  }if (num > 5) {
    alert('too high');
  } else {
    alert('too low');
  }
}
alert('My favorite number is 5');

let userColor = ['red' + 'black' + 'blue'];

for (let i =0 ; i < 6 ; i++){
  let pasColor = prompt('What are my favorite colors');
  while (userColor ===pasColor){
    alert('Well, this is my favorite Color, you are amazing');
    console.log(pasColor);
    sum ++;
  }if (userColor !== pasColor) {
    alert('too This is not my favorite color');
  } else {
    alert('You are getting close to the correct answero low');
  }
}
alert(userColor);
console.log(userColor);


alert('Tank you' + ' ' + userName + ' ' + 'to answer the questions');

alert('The number of correct answers' + ' ' + sum);

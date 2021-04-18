/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

let sum = 0;
let userName = prompt('What is your name ?');
alert('Welcome' + ' ' + userName + ' ' + 'to my page');

alert('Please answer the following questions with yes or no');


let userLive = prompt('Do I live in Jordan?').toLowerCase();
function checkLive(userLive){
  if (userLive==='Yes' && userLive==='No'){
    alert('Correct answer: Yes, I live in Jordan');
    console.log(userLive);
    sum ++;
  }else {
    alert('Wrong answer, I live in Jordan');

  }
}
checkLive(userLive);


let userIcecream = prompt('Do I like ice cream?').toLowerCase();
function cheackIcecream(userIcecream){
  if (userIcecream==='Yes' && userIcecream==='No'){
    alert('Correct answer: Yes, I like ice cream');
    console.log(userIcecream);
    sum ++;
  }else {
    alert('Wrong answer, I like ice cream');

  }

}
cheackIcecream(userIcecream);


let userFlowers = prompt('Do I like flowers?').toLowerCase();
function cheackUserFlowers(userFlowers){
  if (userFlowers==='Yes' && userFlowers==='No'){
    alert('Correct answer: Yes, I like flowers');
    console.log(userFlowers);
    sum ++;
  }else {
    alert('Wrong answer, I like flowers');

  }
}


cheackUserFlowers(userFlowers);


let userTv = prompt('Do I like watching TV?').toLowerCase();
function cheackUserTv(userTv){
  if (userTv==='Yes' && userTv==='No'){
    alert('Wrong answer, I do not like flowers');
    console.log(userTv);
  }else {
    alert('Correct answer: Yes, I do not like watching TV');
    sum ++;
  }
}
cheackUserTv(userTv);

let userAnimals = prompt('Do you like animals ?').toLowerCase();
function cheackUserAnimals(userAnimals){
  if (userAnimals==='Yes' && userAnimals==='No'){
    alert('Wrong answer, I do not like animals');
    console.log(userAnimals);
  }else {
    alert('Correct answer: Yes, I do not like animals');
    sum ++;
  }
}





alert('Welcome '+userName +' we will play guessing game' );
//console.log("Welcome "+userName +" we will play guessing game" );
let num = Math.floor(Math.random() * 10);
let arr =[0,1,2,3,4,5,6,7,8,9];
let userInput=prompt('plz enter guessing number to start game you have 4 chance');
let opportunities =4;
while(userInput !== num && opportunities >0 ){
  if(userInput > num){
    alert('too high');
  }
  else{
    alert('too low');
  }
  userInput = prompt('enter another number');
  opportunities --;
}
if (userInput !== num){
  alert('it is correct! good job ');
  score++;
}else{
  alert('sorry you lose the correct answere is '+num);
}



function guessColor() {
  alert('One last game, you have 6 attempts to choose the correct favorite color from list of colors');
  for (let i = 0; i < 6; i++) {
    const colorArr = ['red', 'green', 'blue', 'yellow', 'gray', 'white', 'brown', 'skyBlue', 'black', 'orange', 'purple', 'pink', 'maroon', 'gold', 'bronze', 'silver'];
    let answer = prompt(`you have ${6 - i} attempts: \n select a color from the list.\n which one is my favorite color?\n ${colorArr.join(' - ')}`).toLowerCase();
    if (answer === colorArr[7]) {
      alert('great, it\'s true, you won');
      scour++;
      break;
    }
  }

  return(scour);
}
guessColor();



alert('Tank you' + ' ' + userName + ' ' + 'to answer the questions');
alert('The number of correct answers' + ' ' + sum);

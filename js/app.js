/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

let sum = 0;
let userName = prompt('What is your name ?');
alert('Welcome' + ' ' + userName + ' ' + 'to my page');
console.log(userName);

alert('Please answer the following questions with yes or no');


let userLive = prompt('Do I live in Jordan?').toLowerCase();
function checkLive(userLive){
  if (userLive==='Yes' && userLive==='No'){
    alert('Correct answer: Yes, I live in Jordan');
    console.log(userLive);
    sum ++;
  }else {
    alert('Wrong answer, I live in Jordan');
    console.log(userLive);
  
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
    console.log(userIcecream);
  
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
    console.log(userFlowers);
  
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
    console.log(userTv);
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
    console.log(userAnimals);
    sum ++;
  }
}


let i = 0;

let num = prompt('I want you to guess the secret number that I got in my mind use the number domain between (1 - 100)','1-100' );
console.log( num );

for( i = 1; i < 4; i++ ){
  if( num <1 ){
    num = prompt( 'You entered wrong value, please enter a number between 1 and 100' );
    console.log( num );
  } else if ( num >100 ){
    num = prompt( 'You entered wrong value, please enter a number between 1 and 100' );
    console.log( num );
  }else if ( num >= 1 && num <= 25 ) {
    num = prompt( 'That was too low choise :D' );
    console.log( num );
  } else if ( num > 75 && num <= 100 ){
    num = prompt( 'That was too high choise :D' );
    console.log( num );
  } else if ( num > 25 && num < 75 ){
    num = prompt( 'That was close, but it\'s not right :P' );
    console.log( num );
  } else if ( num === '75' ) {
    alert( 'You are the master of the guessing game ^_^, 75 is the right answer' );
    counter+=2;
    break;
  } else {
    num = prompt( 'not a words not an emojis only numbers please' );
    console.log( num );
  }
}

if( i === 4 && num === '75' ){ alert( 'You are the master of the guessing game ^_^, 75 is the right answer' ); counter+=2; }
if( num !== '75' ){
  alert( 'Oobs, You run out of attempts and I beat you in my guessing game :D, the right answer is 75 ' );
}




let pasColor = prompt( 'Now I want you to choose my favorite color.  I probably like more than one color.  red, brown, green, black, blossom, blue' ).toLowerCase();

let userColor = [ 'red' + 'black' + 'blue' ];
for( i = 1; i < 6; i++ ){
  if( pasColor !== userColor[0] && pasColor !== userColor[1] && pasColor !== userColor[2] ){
    pasColor = prompt( 'Nop, try again','red, brown, green, black, blossom, blue' ).toLowerCase();
    console.log( pasColor );
  }
}

if( pasColor === userColor[0] || pasColor === userColor[1] || pasColor === userColor[2] ){
  alert( 'That\'s right, I really like '+userColor[0]+' and '+userColor[1]+' and '+userColor[2]+', They are the best' );
  counter+=2;
}


alert('Tank you' + ' ' + userName + ' ' + 'to answer the questions');

alert('The number of correct answers' + ' ' + sum);

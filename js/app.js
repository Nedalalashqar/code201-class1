/* eslint-disable no-unused-vars */
'use strict';


let userName = prompt('What is your name ?');
alert('Welcome' + ' ' + userName + ' ' + 'to my page');
console.log(userName);

alert('Please answer the following questions with yes or no');


let userQuestion1 = prompt('Do I live in Jordan?').toLowerCase();
if (userQuestion1==='Yes' && userQuestion1==='No'){
  alert('Correct answer: Yes, I live in Jordan');
  console.log(userQuestion1);
}else {
  alert('Wrong answer, I live in Jordan');
  console.log(userQuestion1);

}


let userQuestion2 = prompt('Do I like ice cream?').toLowerCase();
if (userQuestion2==='Yes' && userQuestion2==='No'){
  alert('Correct answer: Yes, I like ice cream');
  console.log(userQuestion2);
}else {
  alert('Wrong answer, I like ice cream');
  console.log(userQuestion2);

}


let userQuestion3 = prompt('Do I like flowers?').toLowerCase();
if (userQuestion3==='Yes' && userQuestion2==='No'){
  alert('Correct answer: Yes, I like flowers');
  console.log(userQuestion3);
}else {
  alert('Wrong answer, I like flowers');
  console.log(userQuestion3);

}

let userQuestion4 = prompt('Do you like watching TV?').toLowerCase();
if (userQuestion4==='Yes' && userQuestion4==='No'){
  alert('Wrong answer, I do not like flowers');
  console.log(userQuestion4);
}else {
  alert('Correct answer: Yes, I do not like watching TV');
  console.log(userQuestion4);

}

let userQuestion5 = prompt('Do you like animals ?').toLowerCase();
if (userQuestion5==='Yes' && userQuestion5==='No'){
  alert('Wrong answer, I do not like animals');
  console.log(userQuestion5);
}else {
  alert('Correct answer: Yes, I do not like animals');
  console.log(userQuestion5);
}

alert('Tank you' + ' ' + userName + 'to answer the questions');

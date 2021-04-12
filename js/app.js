/* eslint-disable no-unused-vars */
'use strict';


let userName = prompt('What is your name ?');
alert('Welcome' + ' ' + userName + ' ' + 'to my page');
console.log(userName);

alert('Please answer the following questions with yes or no');


let userQuestion1 = prompt('Are you from Jordan?').toLowerCase();
if (userQuestion1==='Yes' && userQuestion1==='No'){
  alert('answer :' + userQuestion1);
  console.log(userQuestion1);
}else {
  alert('answer :' + userQuestion1);
  console.log(userQuestion1);

}


let userQuestion2 = prompt('Do you like ice cream?').toLowerCase();
if (userQuestion2==='Yes' && userQuestion2==='No'){
  alert('answer :' + userQuestion2);
  console.log(userQuestion2);
}else {
  alert('answer :' + userQuestion2);
  console.log(userQuestion2);

}


let userQuestion3 = prompt('Do you like flowers?').toLowerCase();
if (userQuestion3==='Yes' && userQuestion2==='No'){
  alert('answer :' + userQuestion3);
  console.log(userQuestion3);
}else {
  alert('answer :' + userQuestion3);
  console.log(userQuestion3);

}

let userQuestion4 = prompt('Do you like watching TV?').toLowerCase();
if (userQuestion4==='Yes' && userQuestion4==='No'){
  alert('answer :' + userQuestion4);
  console.log(userQuestion4);
}else {
  alert('answer :' + userQuestion4);
  console.log(userQuestion4);

}

let userQuestion5 = prompt('Do you like animals ?').toLowerCase();
if (userQuestion5==='Yes' && userQuestion5==='No'){
  alert('answer :' + userQuestion4);
  console.log(userQuestion5);
}else {
  alert('answer :' + userQuestion5);
  console.log(userQuestion5);
}

alert('Tank you' + ' ' + userName + 'to answer the questions');

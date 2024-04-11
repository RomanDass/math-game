//variable init
let score = [];
let numberLimit = 10;
let operatorArr = ['+','-','/','*'];
//math
//random number
function randomizeNum(num) {
  return math.ciel(Math.random * num)
};
//question
function questionGenerator() {
  let question = {};
  let num1 = randomizeNum(numberLimit);
  let num2 = randomizeNum(numberLimit);
  let oprRandom = operatorArr[randomizeNum(4)];

  if(oprRandom = '+') {
    question.answer = num1 + num2
  } else if(oprRandom = '-') {
    question.answer = num1 - num2
  } else if(oprRandom = '/') {
    question.answer = num1 / num2
  } else if(oprRandom = '*') {
    question.answer = num1 * num2
  } else {
    console.log('question gen error')
  };

  question.equation = String(num1) + oprRandom + String(num2);
  $('#equation').text(currentQuestion.equation);
};
//timer
//start game
//correct answer
//wrong answer
//event listeners
$(document).on('click', '#start-button', function() {});
$(document).on('click', '#quit-button', function() {});

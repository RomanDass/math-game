$(document).ready(function() {
  //variable init
  let score = [];
  let numberLimit = 10;
  let operatorArr = ['+','-','/','*'];
  let currentQuestion
  //math
  //random number
  function randomizeNum(num) {
    return Math.ceil(Math.random() * num)
  };
  //question
  let  questionGenerator = function() {
    let question = {};
    let num1 = randomizeNum(numberLimit);
    let num2 = randomizeNum(numberLimit);
    let oprRandom = operatorArr[randomizeNum(3)];

    if(oprRandom === '+') {
      question.answer = num1 + num2
    } else if(oprRandom === '-') {
      question.answer = num1 - num2
    } else if(oprRandom = '/') {
      question.answer = num1 / num2
    } else if(oprRandom === '*') {
      question.answer = num1 * num2
    } else {
      console.log('question gen error')
    };

    question.equation = String(num1) + oprRandom + String(num2);

    return question
  };
  
  currentQuestion = questionGenerator();
  $('#equation').text(currentQuestion.equation);

  //timer
  //start game
  //correct answer
  //wrong answer
  //event listeners
  $(document).on('click', '#start-button', function() {});
  $(document).on('click', '#quit-button', function() {});
})
  
$(document).ready(function() {
  //variable init
  let score = 0;
  let numberLimit = 10;
  const operatorArr = ['+','-','/','*'];
  let timeLeft = 60;
  let currentQuestion;
  let interval;

  //random number
  function randomizeNum(num) {
    return Math.ceil(Math.random() * num);
  };
  //question
  const questionGenerator = function() {
    let question = {};
    let num1 = randomizeNum(numberLimit);
    let num2 = randomizeNum(numberLimit);
    let oprRandom = operatorArr[randomizeNum(3)];

    if(oprRandom === '+') {
      question.answer = num1 + num2;
    } else if(oprRandom === '-') {
      if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
      }
      question.answer = num1 - num2;
    } else if(oprRandom = '/') {
      num1 = num2 * randomizeNum(numberLimit);
      question.answer = num1 / num2;
    } else if(oprRandom === '*') {
      question.answer = num1 * num2;
    } else {
      console.log('question gen error');
    };

    question.equation = String(num1) + oprRandom + String(num2);

    return question;
  };

  const renderNewQuestion = function() {
    currentQuestion = questionGenerator();
    $('#equation').text(currentQuestion.equation);
  };

  const checkAnswer = function(userInput, answer) {
    if(userInput === answer) {
      renderNewQuestion();
      $('#user-input').val('');
      addTime(+1)
      updateScore(+1);
    }
  };

  const startGame = function() {
    if (!interval) {
      if (timeLeft === 0) {
        addTime(10);
        updateScore(-score)
      };
      interval = setInterval(function() {
        addTime(-1);
        //$('#time-left').text(timeLeft);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
        };
      }, 1000);
    };
  };

  const addTime = function(ammount) {
    timeLeft += ammount;
    $('#time-left').text(timeLeft);
  }

  const updateScore = function(ammount) {
    score += ammount;
    $('#score').text(score)
  }

  //event listeners
  $(document).on('click', '#start-button', function() {});
  $(document).on('click', '#quit-button', function() {});
  $('#user-input').on('input', function () {
    startGame();
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });
  
  renderNewQuestion();
})
  
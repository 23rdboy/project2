(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}"/>
                ${letter} :
                ${currentQuestion.answers[letter]}
              `
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
          previousButton.style.display = 'none';
        }
        else{
          previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.length-1){
          nextButton.style.display = 'none';
          submitButton.style.display = 'inline-block';
        }
        else{
          nextButton.style.display = 'inline-block';
          submitButton.style.display = 'none';
        }
      }
    
      function showNextSlide() {
        showSlide(currentSlide + 1);
      }
    
      function showPreviousSlide() {
        showSlide(currentSlide - 1);
      }

      function showPreviousSlide() {
        showSlide(currentSlide - 1);
      }

      function showPreviousSlide() {
        showSlide(currentSlide - 1);
      }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What year was the first Resident Evil game released?",
        answers: {
            a: "1990",
            b: "1996",
            c: "2001",
        },
        correctAnswer: "b"
    },
    {
        question: "Which other Capcom game was born from an early version of Resident Evil 4?",
        answers: {
            a: "Dead Rising",
            b: "Devil May Cry",
            c: "Killer7"
        },
        correctAnswer: "b"
    },
    {
        question: "What is Leon Kennedy’s middle name?",
        answers: {
            a: "Simon",
            b: "Scott",
            c: "Sam"
        },
        correctAnswer: "b"
      },
      {
        question: "What characters do you choose between when starting up Resident Evil 2 (1998)?",
        answers: {
            a: "Chris Redfield & Jill Valentine",
            b: "Rebecca Chambers & Billy Coen",
            c: "Leon S Kennedy & Claire Redfield"
        },
        correctAnswer: "c"
      },
      {
        question: "Which Resident Evil 4 (2005) antagonist is nicknamed 'The Big Cheese'?",
        answers: {
            a: "Bitores Méndez",
            b: "Osmund Saddler",
            c: "Albert Wesker"
        },
        correctAnswer: "a"
      }
    ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
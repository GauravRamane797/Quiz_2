var questions = [
    {
      question: "1. What is the capital city of France?",
      options: ["a) London", "b) Delhi", "c) Rome", "d) Berlin"],
      answer: [1]
    },
  
    {
        question:  "2. Who painted the Mona Lisa?",
    options:    ["a) Vincent van Gogh","b) Leonardo da Vinci","c) Pablo Picasso","d) Michelangelo"],
    answer: [1]
},
{ 
    question:"3. What is the chemical symbol for gold?",
    options:    ["a)Au","b) Ag","c) Fe","d) Hg"],
    answer: [0]
},
{ 
    question:"4. Which planet is known as the Red Planet?",
    options:    ["a) Venus","b) Mars","c) Jupiter","d) Saturn"],
    answer: [1]
},
{ 
    question:"5. Who wrote the play Romeo and Juliet?",
    options:    ["a) William Shakespeare","b) Oscar Wilde","c) Jane Austen","d) Charles Dickens"],
    answer: [0]
},
{ 
    question:"6. What is the largest ocean on Earth?",
    options:    ["a) Atlantic Ocean","b) Indian Ocean","c) Arctic Ocean","d) Pacific Ocean"],
    answer: [3]
},
{ 
    question:"7. What is the tallest mountain in the world?",
    options:    ["a) Mount Kilimanjaro","b) Mount Everest","c) Mount Fuji","d) Mount McKinley"],
    answer: [1]
},
{ 
    question:"8. Which country is known for inventing pizza?",
    options:    ["a) Italy","b) Greece","c) Spain","d) France"],
    answer: [0]
},
{ 
    question:"9. Who is the author of the Harry Potter book series?",
    options:    ["a) J.R.R. Tolkien","b) J.K. Rowling","c) George R.R. Martin","d) Stephen King"],
    answer: [1]
},
{ 
    question:"10. What is the chemical formula for water?",
    options:    ["a) H2O","b) CO2","c) NaCl","d) CH4"],
    answer: [0]
}


// 1. What is the capital city of BHARAT?
// a) London
// b) Delhi
// c) Rome
// d) Berlin

// 2. Who painted the Mona Lisa?
// a) Vincent van Gogh
// b) Leonardo da Vinci
// c) Pablo Picasso
// d) Michelangelo

// 3. What is the chemical symbol for gold?
// a) Au
// b) Ag
// c) Fe
// d) Hg

// 4. Which planet is known as the "Red Planet"?
// a) Venus
// b) Mars
// c) Jupiter
// d) Saturn

// 5. Who wrote the play "Romeo and Juliet"?
// a) William Shakespeare
// b) Oscar Wilde
// c) Jane Austen
// d) Charles Dickens

// 6. What is the largest ocean on Earth?
// a) Atlantic Ocean
// b) Indian Ocean
// c) Arctic Ocean
// d) Pacific Ocean

// 7. What is the tallest mountain in the world?
// a) Mount Kilimanjaro
// b) Mount Everest
// c) Mount Fuji
// d) Mount McKinley

// 8. Which country is known for inventing pizza?
// a) Italy
// b) Greece
// c) Spain
// d) France

// 9. Who is the author of the Harry Potter book series?
// a) J.R.R. Tolkien
// b) J.K. Rowling
// c) George R.R. Martin
// d) Stephen King

// 10. What is the chemical formula for water?
// a) H2O
// b) CO2
// c) NaCl
// d) CH4

// Please note that the correct answers are:
// 1. b) delhi
// 2. b) Leonardo da Vinci
// 3. a) Au
// 4. b) Mars
// 5. a) William Shakespeare
// 6. d) Pacific Ocean
// 7. b) Mount Everest
// 8. a) Italy
// 9. b) J.K. Rowling
// 10. a) H2O
    // Add more questions here...
//   ];
  
//   var currentQuestion = 0;
//   var selectedAnswers = [];
  
//   function loadQuestion() {
//     var questionElement = document.getElementById("question");
//     var optionsElement = document.getElementById("options");
//     var previousBtn = document.getElementById("previous");
//     var submitBtn = document.getElementById("submit");
//     var nextBtn = document.getElementById("next");
  
//     var question = questions[currentQuestion];
//     questionElement.textContent = question.question;
  
//     optionsElement.innerHTML = "";
//     for (var i = 0; i < question.options.length; i++) {
//       var option = document.createElement("li");
//       option.textContent = question.options[i];
//       option.addEventListener("click", selectAnswer);
//       optionsElement.appendChild(option);
//     }
  
//     previousBtn.disabled = currentQuestion === 0;
//     submitBtn.style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
//     nextBtn.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";
//   }
  
//   function selectAnswer(event) {
//     var selectedOption = event.target;
//     var options = document.getElementById("options").children;
  
//     for (var i = 0; i < options.length; i++) {
//       options[i].classList.remove("selected");
//     }
  
//     selectedOption.classList.add("selected");
//     selectedAnswers[currentQuestion] = Array.from(options).indexOf(selectedOption);
//   }
  
//   function previousQuestion() {
//     currentQuestion--;
//     loadQuestion();
//   }
  
//   function submitQuiz() {
//     // Code to calculate and display the quiz results
//   }
  
//   function nextQuestion() {
//     if (selectedAnswers[currentQuestion] === undefined) {
//       return; // Do not proceed if an answer is not selected
//     }
  
//     currentQuestion++;
//     loadQuestion();
//   }
  
//   document.getElementById("previous").addEventListener("click", previousQuestion);
//   document.getElementById("submit").addEventListener("click", submitQuiz);
//   document.getElementById("next").addEventListener("click", nextQuestion);
  
//   loadQuestion();
  


];
var currentQuestion = 0;
var selectedAnswers = [];

function loadQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  var question = questions[currentQuestion];

  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  for (var i = 0; i < question.options.length; i++) {
    var option = document.createElement("input");
    option.type = "radio";
    option.name = "answer";
    option.value = i;
    option.id = "option" + i;

    var label = document.createElement("label");
    label.textContent = question.options[i];
    label.setAttribute("for", "option" + i);

    optionsElement.appendChild(option);
    optionsElement.appendChild(label);
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function submitQuiz() {
  // Code to calculate and display the quiz results
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

// Get the buttons and add event listeners
var previousBtn = document.getElementById("previous");
var submitBtn = document.getElementById("submit");
var nextBtn = document.getElementById("next");

previousBtn.addEventListener("click", previousQuestion);
submitBtn.addEventListener("click", submitQuiz);
nextBtn.addEventListener("click", nextQuestion);

// Load the first question
loadQuestion();
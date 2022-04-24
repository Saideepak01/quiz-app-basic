const CREDENTIALS = [
  {
    name: "admin",
    pw: "test123",
  },
  {
    name: "rakshu",
    pw: "123",
  },
];

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const login = document.querySelector(".login");
const time = document.querySelector(".time");
const quiz = document.getElementById("quiz");
let endQ = document.querySelector(".quizEnd");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
endQ.classList.add("hide");

let currentQuiz = 0;
let score = 0;
let startingMinutes = 1;
let timer = startingMinutes * 60;
let currentScore = localStorage.getItem("score");
let parseCurrentScore = JSON.parse(currentScore);

function initiateLogin() {
  let userName = document.querySelector(".usrName").value;
  let pw = document.querySelector(".pwUsr").value;

  CREDENTIALS.every((ele) => {
    if (ele.name === userName && ele.pw === pw) {
      login.classList.add("hide");
      quiz.classList.remove("hide");
      time.classList.remove("hide");
      window.interval = setInterval(updateCountdown, 1000);
    } else {
      alert("Wrong login credentials");
    }
  });
}

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      localStorage.setItem("score", JSON.stringify(score));
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
         <h2>You answered ${parseCurrentScore}/${quizData.length} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         `;
      clearInterval(interval);
      time.classList.add("hide");
    }
  }
});

function updateCountdown() {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  time.innerHTML = `
    Time Left- <span>${minutes}:${seconds}</span>
  `;
  timer--;
  console.log(minutes);
  if (minutes === 0 && seconds === 0) {
    end();
  }
}

function end() {
  endQ.classList.remove("hide");
  quiz.classList.add("hide");
  time.classList.add("hide");
  let stop = document.querySelector(".quizEnd");
  stop.innerHTML = `
    <p>Your time has ended and your score is ${
      parseCurrentScore === null ? 0 : parseCurrentScore
    }</p>
    <p>Want to try again click the button 👇</p>
    <button onclick="location.reload()">Reload</button>
  `;
}

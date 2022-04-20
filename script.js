const CREDENTIALS = [
  {
    name: "admin",
    pw: "test123",
  },
  {
    name: "saideepak",
    pw: "sai",
  },
];

const QUIZ_QUESTIONS = [
  {
    q: "India is a federal union comprising twenty-eight states and how many union territories?",
    a: [
      {
        text: "6",
        isCorrect: false,
      },
      {
        text: "7",
        isCorrect: false,
      },
      {
        text: "8",
        isCorrect: true,
      },
      {
        text: "9",
        isCorrect: false,
      },
    ],
  },
  {
    q: "Which of the following is the capital of Arunachal Pradesh?",
    a: [
      {
        text: "Itanagar",
        isCorrect: true,
      },
      {
        text: "Dispur",
        isCorrect: false,
      },
      {
        text: "Imphal",
        isCorrect: false,
      },
      {
        text: "Panaji",
        isCorrect: false,
      },
    ],
  },
  {
    q: "What are the major languages spoken in Andhra Pradesh?",
    a: [
      {
        text: "Odia&Telugu",
        isCorrect: false,
      },
      {
        text: "Telugu&Urdu",
        isCorrect: true,
      },
      {
        text: "Telugu&Kannada",
        isCorrect: false,
      },
      {
        text: "All",
        isCorrect: false,
      },
    ],
  },
  {
    q: "What is the state flower of Haryana?",
    a: [
      {
        text: "Lotus",
        isCorrect: true,
      },
      {
        text: "Rhododendron",
        isCorrect: false,
      },
      {
        text: "Jasminer",
        isCorrect: false,
      },
      {
        text: "None",
        isCorrect: false,
      },
    ],
  },
  {
    q: "Which of the following states is not located in the North?",
    a: [
      {
        text: "Jharkhand",
        isCorrect: true,
      },
      {
        text: "Kerela",
        isCorrect: false,
      },
      {
        text: "Karnataka",
        isCorrect: false,
      },
      {
        text: "Haryana",
        isCorrect: false,
      },
    ],
  },
  {
    q: "In which of the following state, the main language is Khasi?",
    a: [
      {
        text: "Mizoram",
        isCorrect: false,
      },
      {
        text: "Nagaland",
        isCorrect: false,
      },
      {
        text: "Meghalaya",
        isCorrect: true,
      },
      {
        text: "Tripura",
        isCorrect: false,
      },
    ],
  },
  {
    q: "Which is the largest coffee-producing state of India?",
    a: [
      {
        text: "Kerala",
        isCorrect: true,
      },
      {
        text: "Nagaland",
        isCorrect: false,
      },
      {
        text: "Karnataka",
        isCorrect: false,
      },
      {
        text: "Tripura",
        isCorrect: false,
      },
    ],
  },
  {
    q: "Which state has the largest area?",
    a: [
      {
        text: "Maharashtra",
        isCorrect: false,
      },
      {
        text: "Kerela",
        isCorrect: false,
      },
      {
        text: "Tripura",
        isCorrect: false,
      },
      {
        text: "Rajasthan",
        isCorrect: true,
      },
    ],
  },
  {
    q: "Which state has the largest population?",
    a: [
      {
        text: "UttarPradesh",
        isCorrect: true,
      },
      {
        text: "Maharastra",
        isCorrect: false,
      },
      {
        text: "Bihar",
        isCorrect: false,
      },
      {
        text: "Rajasthan",
        isCorrect: false,
      },
    ],
  },
  {
    q: "In what state is Elephant Falls located?",
    a: [
      {
        text: "Mizoram",
        isCorrect: false,
      },
      {
        text: "Orissa",
        isCorrect: false,
      },
      {
        text: "Manipur",
        isCorrect: false,
      },
      {
        text: "Meghalaya",
        isCorrect: true,
      },
    ],
  },
];

function loginPg() {
  let hideWelcome = document.querySelector(".welcomepg");
  hideWelcome.className = "hide";

  let log = document.querySelector(".login");
  log.innerHTML = `
    <h2>Login</h2>
    <input type="text" class="form-control usrName" placeholder="username">
    <input type="password" class="form-control pwUsr" placeholder="Password">
    <button type="button" class="btn btn-primary" onclick="initiateLogin()">Login</button>
  `;
}
// loginPg();

function initiateLogin() {
  let userName = document.querySelector(".usrName").value;
  let pw = document.querySelector(".pwUsr").value;

  CREDENTIALS.every((ele) => {
    if (ele.name === userName && ele.pw === pw) {
      proceedQuiz();
      //   console.log("success");
    } else {
      alert("Wrong login credentials");
    }
  });
}

let pushRandom = [];
let randomGen = (Math.random() * 9).toFixed(0);
let loadQues = QUIZ_QUESTIONS[randomGen];
let ans;
for (let i = 0; i < 3; i++) {
  if (loadQues.a[i].isCorrect) {
    ans = loadQues.a[i].text;
  }
}
let score = 0;

function randomNoGenerator() {
  if (pushRandom.includes(randomGen)) {
    randomNoGenerator();
  } else {
    pushRandom.push(randomGen);
    console.log(randomGen);
  }
}

function proceedQuiz() {
  let hideLogin = document.querySelector(".login");
  hideLogin.className = "hide";

  let count = pushRandom.length + 1;
  let question = document.querySelector(".quiz");

  question.innerHTML = `
    <h3>Question number ${count}</h3>
    <p>${loadQues.q}</p>
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault0" value=${loadQues.a[0].text}>
    <label class="form-check-label" for="flexRadioDefault0">
      ${loadQues.a[0].text}
    </label><br />
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value=${loadQues.a[1].text}>
    <label class="form-check-label" for="flexRadioDefault1">
      ${loadQues.a[1].text}
    </label><br />
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value=${loadQues.a[2].text}>
    <label class="form-check-label" for="flexRadioDefault2">
      ${loadQues.a[2].text}
    </label><br />
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value=${loadQues.a[3].text}>
    <label class="form-check-label" for="flexRadioDefault3">
      ${loadQues.a[3].text}
    </label><br />
    <button class="btn btn-dark" onclick="validateAns()">Next</button>
  `;

  document.body.appendChild(question);
}

function validateAns() {
  let checkedVal;
  for (let i = 0; i <= 3; i++) {
    if (document.querySelector(`#flexRadioDefault${i}`).checked) {
      checkedVal = document.querySelector(`#flexRadioDefault${i}`).value;
    }
  }
  console.log(checkedVal);
  if (pushRandom.length + 1 !== 5) {
    proceedQuiz;
  }
}

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tech Made Language"
    ],
    answer: 0
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    question: "Which is the correct JavaScript syntax to print something?",
    options: [
      "print('Hello')",
      "console.log('Hello')",
      "echo('Hello')",
      "printf('Hello')"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (index === quizData[currentQuestion].answer) {
    score++;
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");

  scoreEl.textContent = `${score} / ${quizData.length}`;
  if (score === quizData.length) {
    feedbackEl.textContent = "Excellent! Perfect Score 🎉";
  } else if (score >= quizData.length / 2) {
    feedbackEl.textContent = "Good job! Keep practicing 👍";
  } else {
    feedbackEl.textContent = "Don’t worry, try again and improve 💪";
  }
}

loadQuestion();
nextBtn.disabled = true;
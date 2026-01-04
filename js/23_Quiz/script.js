const questions = [
    {
        question: "2 + 2 = ?",
        answers: ["3", "4", "5"],
        correct: 1
    },
    {
        question: "JS runs in the…",
        answers: ["Browser", "Microwave", "Printer"],
        correct: 0
    },
    {
        question: "HTML stands for…",
        answers: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language"],
        correct: 1
    },
    {
        question: "CSS is used for…",
        answers: ["Structuring web content", "Styling web content", "Programming web content"],
        correct: 1
    }
];

let index = 0;
let score = 0;


function showQuestion() {
  const q = questions[index];
  quiz.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = q.question;
  quiz.appendChild(title);

  q.answers.forEach((a, i) => {
    const label = document.createElement("label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = i;

    label.appendChild(input);
    label.append(" " + a);
    quiz.appendChild(label);
    quiz.appendChild(document.createElement("br"));
  });
}

nextBtn.onclick = () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Select an answer!");

  if (+selected.value === questions[index].correct) score++;
  index++;

  index < questions.length ? showQuestion() : finishQuiz();
};

function finishQuiz() {
  quiz.style.display = "none";
  nextBtn.style.display = "none";
  result.textContent = `Your score: ${score} / ${questions.length}`;
}

showQuestion();

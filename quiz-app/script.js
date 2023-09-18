const quizData = [
    {
        question: "Tanggal jadian Kita?",
        a: "27",
        b: "28",
        c: "29",
        d: "30",
        correct: "b",
    },
    {
        question: "Nama Lengkap Pacar",
        a: "Pande Putu Sunaryang",
        b: "Pande Pt Sunariyang",
        c: "Pande Putu Sunaryang Yogam Prasanta",
        d: "Pande Putu Sunaryang Yogaam Prashanta",
        correct: "c",
    },
    {
        question: "Tanggal Lahir Pacar",
        a: "30",
        b: "29",
        c: "28",
        d: "27",
        correct: "c",
    },
    {
        question: "Tempat Lahir Pacar",
        a: "Denpasar",
        b: "Bangli",
        c: "Jimbaran",
        d: "Kintamani",
        correct: "a",
    },
];

const submitBtn = document.getElementById("submitBtn");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselecetAnswer();
    const currentQuizData = quizData[currentQuiz];

    document.getElementById("question").innerHTML = currentQuizData.question;
    document.getElementById("a_text").innerHTML = currentQuizData.a;
    document.getElementById("b_text").innerHTML = currentQuizData.b;
    document.getElementById("c_text").innerHTML = currentQuizData.c;
    document.getElementById("d_text").innerHTML = currentQuizData.d;
}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer"); // this will call all element that have class "answer"

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselecetAnswer() {
    const answerEls = document.querySelectorAll(".answer"); // this will call all element that have class "answer"

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            // alert("Correct!");
        } else {
            // alert("Wrong!");
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById(
                "quiz"
            ).innerHTML = `<h2>Jawabannya adalah ${score}/${quizData.length}</h2>`;
        }
    }
});

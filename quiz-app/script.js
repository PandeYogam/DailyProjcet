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

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBtn");
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    // document.getElementById("question").innerHTML = currentQuizData.question;
    // document.getElementById("a_text").innerHTML = currentQuizData.a;
    // document.getElementById("b_text").innerHTML = currentQuizData.b;
    // document.getElementById("c_text").innerHTML = currentQuizData.c;
    // document.getElementById("d_text").innerHTML = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    console.log("submitBtn clicked");
    console.log(currentQuiz);

    if (currentQuiz < quizData.length) {
        currentQuiz++;
        loadQuiz();
    } else {
        alert("Quiz Complete");
    }
});

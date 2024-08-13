const questions = [
    {
        question: "What is Artificial Intelligence?",
        answers: [
            { text: "A type of hardware", correct: false },
            { text: "A branch of computer science focused on creating systems that can perform tasks that typically require human intelligence", correct: true },
            { text: "A programming language", correct: false },
            { text: "An operating system", correct: false }
        ]
    },
    {
        question: "Which of the following is an application of AI?",
        answers: [
            { text: "Natural Language Processing", correct: true },
            { text: "Spreadsheet Software", correct: false },
            { text: "Word Processing", correct: false },
            { text: "Web Browsing", correct: false }
        ]
    },
    {
        question: "What is Machine Learning?",
        answers: [
            { text: "A method of data analysis that automates analytical model building", correct: true },
            { text: "A machine used for learning new skills", correct: false },
            { text: "The process of manually programming every decision in a system", correct: false },
            { text: "A type of database management system", correct: false }
        ]
    },
    {
        question: "Which AI technique is used to simulate human reasoning and decision-making?",
        answers: [
            { text: "Deep Learning", correct: false },
            { text: "Reinforcement Learning", correct: false },
            { text: "Expert Systems", correct: true },
            { text: "Computer Vision", correct: false }
        ]
    },
    {
        question: "What is Deep Learning?",
        answers: [
            { text: "A subset of machine learning involving neural networks with many layers", correct: true },
            { text: "A type of programming language", correct: false },
            { text: "The process of manually coding algorithms", correct: false },
            { text: "A type of hardware used in AI", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of a neural network architecture?",
        answers: [
            { text: "Convolutional Neural Network (CNN)", correct: true },
            { text: "SQL Database", correct: false },
            { text: "Binary Tree", correct: false },
            { text: "Linked List", correct: false }
        ]
    },
    {
        question: "What does NLP stand for in the context of AI?",
        answers: [
            { text: "Natural Learning Process", correct: false },
            { text: "Natural Language Processing", correct: true },
            { text: "Neural Language Programming", correct: false },
            { text: "Network Language Protocol", correct: false }
        ]
    },
    {
        question: "What is the Turing Test designed to evaluate?",
        answers: [
            { text: "The performance of a computer's hardware", correct: false },
            { text: "The intelligence of a machine and its ability to exhibit human-like behavior", correct: true },
            { text: "The efficiency of an algorithm", correct: false },
            { text: "The accuracy of a computer program", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a commonly used programming language for AI development?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "HTML", correct: true }
        ]
    },
    {
        question: "What is the primary goal of reinforcement learning?",
        answers: [
            { text: "To minimize errors in a dataset", correct: false },
            { text: "To make predictions based on past data", correct: false },
            { text: "To train an agent to take actions in an environment to maximize cumulative reward", correct: true },
            { text: "To classify data into different categories", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.classList.add(correct ? 'correct' : 'incorrect');
        }
    });
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    scoreElement.innerText = `Congradulations peers! \n Your score: ${score}`;
    resultContainer.style.display = 'block';
}

restartButton.addEventListener('click', startQuiz);

startQuiz();

// quiz.js

let currentQuestionIndex = 0;
let score = 0;
const questions = []; // This will be populated with questions from the backend

function loadQuestions() {
    // Fetch questions from the backend (this is a placeholder)
    fetch('/api/questions')
        .then(response => response.json())
        .then(data => {
            questions.push(...data);
            displayQuestion();
        })
        .catch(error => console.error('Error loading questions:', error));
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionElement = document.getElementById('question');
        const answersElement = document.getElementById('answers');
        
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        
        answersElement.innerHTML = '';
        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = () => checkAnswer(index);
            answersElement.appendChild(button);
        });
    } else {
        displayResults();
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correctAnswer === selectedIndex) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

function displayResults() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
});
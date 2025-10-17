const questions = require('../data/questions');

const getQuestions = () => {
    return questions;
};

const validateAnswer = (questionId, selectedAnswer) => {
    const question = questions.find(q => q.id === questionId);
    return question && question.correctAnswer === selectedAnswer;
};

module.exports = {
    getQuestions,
    validateAnswer
};
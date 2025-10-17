const express = require('express');
const quizService = require('./services/quizService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/questions', (req, res) => {
    const questions = quizService.getQuestions();
    res.json(questions);
});

app.post('/api/validate', (req, res) => {
    const { questionId, answer } = req.body;
    const isValid = quizService.validateAnswer(questionId, answer);
    res.json({ valid: isValid });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
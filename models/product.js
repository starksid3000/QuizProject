const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    title: String,
    questions: [{
      questionText: String,
      options: [String],
      correctOptionIndex: Number
    }]
});

module.exports = mongoose.model('Question',quizSchema);
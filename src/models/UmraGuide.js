const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
  title: {type: String},
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionAnswer"
  }]
});

const Guide = mongoose.model("Guide", GuideSchema);

const QuestionAnswerSchema = new mongoose.Schema({
  question: {type: String},
  answer: [{type: String}],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guide",
  }
});

const QuestionAnswer = mongoose.model("QuestionAnswer", QuestionAnswerSchema);

module.exports = {
  Guide,
  QuestionAnswer
}

const mongoose = require('mongoose');


const GuideSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },
});

const Guide = mongoose.model('Guide', GuideSchema);


const QuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true },
  explanations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Explanation' }],
});

const Question = mongoose.model('Question', QuestionSchema);


const ExplanationSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Guide', required: true },
  publication: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
});

const Explanation = mongoose.model('Explanation', ExplanationSchema);

module.exports = {
    Explanation,
    Question,
    Guide
}

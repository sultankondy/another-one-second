const { Guide, Question, Explanation } = require("../models/UmraGuide")


// Create a new guide. Route: POST /guides 
const createGuide = async (req, res) => {
    try {
        const guide = new Guide(req.body);
        await guide.save();
        res.status(201).send(guide);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Get all guides. Route: GET /guides
const getAllGuides = async (req, res) => {
    try {
        const guides = await Guide.find();
        res.send(guides);
    } catch (error) {
        res.status(500).send(error);
    }
}
// Create a new checklist authored by the guide. Route: POST /checklists
const createQuestion = async (req, res) => {
    try {
        const question = new Question({
          title: req.body.title,
          author: req.body.author,
        });
        await question.save();
        res.status(201).send(question);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Get all checklists. Route: GET /checklists
const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('author');
        res.send(questions);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Create a new explanation on the checklist. Route: POST /explanations
const createExplanation = async (req, res) => {
    try {
        const explanation = new Explanation({
          content: req.body.content,
          author: req.body.author,
          publication: req.body.publication,
        });
        await explanation.save();
        res.status(201).send(explanation);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Get all explanations for a checklist. Route: GET /questions/:id/explanations
const getAllExplanations = async (req, res) => {
    try {
        const explanations = await Explanation.find();
        const filteredData = explanations.filter(item => item.publication.toString() === req.params.id);
        res.send(filteredData);
      } catch (error) {
        res.status(500).send(error);
      }
}

module.exports = {
    createGuide,
    getAllGuides,
    createQuestion,
    getAllQuestions,
    createExplanation,
    getAllExplanations
};

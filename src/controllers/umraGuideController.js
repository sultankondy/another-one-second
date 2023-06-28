const { Guide, QuestionAnswer } = require("../models/UmraGuide");

const createGuide = async (req, res) => {
    new Guide(req.body).save()
        .then(() => {
            res.status(200).json({message: "Guide created successfully"});
        })
        .catch((err) => {
            res.status(500).json({message: "Error creating Guide"});
        });
}

const getAllGuide = async (req, res) => {
    try {
        const guides = await Guide.find();
        res.status(200).json(guides)
    }catch(err) {
        res.status(500).json(err);
    }
}


const getQuestionAnswerByGuideId = async(req, res) => {
    try{
        const questionAnswer = await QuestionAnswer.find({owner: req.params.id});
        res.status(200).json(questionAnswer);
    }catch(err) {
        res.status(500).json(err);
    }
}


const createQuestionAnswerByGuideId = async(req, res) => {
    new QuestionAnswer({
        question: req.body.question,
        answer: req.body.answer,
        owner: req.params.id
    })
    .save()
    .then(() => {
        res.status(200).json({message: "QuestionAnswer was created successfully"});
    })
    .catch((err) => {
        res.status(500).json({message: "Error creating QuestionAnswer"});
    });
}

module.exports = {
    createGuide,
    getAllGuide,
    getQuestionAnswerByGuideId,
    createQuestionAnswerByGuideId,
}

const router = require('express').Router();
const umraGuideController = require('../controllers/umraGuideController');

// Create a new guide. Route: POST /guides | // Get all guides. Route: GET /guides
router.route('/guides')
    .post(umraGuideController.createGuide)
    .get(umraGuideController.getAllGuides)

// Create a new checklist authored by the guide. Route: POST /checklists | // Get all checklists. Route: GET /checklists
router.route('/questions')
    .post(umraGuideController.createQuestion)
    .get(umraGuideController.getAllQuestions)

// Create a new explanation on the checklist. Route: POST /explanations
router.route('/explanations')
    .post(umraGuideController.createExplanation)

// Get all explanations for a checklist. Route: GET /checklists/:id/explanations
router.route('/questions/:id/explanations')
    .get(umraGuideController.getAllExplanations)




module.exports = router;

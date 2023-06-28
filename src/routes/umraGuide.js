const router = require('express').Router();
const umraGuideController = require('../controllers/umraGuideController');

router.route("/")
    .post(umraGuideController.createGuide)
    .get(umraGuideController.getAllGuide);


router.route("/:id")
    .post(umraGuideController.createQuestionAnswerByGuideId)
    .get(umraGuideController.getQuestionAnswerByGuideId)

module.exports = router;

const router = require('express').Router();
const tourController = require('../controllers/tourController');

router.route('/')
    .get(tourController.getTour)
    .post(tourController.createTour);

module.exports = router;
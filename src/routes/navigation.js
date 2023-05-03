const router = require('express').Router();
const navigationController = require('../controllers/navigationController');

router.route("/:topic")
    .get(navigationController.getNavigationsByTopic)
    .post(navigationController.createNavigationsByTopic);


router.route("/:id")
    .put(navigationController.updateNavigationById)
    .delete(navigationController.deleteNavigationById);
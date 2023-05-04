const router = require('express').Router();
const tasbihController = require('../controllers/tasbihController');

router.route("/")
    .post(tasbihController.createTasbih)
    .get(tasbihController.getAllTasbih);

router.route('/:id')
    .get(tasbihController.getTasbihById);

module.exports = router;
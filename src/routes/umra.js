const router = require('express').Router();
const umraController = require('../controllers/umraController');

router.route('/')
    .get(umraController.getUmra)
    .post(umraController.createUmra)
    .put(umraController.updateUmra)
    .delete(umraController.deleteUmra)

router.route('/give-title')
    .put(umraController.updateUmraTitle);

module.exports = router;
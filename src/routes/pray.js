const router = require('express').Router();
const prayTimeController = require('../controllers/prayerTime');

// GET ISLAMIC HOLIDAY
router.get('/get-holidays', prayTimeController.getHolidays)
// GET QIBLA DIRECTION
router.route('/get-qibla-direction')
    .get(prayTimeController.getQiblaDirection)
// GET BY MONTH
router.route("/:month")
    .get(prayTimeController.getPrayerTimeByMonth)

// GET CURRENT DAY 
router.route("/")
    .get(prayTimeController.getCurrentDaySchedule);

module.exports = router;

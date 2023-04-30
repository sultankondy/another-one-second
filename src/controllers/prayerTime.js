const prayerTime = require('../fetch/prayerTime');
const qibla = require('../helper/qibla');

const getPrayerTimeByMonth = (req, res) => {
    res.json(prayerTime.timeByMonth(req));
}

const getCurrentDaySchedule = (req, res) => {
    res.json(prayerTime.currentDaySchedule(req));
}

const getQiblaDirection = (req, res) => {
    res.json(qibla.qiblaDirection(req));

}

const getHolidays = (req, res) => {
    res.json(prayerTime.holidays())
}

module.exports = {
    getPrayerTimeByMonth,
    getCurrentDaySchedule,
    getQiblaDirection,
    getHolidays
}
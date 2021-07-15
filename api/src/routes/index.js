const { Router } = require('express')
const router = Router();

const countries = require('./countries');
const activities = require('./activity')


router.use('/', countries);
router.use('/', activities)

module.exports = router;
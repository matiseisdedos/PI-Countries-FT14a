const { Router } = require('express')
const router = Router();

const countries = require('./countries');



router.use('/', [countries]);

module.exports = router;
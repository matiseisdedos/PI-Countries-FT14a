const { Router } = require('express')
const router = Router();

const Countries = require('./countries');



router.get('/', [Countries]);

module.exports = router;
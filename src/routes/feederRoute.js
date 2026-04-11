const router = require('express').Router();
const feederController = require('../controllers/feederController');

// create a new feeder
router.post('/feed', feederController.feedCat);

module.exports = router;
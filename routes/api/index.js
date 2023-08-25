const router = require('express').Router();

router.use('/user', require('./userRoutes'));
router.use('/thoughts', require('./thoughtRoutes'));

module.exports = router;
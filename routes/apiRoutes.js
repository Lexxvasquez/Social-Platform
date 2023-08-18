const { User } = require('../models');
const { createUser,getAllUser,getUserById} = require('../controllers');
const router = require('express').Router();

router
.route('/user')
.post(createUser)
.get(getAllUser)


router
.route('/user/:id')
.get(getUserById)

module.exports = router;
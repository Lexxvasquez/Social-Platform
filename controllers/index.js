const { createUser,getAllUser,getUserById,updateUser,removeUser} = require('./userControllers');
const { createThought,getAllThought,getThoughtById,updateThought,removeThought} = require('./thoughtControllers');

module.exports = { createUser,getAllUser,getUserById,updateUser,removeUser, createThought,getAllThought,getThoughtById,updateThought,removeThought };
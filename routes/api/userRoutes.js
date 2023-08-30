const {
  createUser,
  getAllUser,
  getUserById,
  removeFriend,
  updateUser,
  removeUser,
  addFriend,
} = require("../../controllers");
const router = require("express").Router();

router.route("/").post(createUser).get(getAllUser);
router.route("/:id").get(getUserById).put(updateUser).delete(removeUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;

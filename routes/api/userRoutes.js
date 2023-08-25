const {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  removeUser,
} = require("../../controllers");
const router = require("express").Router();

router.route("/").post(createUser).get(getAllUser);
router.route("/:id").get(getUserById).put(updateUser).delete(removeUser);

module.exports = router;

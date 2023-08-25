const {
  createThought,
  getAllThought,
  getThoughtById,
  updateThought,
  removeThought,
} = require("../../controllers");
const router = require("express").Router();

router.route("/").post(createThought).get(getAllThought);

router.route("/:id").get(getThoughtById).put(updateThought).delete(removeThought);

module.exports = router;

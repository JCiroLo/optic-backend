const { Router } = require("express");
const router = Router();

const { getGlasses, createGlasses, deleteGlasses, getMountById, updateMount } = require("../controllers/glasses");

router.route("/")
    .get(getGlasses)
    .post(createGlasses);

router.route('/:id')
    .get(getMountById)
    .put(updateMount)
    .delete(deleteGlasses);

module.exports = router;
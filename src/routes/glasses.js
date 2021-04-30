const { Router } = require("express");
const router = Router();

const { getGlasses, createGlasses, deleteGlasses, getMountById } = require("../controllers/glasses");

router.route("/")
    .get(getGlasses)
    .post(createGlasses);

router.route('/:id')
    .get(getMountById)
    .delete(deleteGlasses);

module.exports = router;
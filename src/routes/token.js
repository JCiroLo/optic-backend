const { Router } = require("express");
const router = Router();

const { validateToken, validateFB } = require("../controllers/token");

router.route("/").post(validateToken);

router.route("/fb/:email/:pass").post(validateFB);

module.exports = router;
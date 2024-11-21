const Router = require("express");
const router = new Router();
const paintingController = require("../controllers/paintingController");

router.post("/", paintingController.create);
router.get("/", paintingController.getAll);
router.get("/:id", paintingController.getOne);

module.exports = router;

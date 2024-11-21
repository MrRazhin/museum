const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const paintingRouter = require("./paintingRouter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/painting", paintingRouter);

module.exports = router;

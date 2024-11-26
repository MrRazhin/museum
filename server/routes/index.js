const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const paintingRouter = require("./paintingRouter");
const typeRouter = require("./typeRouter");
const ticketRouter = require("./ticketRouter");
const ticketTypeRouter = require("./ticketTypeRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/painting", paintingRouter);
router.use("/ticket", ticketRouter);
router.use("/ticket_type", ticketTypeRouter);

module.exports = router;

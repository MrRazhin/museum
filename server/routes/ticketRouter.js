const Router = require("express");
const router = new Router();
const ticketController = require("../controllers/ticketController");

router.post("/", ticketController.create);
router.get("/", ticketController.getAll);
router.get("/:id", ticketController.getOne);

// Добавление нового маршрута для поиска билетов по userId
router.get("/user/:userId", ticketController.getByUserId);

module.exports = router;

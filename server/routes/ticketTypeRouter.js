const Router = require("express");
const ticketTypeController = require("../controllers/ticketTypeController");

const router = new Router();

// POST /ticketTypes - создание нового типа билета
router.post("/", ticketTypeController.create);

// GET /ticketTypes - получение всех типов билетов
router.get("/", ticketTypeController.getAll);

// GET /ticketTypes/:id - получение одного типа билета по ID
router.get("/:id", ticketTypeController.getOne);

// PUT /ticketTypes/:id - обновление типа билета по ID
router.put("/:id", ticketTypeController.update);

// DELETE /ticketTypes/:id - удаление типа билета по ID
router.delete("/:id", ticketTypeController.delete);

module.exports = router;

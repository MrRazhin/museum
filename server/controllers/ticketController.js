const { Ticket } = require("../models/models");
const ApiError = require("../error/ApiError");

class TicketController {
  // Создание нового билета
  async create(req, res, next) {
    try {
      const { userId, visitDate, ticketTypeId, id } = req.body;

      const ticket = await Ticket.create({
        userId,
        visitDate,
        purchaseDate: new Date(),
        id,
        ticketTypeId,
        ticketNumber: String(Math.floor(100000 + Math.random() * 900000)),
      });

      return res.json(ticket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  // Получение всех билетов
  async getAll(req, res) {
    try {
      const tickets = await Ticket.findAll();
      return res.json(tickets);
    } catch (e) {
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  // Получение одного билета по id
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findOne({
        where: { id },
      });

      if (!ticket) {
        return next(ApiError.notFound(`Билет с id: ${id} не найден`));
      }

      return res.json(ticket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  // Получение всех билетов по userId
  async getByUserId(req, res, next) {
    try {
      const { userId } = req.params;
      const tickets = await Ticket.findAll({
        where: { userId },
      });

      if (tickets.length === 0) {
        return next(ApiError.notFound(`Билеты для пользователя с id: ${userId} не найдены`));
      }

      return res.json(tickets);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new TicketController();

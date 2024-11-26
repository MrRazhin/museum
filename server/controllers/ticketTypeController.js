const { TicketType } = require("../models/models");
const ApiError = require("../error/ApiError");

class TicketTypeController {
  async create(req, res, next) {
    try {
      const { name, description, price, id } = req.body;

      // Assuming there is no file handling here as there isn't one in your ticket type model
      const ticketType = await TicketType.create({
        id, // Generate a unique ID for the ticket type, assuming the model uses 'id'
        name,
        description,
        price,
      });

      return res.json(ticketType);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    try {
      const ticketTypes = await TicketType.findAll();
      return res.json(ticketTypes);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const ticketType = await TicketType.findOne({
        where: { id },
      });

      if (!ticketType) {
        return res.status(404).json({ error: "Ticket Type not found" });
      }

      return res.json(ticketType);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Assuming you want an update method
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;

      const ticketType = await TicketType.findOne({ where: { id } });

      if (!ticketType) {
        return res.status(404).json({ error: "Ticket Type not found" });
      }

      await ticketType.update({ name, description, price });

      return res.json(ticketType);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  // Assuming you want a delete method
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const ticketType = await TicketType.findOne({ where: { id } });

      if (!ticketType) {
        return res.status(404).json({ error: "Ticket Type not found" });
      }

      await ticketType.destroy();

      return res.json({ message: "Ticket Type deleted successfully" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new TicketTypeController();

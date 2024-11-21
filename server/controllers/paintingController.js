const uuid = require("uuid");
const path = require("path");
const { Painting } = require("../models/models");
const ApiError = require("../error/ApiError");

class PaintingController {
  async create(req, res, next) {
    try {
      const { name, author, price, id, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpeg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const painting = await Painting.create({ name, author, price, id, description, img: fileName });

      return res.json(painting);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
     const painting = await Painting.findAll();
     return res.json(painting);
  }
  async getOne(req, res) {}
}

module.exports = new PaintingController();

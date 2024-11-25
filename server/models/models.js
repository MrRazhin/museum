const sequelize = require("../bd");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});
const Painting = sequelize.define("painting", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  material: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const PaintingInfo = sequelize.define("painting_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const Ticket = sequelize.define("ticket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  paintingId: { type: DataTypes.INTEGER, allowNull: false },
  visitDate: { type: DataTypes.DATE, allowNull: false },
  purchaseDate: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  price: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Ticket);
Ticket.belongsTo(User);

Painting.hasMany(PaintingInfo);
PaintingInfo.belongsTo(Painting);

Type.hasMany(Painting);
Painting.belongsTo(Type);

module.exports = {
  User,
  Painting,
  Type,
  PaintingInfo,
};

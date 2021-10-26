const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Group = sequelize.define("group", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Student = sequelize.define("student", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  surName: { type: DataTypes.STRING, unique: true, allowNull: false },
});

Group.hasMany(Student, { onDelete: "cascade" });
Student.belongsTo(Group);

module.exports = {
  User,
  Group,
  Student,
};

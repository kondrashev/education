const { Sequelize } = require("sequelize");
module.exports = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  process.env.PG_HOST,
  process.env.PG_PORT,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: { require: true },
    },
  }
);

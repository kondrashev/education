const { Sequelize } = require("sequelize");
// module.exports = new Sequelize("education", "postgres", "1976", {
//   host: "localhost",
//   dialect: "postgres",
//   port: 5433,
//   ssl: true,
// });
module.exports = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  ssl: true,
  protocol: "postgres",
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

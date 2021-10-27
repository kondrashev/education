// const { Sequelize } = require("sequelize");
// module.exports = new Sequelize(
//   process.env.PG_DATABASE,
//   process.env.PG_USER,
//   process.env.PG_PASSWORD,
//   process.env.PG_HOST,
//   process.env.PG_PORT,
//   {
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: { require: true },
//     },
//   }
// );
const { Client } = require("pg");
module.exports = new Client({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
  ssl: true,
});

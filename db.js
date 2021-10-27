const { Sequelize } = require("sequelize");
// module.exports = new Sequelize("education", "postgres", "1976", {
//   host: "localhost",
//   dialect: "postgres",
//   port: 5433,
//   ssl: true,
// });
module.exports = new Sequelize(
  "d7btv59fvnvgm0",
  "ownakmbbtmnhpk",
  "fed2396be1fa5e09dae8918f6f0b6f27dcb3fb616555dcc250ccafda50045f74",
  {
    host: "ec2-3-248-103-75.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    ssl: true,
    dialectOptions: {
      ssl: { require: true },
    },
  }
);

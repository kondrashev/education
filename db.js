const { Sequelize } = require("sequelize");
module.exports = new Sequelize({
  host: "ec2-3-248-103-75.eu-west-1.compute.amazonaws.com",
  user: "ownakmbbtmnhpk",
  password: "fed2396be1fa5e09dae8918f6f0b6f27dcb3fb616555dcc250ccafda50045f74",
  database: "d7btv59fvnvgm0",
  dialect: "postgres",
  port: 5432,
});

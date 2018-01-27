
const Sequelize = require('sequelize');

const options = { logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

sequelize.define(
  'person', 
  { name: Sequelize.STRING,
    age: Sequelize.INTEGER
  }
);

module.exports = sequelize;


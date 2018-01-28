
const Sequelize = require('sequelize');

const options = { logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

sequelize.define(
  'person', 
  { name: { 
      type: Sequelize.STRING,
      unique: { msg: "Name already exists"},
      validate: { 
        is: { args: /^[a-z]+$/i, msg: "name: invalid characters"}
      }
    },
    age: {
      type: Sequelize.INTEGER,
      validate: { 
        min: { args:   [0], msg: "Age less than 0"},
        max: { args: [150], msg: "Age higher than 150"}
      }
    }
  }
);

module.exports = sequelize;


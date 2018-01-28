
const Sequelize = require('sequelize');

const options = { logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

sequelize.define(
  'person', 
  { name: { 
      type: Sequelize.STRING,
      unique: true,
      validate: { is: /^[a-z]+$/i }
    },
    age: {
      type: Sequelize.INTEGER,
      validate: { min: 0, max: 150 }      
    }
  }
);

module.exports = sequelize;


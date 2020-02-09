const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql',
  sync: { force: true }
});

module.exports = sequelize;

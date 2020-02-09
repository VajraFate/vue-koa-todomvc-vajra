const sequelizeInstance = require('../db/sequelize');
const Sequelize = require('Sequelize');

class TodoList extends Sequelize.Model {};

TodoList.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER(1),
    defaultValue: 0,
    allowNull: false
  }
}, {
  sequelize: sequelizeInstance
});
// TodoList.sync();
export default TodoList;

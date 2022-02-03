'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      this.belongsToMany(Users, { through: 'User-UserTasks', foreignKey: 'taskId' });
    }
  }
  UsersTasks.init({
    title: DataTypes.STRING,
    adress: DataTypes.STRING,
    time: DataTypes.STRING,
    date: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    categorie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsersTasks',
  });
  return UsersTasks;
};

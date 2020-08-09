'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      deadline: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1, // 默认未完成
      },
    },
    {
      sequelize,
      modelName: 'Todo',
    },
  )
  return Todo
}

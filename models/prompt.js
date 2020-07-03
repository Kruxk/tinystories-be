"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class prompt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      prompt.belongsTo(models.user);
      prompt.hasMany(models.story);
    }
  }
  prompt.init(
    {
      userId: { type: DataTypes.NUMBER, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "prompt",
    }
  );
  return prompt;
};

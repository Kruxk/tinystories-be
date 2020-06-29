"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      story.belongsTo(models.user);
      story.belongsTo(models.prompt);
    }
  }
  story.init(
    {
      description: { type: DataTypes.STRING, allowNull: false },
      name: DataTypes.STRING,
      promptId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};

"use strict";
const User = require("../models").user;
const Prompt = require("../models").prompt;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const reinko = await User.findOne({
      where: { name: "Reinko" },
    });
    const prompt = await Prompt.findOne({
      where: { userId: reinko.id },
    });

    return queryInterface.bulkInsert("stories", [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam est inventore facilis neque cum cupiditate.",
        userId: reinko.id,
        promptId: prompt.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("prompts", null, {});
  },
};

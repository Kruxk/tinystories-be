"use strict";
const User = require("../models").user;

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
    const til = await User.findOne({
      where: { name: "Til" },
    });

    return queryInterface.bulkInsert(
      "prompts",
      [
        {
          userId: reinko.id,
          description:
            "You awaken to a bright room with 12 mysterious figures who tell you to roll 2 dice. The outcome decides your faith. You roll snake eyes.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: til.id,
          description:
            "A recently-turned immortal happens upon a 10,000 year old immortal and begins learning the consequences of forever escaping death.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("prompts", null, {});
  },
};

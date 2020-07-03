"use strict";
const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
        {
          userId: reinko.id,
          name: "Maffia loyalty",
          description:
            "You’re in the mafia and the boss has ordered you to kill your girlfriend to show your loyalty. You look around the room and see the pictures only to find out you’re dating the mafia boss’s daughter.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: til.id,
          name: "Startup/Dragons",
          description: `You, the owner of an outrageously successful tech startup, are invited to an exclusive club/society for the world's wealthiest people. You realize that they are all actually dragons, and they assume you are one too.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userid: reinko.id,
          name: "Vigilante Power",
          description: `You are a vigilante with strange power - you can devise a plan that will solve any situation you might be in and it will work flawlessly, but only if you explain said plan in excruciating detail to the villain you're about to defeat.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: til.id,
          name: "Demon Professor",
          description: `In the Demon Hunters Academy you are known as the very best professor, 80 years old but still in your prime, but you're secretly a demon, and the academy recently got some new demonic detectors, and as opposed to the old ones, these actually work. you can only avoid the main hall for so long.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("prompts", null, {});
  },
};

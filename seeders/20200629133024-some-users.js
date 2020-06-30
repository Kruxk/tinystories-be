const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
("use strict");

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
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Reinko",
          email: "reinko@tinystories.com",
          token: bcrypt.hashSync("reinko", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Til",
          email: "til@tinystories.com",
          token: bcrypt.hashSync("til", SALT_ROUNDS),
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
    return queryInterface.bulkDelete("users", null, {});
  },
};

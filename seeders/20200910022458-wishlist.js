'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wishlists', [{
      userId: 1,
      productId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      productId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      productId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Wishlists', null, {});
  }
};

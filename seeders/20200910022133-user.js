'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
     
      email: 'john@doe.com',
      password: 'one',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      
      email: 'john@smith.com',
      password: 'two',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'john@stone.com',
      password: 'three',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};

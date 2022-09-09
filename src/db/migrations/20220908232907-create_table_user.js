'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('user', { id: Sequelize.INTEGER });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('user');
  }
};

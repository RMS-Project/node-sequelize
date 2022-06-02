'use strict';

module.exports = {

  /*  Adicione comandos de alteração aqui.

    Exemplo:
    await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },


  /* Adicione comandos de reversão aqui.

     Exemplo:
     await queryInterface.dropTable('users');
  */
  // async down (queryInterface, Sequelize) {
  async down (queryInterface) {
    return queryInterface.dropTable('users')
  }
};

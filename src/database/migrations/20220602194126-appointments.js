'use strict';

module.exports = {

  /*  Adicione comandos de alteração aqui.

    Exemplo:
    await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'},

        // Caso o usuário seja deletado, todos os
        // seus agendamentos devem ser deletados também.
        onUpdate: 'CASCADE',

        // Vai manter os dados ao deletar para que assim,
        // em caso de auditoria ele possa recuperar os dados.
        onDelete: 'SET NULL',
        allowNull: true
      },
      collaborator_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      canceled_at: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('appointments')
  }
};

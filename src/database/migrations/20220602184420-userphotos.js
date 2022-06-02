'use strict';

module.exports = {

  /*  Adicione comandos de alteração aqui.

    Exemplo:
    await queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users', 
      'photo_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      }    
    )
  },


  /* Adicione comandos de reversão aqui.

     Exemplo:
     await queryInterface.dropTable('users');
  */
  // async down (queryInterface, Sequelize) {
  async down (queryInterface) {
    return queryInterface.removeColumn('users', 'photo_id');
  }
};

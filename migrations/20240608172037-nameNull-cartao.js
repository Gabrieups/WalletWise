'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Cartao', 'name', {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        notEmpty: {
          msg: "Preencha o campo para concluir o cadastro"
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Cartao', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Preencha o campo para concluir o cadastro"
        }
      }
    });
  }
};


'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cartao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "Preencha o campo para concluir o cadastro"
          }
        }
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "Preencha o campo para concluir o cadastro"
          }
        }
      },
      tipoCartao: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "Preencha o campo para concluir o cadastro"
          }
        }
      },
      dataFechamento: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty:{
            msg: "Preencha o campo para concluir o cadastro"
          }
        }
      },
      dataVencimento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cartaos');
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
   await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }, 
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      name: {
        type: Sequelize.NAME,
        allowNull: false
      }, 
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      }, 
      company: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      archivedAt: {
         type: Sequelize.DATE,
      }
   });
     
   await queryInterface.createTable('orders', {
      id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      user_id: {
         type: Sequelize.INTEGER,
         allowNull: false
      },
      datetime: {
         type: Sequelize.DATETIME,
         allowNull: false
      },
      paid: {
         type: Sequelize.BOOLEAN,
         allowNull: false
      }
   });

   await queryInterface.createTable('products', {
      id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      name: {
         type: Sequelize.TEXT,
         allowNull: false
      },
      category_id: {
         type: Sequelize.INTEGER,
         allowNull: false
      }
   });

   await queryInterface.createTable('product_category' {
      id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      name: {
         type: Sequelize.TEXT,
         allowNull: false
      },
      parent_id: {
         type: Sequelize.INTEGER,
         allowNull: false
      }
   });

   await queryInterface.createTable('order_rows', {
      id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      order_id: {
         type: Sequelize.INTEGER,
         allowNull: false
      },
      product_id: {
         type: Sequelize.INTEGER,
         allowNull: false
      },
      amount: {
         type: Sequelize.INTEGER,
         allowNull: false
      },
      price: {
         type: Sequelize.INTEGER,
         allowNull: false
      }
   });
   
   await queryInterface.addConstraint('orders', {
      fields: ['user_id'],
      type: 'foreign key',
      references: {
         table: 'users', // target table
         field: 'id' // target field
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
   });

   await queryInterface.addConstraint('orders', {
      fields: ['id'],
      type: 'foreign key',
      references: {
         table: 'order_rows',
         field: 'order_id'
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */
     await queryInterface.dropTable('users');
     await queryInterface.dropTable('orders');
     await queryInterface.dropTable('products');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   // TABLES
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
        type: Sequelize.STRING,
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
         type: Sequelize.DATE,
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

   await queryInterface.createTable('product_category', {
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


   // CONSTRAINTS
   // await queryInterface.addConstraint('orders', {
   //    fields: ['user_id'],
   //    type: 'foreign key',
   //    references: { // target
   //       table: 'users',
   //       field: 'id'
   //    },
   //    onDelete: 'cascade',
   //    onUpdate: 'no action'
   // });

   await queryInterface.addConstraint('order_rows', {
      fields: ['order_id'],
      type: 'foreign key',
      references: { // target
         table: 'orders',
         field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
   });

   await queryInterface.addConstraint('order_rows', {
      fields: ['product_id'],
      type: 'foreign key',
      references: { // target
         table: 'products',
         field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
   });

   await queryInterface.addConstraint('product_category', {
      fields: ['id'],
      type: 'foreign key',
      references: { // target
         table: 'products',
         field: 'category_id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
   });

   await queryInterface.addConstraint('product_category', {
      fields: ['id'],
      type: 'foreign key',
      references: { // target
         table: 'product_category',
         field: 'parent_id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
   });

  },

  down: async (queryInterface, Sequelize) => {
     // DROP TABLES
     await queryInterface.dropTable('users');
     await queryInterface.dropTable('orders');
     await queryInterface.dropTable('products');
     await queryInterface.dropTable('product_category');
     await queryInterface.dropTable('order_rows');
  }
};

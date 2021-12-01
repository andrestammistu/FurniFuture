'use strict';

import Client from './user.js';
import Sequelize from 'sequelize';
import configFile from __dirname + '/../config/config.json';

const env = process.env.NODE_ENV || 'development';
const config = configFile[env]
const db = {};

let sequelizeParameters;

if (config.use_env_variable) {
  sequelizeParameters = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelizeParameters = new Sequelize(config.database, config.username, config.password, config);
}

let sequelize = new Sequelize(sequelizeParameters);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

Client(sequelize, Sequelize)
db.Client = sequelize.models.Client

db.sequelize = sequelize;
db.Sequelize = Sequelize;

import User from './user';
User(sequelize);
db.User = sequelize.models.User;

import Product from './product';
Product(sequelize);
db.Product = sequelize.models.Product;

import Order from './order';
Order(sequelize);
db.Order = sequelize.models.Order;

import OrderRow from 'order_row';
OrderRow(sequelize);
db.OrderRow = sequelize.models.OrderRow;

import ProductCategory from './product_category';
ProductCategory(sequelize);
db.ProductCategory = sequelize.models.ProductCategory; 


db.OrderRow.belongsTo(db.Order, {
  foreignKey: 'order_id'
});

db.Order.hasMany(db.OrderRow, {
  constraints: false,
  foreignKey: 'order_id'
});

db.User.belongsTo(db.Order, {
  foreignKey: 'user_id'
});


module.exports = db;

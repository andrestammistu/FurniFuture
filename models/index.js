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

module.exports = db;

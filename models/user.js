import { DataTypes } from 'sequelize';

export default function(sequelize) {
    return sequelize.define('Account', {
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
        }, {
           
        });
}
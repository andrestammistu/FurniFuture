import { DataTypes } from 'sequelize';

export default function(sequelize) {
    return sequelize.define('Product', {
        name: {
            type: Sequelize.TEXT,
            allowNull: false
         },
         parent_id: {
            type: Sequelize.INTEGER,
            allowNull: false
         }
           
        });
}

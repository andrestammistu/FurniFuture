import { DataTypes } from 'sequelize';

export default function ProductCategory(sequelize) {
    return sequelize.define('ProductCategory', {
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

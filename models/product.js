import { DataTypes } from 'sequelize';

export default function Product(sequelize) {
    return sequelize.define('Product', {
        name: {
            type: Sequelize.TEXT,
            allowNull: false
         },
         category_id: {
            type: Sequelize.INTEGER,
            allowNull: false
         }
           
        });
}
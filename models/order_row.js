import { DataTypes } from 'sequelize';

export default function(sequelize) {
    return sequelize.define('OrderRow', {
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
}

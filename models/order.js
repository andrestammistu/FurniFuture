import { DataTypes } from 'sequelize';

export default function Order(sequelize) {
    return sequelize.define('Order', {
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
 }, { 
           
        });
}
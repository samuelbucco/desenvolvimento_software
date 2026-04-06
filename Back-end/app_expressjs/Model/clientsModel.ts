import db from "../db";
import sequelize from "../db";

export default db.define('client', {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoincrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
})
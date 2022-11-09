const { DataTypes } = require("sequelize");
const db = require("../src/db/database");



const Producto = db.define('Productos', {
    name: {
        type:DataTypes.STRING
    },

    description: {
        type:DataTypes.STRING
    },

    price: {
        type:DataTypes.FLOAT
    },

    stock: {
        type:DataTypes.INTEGER
    }


});


module.exports = Producto;
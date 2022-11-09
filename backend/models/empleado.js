const { DataTypes } = require("sequelize");
const db = require("../src/db/database");



const Empleado = db.define('Empleados', {
    name: {
        type:DataTypes.STRING
        
    },

    apellido1: {
        type:DataTypes.STRING
    },

    apellido2: {
        type:DataTypes.STRING
    },

    rango: {
        type:DataTypes.STRING,
    
    },

    sueldo: {
        type:DataTypes.FLOAT
    },

    telefono: {
        type:DataTypes.INTEGER
    }


});


module.exports = Empleado;
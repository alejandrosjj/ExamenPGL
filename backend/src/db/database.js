const Sequelize = require("sequelize");


const db = new Sequelize("altago", "root", "Root_1234", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;
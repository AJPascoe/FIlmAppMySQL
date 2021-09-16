const {sequelize} = require("../db/connections");
const { DataTypes } = require("sequelize");

const Film = sequelize.define("Film",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    actor:{
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    like:{
        type: DataTypes.STRING,
        defaultValue: "Good",
    },
});

module.exports = Film;
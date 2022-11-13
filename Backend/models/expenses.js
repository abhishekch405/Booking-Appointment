const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Expenses= sequelize.define('expenses',{
    id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name: Sequelize.STRING,
    email:Sequelize.STRING,
    phone: Sequelize.STRING
})

module.exports=Expenses;
const express = require("express");
const app=express();
const bodyParser=require('body-parser');
const cors= require('cors');
const shopRoutes=require('./routes/shop');

const sequelize=require('./util/database');

const Expenses=require('./models/expenses');
app.use(bodyParser.json());
app.use(cors());
app.use('/',shopRoutes);

sequelize
.sync()
.then(()=>{
    return Expenses.findByPk(1);
}
).then(user=>{
    if(!user){
        return Expenses.create({name:'Abhishek',email:'abhi@gmail.com',phone:'1234567890'})
    }
})
.then(user=>app.listen(4000))
.catch(err=>console.log(err));


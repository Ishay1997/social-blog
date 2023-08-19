const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const { Console } = require('console');
app.use(cors());
app.use(express.json());
    mongoose.connect('mongodb+srv://blog:981wkEsmhGsI8xx4@cluster0.1q5eyiz.mongodb.net/?retryWrites=true&w=majority');

    app.post('/register', async (req,res)=>{
    const {username,password}=req.body;
    try{
    const userDoc = await User.create({
        username,
        password:bcrypt.hashSync("password", salt)});
    res.json(userDoc);
    }catch(e){
        console.log(e);
        res.status(400).json(e);

    }
});

app.listen(4000);

const db = require("../models/afterModels");

const afterController = {};

afterController.initialSetup = (req, res, next) =>{
    const initial = {
        text:`CREATE TABLE IF NOT EXISTS user(
            username varchar(50) NOT NULL,
            password varchar(250) NOT NULL,
            name varchar(250) NOT NULL,
            age int NOT NULL);`
    }

    db.query(initial)
    .then(data=>next())
    .catch((err)=>next(err))
}

afterController.registerUser = (req, res, next) =>{
    const username = "HotChocoBanana";
    const password = "1234";
    const name = "Heeho";
    const age = 31;

    const getuser = {
        text: "INSERT INTO user (username, password, name, age) VALUES ($1, $2, $3, $4)",
        values: [
            username,
            password,
            name,
            age
        ]
    }

    db.query(getuser)
    .then((data)=>next())
    .catch((err)=>next(err))
}




module.exports = afterController;
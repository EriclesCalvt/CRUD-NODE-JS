const express = require("express");
const SECRET = 'ericlesprogrammer@gmail.com'
const UserModels = require("../models/UserModels");
const jwt = require("jsonwebtoken");

const router= express.Router();


router.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModels.findOne({ nome: email, password: password });

    if (!user) 
        return res.send({ Error: 'user not found' }).status(400);

    const token = jwt.sign(
    {
        id: user.id
    }, 
    SECRET, 
    {
        expiresIn: 60 * 60 * 2 // 2 horas
    })

    if (!token) return res.send({ Error: 'token not created' }).status(400);

    return res.send({ User: user, token: token }).status(200);
});

router.post('/auth/register', async (req, res) => {
    const { nome, password } = req.body;

    const user = await UserModels.findOne({ nome: nome, password: password });

    if (user) 
        return res.send({ Error: 'user alreads exists' }).status(400);

    const newUser = await UserModels.create(req.body)

    const token = jwt.sign(
    {
        id: newUser.id
    }, 
    SECRET, 
    {
        expiresIn: 60 * 60 * 2 // 2 horas
    })

    if (!token) return res.send({ Error: 'user not found' }).status(400);

    return res.send({ User: newUser, token: token }).status(200);
});

module.exports = router;
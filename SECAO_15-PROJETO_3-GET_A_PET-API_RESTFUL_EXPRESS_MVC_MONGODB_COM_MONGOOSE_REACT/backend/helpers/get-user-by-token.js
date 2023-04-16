// 
const jwt = require('jsonwebtoken');

//  Models  //
const User = require('../models/User');

//  Get user by jwt token
const getUserByToken = async (token) => {
// const getUserByToken = async (res, token) => {
    if (!token) { return res.status(401).json({ message: 'Acesso negado!' }); }
    const decoded = jwt.verify(token, 'nossosecret');
    const userId = decoded.id;
    const user = await User.findOne({ _id: userId });
    return user;
};

module.exports = getUserByToken;
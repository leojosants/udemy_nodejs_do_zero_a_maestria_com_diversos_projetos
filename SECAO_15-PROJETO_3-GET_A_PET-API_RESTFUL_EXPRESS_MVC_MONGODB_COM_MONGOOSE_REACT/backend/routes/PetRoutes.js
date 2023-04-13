// 
const router = require('express').Router();

//  Controller
const PetController = require('../controllers/PetController');

//  Middlewares
const verifyToken = require('../helpers/verify-token');

router.post('/create',verifyToken, PetController.create);

module.exports = router;
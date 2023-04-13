// 
const router = require('express').Router();

//  Controlers  //
const UserController = require('../controllers/UserController');

//  Middlewares //
const verifyToken = require('../helpers/verify-token');

//  Routes  //
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/checkUser', UserController.checkUser);
router.get('/:id', UserController.getUserById);
router.patch('/edit/:id', verifyToken, UserController.editUser);

module.exports = router;
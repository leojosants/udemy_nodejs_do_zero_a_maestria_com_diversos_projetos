// 
const router = require('express').Router();

//  Controller
const PetController = require('../controllers/PetController');

//  Middlewares
const verifyToken = require('../helpers/verify-token');
const { imageUpload } = require('../helpers/image-upload');

router.post('/create', verifyToken, imageUpload.array('images'), PetController.create);
router.get('/', PetController.getAll);
router.get('/myPets', verifyToken, PetController.getAllUserPets);
router.get('/myAdoptions', verifyToken, PetController.getAllUserAdoptions);
router.get('/:id', PetController.getPetById);

module.exports = router;
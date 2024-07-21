const express= require('express');

const router = express.Router();
const authController = require('../controllers/auth.controllers');

router.get('/signup',authController.getSignup);
router.post('/signup',authController.signup);
router.get('/login',authController.getLogin);


module.exports= router;
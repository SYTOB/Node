const express = require('express');
const router = express.Router();


const UserController = require('./app/controllers/user_controller')

// middleware that is specific to this router

router.use(function (req, res, next) {

    // res.json('nao autenticado')
    
    next();
});


router.post('/login', UserController.login);

router.post('/registerUser', UserController.registerUser)

router.post('/registerImage', UserController.registerImage)

router.get('/users', UserController.lista)
router.post('/users', UserController.cadastro)


module.exports = router;
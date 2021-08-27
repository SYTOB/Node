const express = require('express');
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/imagens')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg')
    }
})


const upload = multer({ storage })
const router = express.Router();

const UserController = require('./app/controllers/user_controller')

// middleware that is specific to this router

router.use(function (req, res, next) {

    // res.json('nao autenticado')
    
    next();
});


router.post('/login', UserController.login);

router.post('/registerUser', UserController.registerUser)

router.post('/registerImage', upload.any(), UserController.registerImage)

router.get('/users', UserController.lista)
router.post('/users', UserController.cadastro)


module.exports = router;
const Router = require('express');

const router = new Router();

const userController = require('../controllers/user.controller');

router.post('/createBook', userController.createBook)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUsers)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router;
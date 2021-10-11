const Router = require('express');

const router = new Router();

const bookController = require('../controllers/book.controller');

router.post('/createBook', bookController.createBook)
router.get('/book', bookController.getBooks)
router.get('/user/:id', bookController.getOneUsers)
router.put('/user', bookController.updateUser)
router.delete('/user/:id', bookController.deleteUser)

module.exports = router;
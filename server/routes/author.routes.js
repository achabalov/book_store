const Router = require('express');
const authorController = require('../controllers/author.controller');
const router = new Router();

router.get('/author', authorController.getAllAuthor);

module.exports = router;
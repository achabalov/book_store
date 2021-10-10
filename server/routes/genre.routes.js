const Router = require('express');
const genreController = require('../controllers/genre.controller');
const router = new Router();

router.get('/genre', genreController.getAllGenre);

module.exports = router;
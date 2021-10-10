const db = require('../db');

class GenreController {
    async getAllGenre(req, res) {
        const genre = await db.query('SELECT * FROM genre')
        res.json(genre.rows);
    }
}

module.exports = new GenreController();
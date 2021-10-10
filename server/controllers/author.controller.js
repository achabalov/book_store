const db = require('../db');

class AuthorController {
    async getAllAuthor(req, res) {
        const author = await db.query('SELECT * FROM author')
        res.json(author.rows);
    }
}

module.exports = new AuthorController();
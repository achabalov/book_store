const db = require('../db');

class UserController {
    async createBook(req, res) {
        const {book_id, title, isbn, description, price} = req.body;
        console.log(book_id, title);
        const newPerson = await db.query(`INSERT INTO book (book_id, title, isbn, description, price) values ($1, $2, $3, $4, $5) RETURNING * `,
        [book_id, title, isbn, description, price])
        res.json(newPerson.rows[0]) 
    }
    async getUsers(req, res) {
        const users = await db.query(`select * FROM book`)
        res.json(users.rows)
    }
    async getOneUsers(req, res) {
        const id = req.params.id;
        const user = await db.query(`select * FROM person where id = $1`, [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const {id, name, surname} = req.body;
        const user = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query(`delete from person where id = $1`, [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()
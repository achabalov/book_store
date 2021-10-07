const db = require('../db')

class PostController {
    async createPost(req, res) {
        const {title, content, userId} = req.body;
        const newPost = await db.query(`INSERT INTO post (user_id, title, content) VALUES ($1, $2, $3) RETURNING *`, [userId, title, content]);
        res.json(newPost.rows[0])
    }
    // async getPost(req, res) {
    //     const {title, post} = await db.query(`SELECT * FROM post`)
    // }
    async getPost(req, res) {
        const id = req.query.id;
        const post = await db.query(`select * from post where user_id = $1`, [id])
        res.json(post.rows)
    }
}

module.exports = new PostController();
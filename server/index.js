const express = require('express');
const userRouter = require('./routes/user.routes')
const genreRouter = require('./routes/genre.routes')
const authorRouter = require('./routes/author.routes')
const postRouter = require('./routes/post.routes')
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', genreRouter)
app.use('/api', authorRouter)

app.listen(PORT, ()=> console.log('Application has been started to port: ', PORT))
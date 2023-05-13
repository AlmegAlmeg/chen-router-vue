require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PostsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.SERVER_PORT || 5050;

app.use(cors());
app.use('/', PostsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

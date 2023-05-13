require('dotenv').config();
const express = require('express');

const router = express.Router();
const url = process.env.API_URL;

/**
 * Returns all posts
 */
router.get('/posts', async (req, res) => {
  try {
    const response = await fetch(`${url}/posts`);
    if (!response.ok) throw 'Bad gateway';

    const data = await response.json();
    res.status(200).json({ posts: data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

/**
 * Return post by Id
 */
router.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`${url}/posts/${id}`);
    if (!response.ok) throw 'Bad gateway';

    const data = await response.json();
    res.status(200).json({ post: data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

/**
 * Return posts by ids
 * Accepted format: 1&9&45&79&97&7
 */
router.get('/postsByIds/:ids', async (req, res) => {
  const { ids: rawIds } = req.params;

  const ids = rawIds.split('&');
  try {
    const response = await fetch(`${url}/posts`);
    if (!response.ok) throw 'Bad gateway';

    const data = await response.json();
    const posts = data.filter((p) => ids.includes(p.id.toString()));
    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

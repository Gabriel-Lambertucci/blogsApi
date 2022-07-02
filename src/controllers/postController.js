const { postGet: postGetService,
  postPost: postPostService } = require('../services/postService');

const postGet = async (__req, res) => {
  const posts = await postGetService();
  return res.status(200).json(posts);
};

const postPost = async (req, res) => {
  const post = await postPostService(req.body);
  console.log(post);
  if (typeof post === 'string') {
    return res.status(400).json({ message: post });
  }
  return res.status(201).json(post);
};

module.exports = { postGet, postPost };
const { userPost: userPostService } = require('../services/userService.js');

const userPost = async (req, res) => {
  console.log(req.body);
  const user = await userPostService(req.body);
  if (user) return res.status(201).json({ token: user });
  return res.status(409).json({ message: 'User already registered' });
};

module.exports = { userPost };
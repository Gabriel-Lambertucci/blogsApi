const { userPost: userPostService,
  userGet: userGetService,
  userIdGet: userIdGetService } = require('../services/userService.js');

const userPost = async (req, res) => {
  console.log(req.body);
  const user = await userPostService(req.body);
  if (user) return res.status(201).json({ token: user });
  return res.status(409).json({ message: 'User already registered' });
};

const userGet = async (req, res) => {
  const users = await userGetService();
  return res.status(200).json(users);
};

const userIdGet = async (req, res) => {
  const { id } = req.params;
  const user = await userIdGetService(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = { userPost, userGet, userIdGet };
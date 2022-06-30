const { User } = require('../database/models');
const { authLogin } = require('./authLogin.js');

const userPost = async ({ displayName, email, password, image }) => {
  const findEmail = await User.findOne({
    where: { email },
  });
  if (findEmail) return false;
  const user = await User.create({ 
    displayName, email, password, image });
  if (user) {
    return authLogin({ email, password });
}
};

const userGet = async () => {
  const users = User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return users;
};

const userIdGet = async (id) => {
  const user = User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return user;
};

module.exports = { userPost, userGet, userIdGet };
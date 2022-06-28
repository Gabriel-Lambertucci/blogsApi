const jwt = require('jsonwebtoken');
require('dotenv/config');
const { User } = require('../database/models');

const authLogin = async ({ email, password }) => {
  let payload = {};
  const user = await User.findOne({
    where: { 
      email,
    },
  });
  console.log(user);
  if (!user) return false;
  
  if (user.password !== password) return false;

  payload = { username: user.username, admin: true };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};

module.exports = { authLogin };
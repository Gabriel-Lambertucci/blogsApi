const { User } = require('../database/models');
const { authLogin } = require('./authLogin.js');

const userPost = async ({ displayName, email, password, image }) => {
  const findEmail = await User.findOne({
    where: { email },
  });
  console.log(findEmail);
  if (findEmail) return false;
  const user = await User.create({ 
    displayName, email, password, image });
  if (user) {
    return authLogin({ email, password });
}
};

module.exports = { userPost };
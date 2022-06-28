/* const loginServices = require('../services/loginService.js'); */
const { authLogin } = require('../services/authLogin.js');

const loginPost = async (req, res) => {
  const responseFromAuth = await authLogin(req.body);

  if (!responseFromAuth) return res.status(400).json({ message: 'Invalid fields' });

  return res.status(200).json({ token: responseFromAuth });
};

module.exports = { loginPost };
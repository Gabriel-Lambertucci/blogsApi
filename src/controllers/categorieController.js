const { categorieGet: categorieGetService,
  categoriePost: categoriePostService } = require('../services/categorieService');

const categorieGet = async (__req, res) => {
  const categories = await categorieGetService();
  return res.status(200).json(categories);
};

const categoriePost = async (req, res) => {
  const categorie = await categoriePostService(req.body);
  if (!categorie) return res.status(400).json({ message: '"name" is required' });
  return res.status(201).json(categorie);
};

module.exports = { categorieGet, categoriePost };
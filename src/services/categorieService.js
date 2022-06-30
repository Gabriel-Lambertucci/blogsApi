const { Category } = require('../database/models');

const categorieGet = async () => {
  const categories = await Category.findAll();
  return categories;
};

const categoriePost = async ({ name }) => {
  if (!name || name.length === 0) return false;
  const categorie = await Category.create({ name });
  console.log(categorie);
  return categorie;
};

module.exports = { categorieGet, categoriePost };
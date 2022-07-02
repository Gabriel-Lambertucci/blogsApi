const Sequelize = require('sequelize');
const { BlogPost, Category, PostCategory } = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const missing = 'Some required fields are missing';
const categoryNotFound = '"categoryIds" not found';

const postGet = async () => {
  const posts = await BlogPost.findAll();
  return posts;
};

const postPost = async ({ title, content, categoryIds }) => {
  if (title.length === 0 || content.length === 0 || categoryIds.length === 0) return missing;
    const result = await sequelize.transaction(async (t) => {
      const categories = await categoryIds.map(async (id) => {
        const test = await Category.findByPk(id);
        return test;
      }, { transaction: t });
      let array = []; array = await Promise.all(categories).then((value) => value);
      if (array.some((item) => item === null)) return false;
      const post = await BlogPost.create({ title, content, userId: 1 }, { transaction: t });
      categoryIds.forEach(async (id) => PostCategory.create({ postId: post.id, categoryId: id }),
      { transaction: t }); return post.id; 
      });
      if (result) return BlogPost.findByPk(result, { attributes: { exclude: ['UserId'] } }); 
      return categoryNotFound;
}; 

module.exports = { postGet, postPost };
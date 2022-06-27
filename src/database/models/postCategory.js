const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  });

  PostCategorieTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as:'postsfromproducts',
      through: PostCategorieTable,
      foreingKey: 'postId',
      otherKey: 'categorieId'
    })

    models.Category.belongsToMany(models.BlogPost, {
      as:'categoriesfromposts',
      through: PostCategorieTable,
      foreingKey: 'categorieId',
      otherKey: 'postId'
    })
  }

  return PostCategorieTable;
};

module.exports = PostCategorieSchema;
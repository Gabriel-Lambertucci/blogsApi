const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define("PostCategorie", {
    postId: DataTypes.INTEGER,
    categorieId: DataTypes.INTEGER
  });

  PostsCategories.associate = (models) => {
    models.Blogpost.belongsToMany(models.Categorie, {
      as:'postsfromproducts',
      through: PostCategorieTable,
      foreingKey: 'postId',
      otherKey: 'categorieId'
    })

    models.Categorie.belongsToMany(models.Blogpost, {
      as:'categoriesfromposts',
      through: PostCategorieTable,
      foreingKey: 'categorieId',
      otherKey: 'postId'
    })
  }

  return PostCategorieTable;
};

module.exports = PostCategorieSchema;
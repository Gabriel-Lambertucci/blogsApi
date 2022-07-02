const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true }
  }, { timestamps: false });

  PostCategorieTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as:'postsfromcategorie',
      through: PostCategorieTable,
      foreingKey: 'categoryId',
      otherKey: 'postId',
      onDelete: 'CASCADE'
    })
    
    models.BlogPost.belongsToMany(models.Category, {
      as:'categoriesfrompost',
      through: PostCategorieTable,
      foreingKey: 'postId',
      otherKey: 'categoryId',
      onDelete: 'CASCADE'
    })
  }
  return PostCategorieTable;
};

module.exports = PostCategorieSchema;
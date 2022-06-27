const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define("Blogpost", {
    title:DataTypes.STRING,
    content:DataTypes.STRING,
    published:DataTypes.DATE,
    updated:DataTypes.DATE,
  }, { timestamps: false });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      as: 'user',
      foreingKey: 'userId'
    })
  }


  return BlogPostTable;
};

module.exports = BlogPostSchema;
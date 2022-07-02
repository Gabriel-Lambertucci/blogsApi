const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define("BlogPost", {
    id:{ 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title:DataTypes.STRING,
    content:DataTypes.STRING,
    userId:{ type: DataTypes.INTEGER, foreignKey: true },
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
const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieSchema = sequelize.define("Category", {
    name: DataTypes.STRING,
  }, { timestamps: false });
  return CategorieSchema;
};

module.exports = CategorieSchema;
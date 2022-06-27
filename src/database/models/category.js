const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieSchema = sequelize.define("Category", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, { timestamps: false });
  return CategorieSchema;
};

module.exports = CategorieSchema;
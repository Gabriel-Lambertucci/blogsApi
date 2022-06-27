const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieSchema = sequelize.define("Categorie", {
    name: DataTypes.STRING,
  }, { timestamps: false });
  return CategorieSchema;
};

module.exports = CategorieSchema;
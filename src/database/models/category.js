const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieSchema = sequelize.define("Category", {
    id:{ 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
  }, { timestamps: false });
  return CategorieSchema;
};

module.exports = CategorieSchema;
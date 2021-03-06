'use strict';
const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id:{ 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
    
  }, { timestamps: false });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
      as: 'blogpost',
      foreingKey: 'userId'
    })
  }

  return UserTable;
};

module.exports = UserSchema;
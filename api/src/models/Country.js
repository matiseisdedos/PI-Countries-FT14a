const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {

  sequelize.define('country', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    imgflag: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.STRING
    },
    population: {
      type: DataTypes.STRING
    }
  });
};

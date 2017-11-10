'use strict';
module.exports = (sequelize, DataTypes) => {
  var Session = sequelize.define('ExpressSession', {
    sid: {
      type: DataTypes.STRING(32),
      primaryKey: true
    },
    expires: DataTypes.DATE,
    data: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    timestamps: false,
    freezeTableName: true,
    tableName: 'express_session'
  });
  return Session;
};
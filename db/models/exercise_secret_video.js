'use strict';
module.exports = (sequelize, DataTypes) => {
    var ExerciseSecretVideo = sequelize.define('ExerciseSecretVideo', {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'exercise_secret_video'
    });

    ExerciseSecretVideo.associate = function(models) {
        ExerciseSecretVideo.belongsTo(models.Exercise, {foreignKey: 'exercise_id'});
    };

    return ExerciseSecretVideo;
};

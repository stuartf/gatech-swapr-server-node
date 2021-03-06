'use strict';
module.exports = (sequelize, DataTypes) => {
    var TrainingExercise = sequelize.define('TrainingExercise', {
        order_served: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        is_calibration: {
            type: DataTypes.BOOLEAN,
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
        tableName: 'training_exercise'
    });

    TrainingExercise.associate = function(models) {
        TrainingExercise.belongsTo(models.Exercise, {foreignKey: 'exercise_id'});
    };

    return TrainingExercise;
};

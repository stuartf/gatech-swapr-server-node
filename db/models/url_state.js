'use strict';
module.exports = (sequelize, DataTypes) => {
    var UrlState = sequelize.define('UrlState', {
        is_graded: {
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
        tableName: 'url_state'
    });

    UrlState.associtate = function(models) {
        UrlState.belongsTo(models.Submission, {foreignKey: 'submission_id'});
        UrlState.belongsTo(models.User, {
            as: 'grader',
            foreignKey: 'grader_id'
        });
    };

    return UrlState;
};

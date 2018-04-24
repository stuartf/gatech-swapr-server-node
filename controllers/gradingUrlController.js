var model = require('../db/models');
var logger = require('../util/logger');

module.exports.getURL = function(user, assignmentId, callback) {
    logger.debug(assignmentId);
    createTaskTable(assignmentId).then(() => {
        // Get the url for the next video this user should grade
    });
};

var createTaskTable = function(assignmentId) {
    // Determine if the grading task table exists
    return new Promise((resolve, reject) => {
        model.AssignmentGradingTask;

        // Create the table
    });
};

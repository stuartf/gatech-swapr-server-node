var express = require('express');
var router = express.Router();
var controller = require('../controllers/gradingUrlController');
var passport = require('passport');

/* retrieve assignment metadata for a course */
router.route('/getUrlToGrade').get(passport.authenticate('bearer', {session: false}), (req, res) => {
    controller.getURL(req.user.id, req.query.assignment_id, (err, url) => {
        if (err) {
            return res.status(err.status).send(err.message);
        }
        return res.send(url);
    });
});

module.exports = router;

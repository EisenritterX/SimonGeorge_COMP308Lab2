const students = require('../controllers/students.server.controller');
const courses = require('../controllers/courses.server.controller');
//
module.exports = function (app) {

        // app.get("/courses",courses.list)
        app.route('/courses')
            .get(courses.list) // Interactive Exercise 5, added requirment
            .post(students.requiresLogin, courses.create);
        //
        app.route('/api/courses/:courseID')
            .get(courses.read)
            .put(students.requiresLogin, courses.hasAuthorization, courses.
                update)
            .delete(students.requiresLogin, courses.hasAuthorization, courses.
                delete);
        //
        app.param('courseID', courses.courseByID);
};

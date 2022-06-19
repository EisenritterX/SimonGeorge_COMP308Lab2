const students = require('../app/controllers/students.server.controller');
const courses = require('../controllers/courses.server.controller');
//
module.exports = function (app) {
        app.route('/api/courses')
            .get(students.requiresLogin,courses.list) // Interactive Exercise 5, added requirment
            .post(students.requiresLogin, courses.create);
        //
        app.route('/api/courses/:courseID')
            .get(courses.read)
            .put(students.requiresLogin, students.hasAuthorization, courses.
                update)
            .delete(students.requiresLogin, students.hasAuthorization, courses.
                delete);
        //
        app.param('courseID', courses.courseByID);
};

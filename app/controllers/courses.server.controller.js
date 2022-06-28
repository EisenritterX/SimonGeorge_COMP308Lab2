const mongoose = require('mongoose');
const Course = mongoose.model('Course');
const Student = require('mongoose').model('Student');

//
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};
//
exports.create = function (req, res) {
    const course = new Course();
    course.courseID = req.body.courseID;
    course.courseName = req.body.courseName;
    course.courseDesc = req.body.courseDesc;
    course.professor = req.body.professor;
    //article.creator = req.body.username;
    console.log(req.body)
    //
    //
        course.save((err) => {
            if (err) {
                console.log('error', getErrorMessage(err))

                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.status(200).json(course);
            }
        });

};
//
// Returns all courses
exports.list = function (req, res, next) {
    // Use the 'Course' static's 'find' method to retrieve a new courses document
    Course.find({}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};
//'read' controller method to display a course
exports.read = function (req, res) {
    res.status(200).json(req.course);
};
//

// 'courseByID' controller method to find a course by its id
exports.courseByID = function (req, res, next, id) {
    // Use the 'TaskCourse' static 'findOne' method to retrieve a specific a course
    Course.findOne({
        _id: id
    }, (err, course) => {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Set the 'req.course' property
            req.course = course;
            console.log(course);
            // Call the next middleware
            next();
        }
    });
};
//update a course by id
exports.update = function(req, res, next) {
    console.log(req.body);
    Course.findByIdAndUpdate(req.course.id, req.body, function (err, course) {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.json(course);
    });
};
//
// delete a course by id
exports.delete = function(req, res, next) {
    console.log('in delete:',req.course.id, req.body)
    Course.findByIdAndRemove(req.course.id, req.body, function (err, course) {
      if (err) return next(err);
      res.json(course);
    });
};
//
//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    console.log('in hasAuthorization - creator: ',req.course.courseID)
    console.log('in hasAuthorization - user: ',req.id)
    //console.log('in hasAuthorization - user: ',req.user._id)


    // if (req.article.creator.id !== req.id) {
    //     return res.status(403).send({
    //         message: 'User is not authorized'
    //     });
    // }
    next();
};

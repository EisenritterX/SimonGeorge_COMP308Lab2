const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    courseID:{type:String, unique:true, required: true},
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    courseDesc: {
        type: String, default: '',
        trim: true
    },
    professor: {
        type: String,default: '',
    }
});
mongoose.model('Course', CourseSchema);

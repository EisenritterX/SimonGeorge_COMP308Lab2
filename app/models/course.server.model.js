const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    courseCode:{type:String, unique:true, required: true,trim:true},
    courseName: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    sectionID: {
        type: Number, default: 0,
        trim: true
    },
    semester: {
        type: String,
        enum: ['FALL', 'WINTER', 'SUMMER'],
        default: 'FALL'
    }
});
mongoose.model('Course', CourseSchema);

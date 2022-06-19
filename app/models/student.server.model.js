var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Define a new 'StudentSchema'
var StudentSchema = new Schema({
    studentID:{type:String, unique:true, required: true},
    studentFirstName: String,
    studentLastName: String,
    studentEmail:{type:String,
    //email validation format
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password:{
        type:String,
        // Validate Password
        validate: [
			(password) => password && password.length > 6,
			'Password should be longer'
		]
    },
    enrollDate:{
        type:Date,
    },
    graduationDate:{
        type:Date
    }
})

// Set the 'fullname' virtual property
UserSchema.virtual('studentFullName').get(function() {
	return this.studentFirstName + ' ' + this.studentLastName;
}).set(function(studentFullName) {
	const splitName = studentFullName.split(' ');
	this.studentFirstName = splitName[0] || '';
	this.studentLastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
// before saving it into database
UserSchema.pre('save', function(next){
	//hash the password before saving it
	this.password = bcrypt.hashSync(this.password, saltRounds);
	next();
});

// Create an instance method for authenticating user
UserSchema.methods.authenticate = function(password) {
	//compare the hashed password of the database 
	//with the hashed version of the password the user enters
	return this.password === bcrypt.hashSync(password, saltRounds);
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'Student' model out of the 'Student'
mongoose.model('Student', StudentSchema);
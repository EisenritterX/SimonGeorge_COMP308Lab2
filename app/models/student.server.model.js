var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Define a new 'StudentSchema'
var StudentSchema = new Schema({
    studentNumber:{type:String, unique:true, required: true, validate:[
        (studentNumber)=> studentNumber && studentNumber.length ==9,
        'Student Number has to be 9 digits'
    ]},
    studentFirstName: String,
    studentLastName: String,
    address: String,
    city: String,
    
    studentPhone:{type:String,
        validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: [true, 'User phone number required']
    },
    studentEmail:{type:String,
    //email validation format
    match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    studentProgram:{
        type:String
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
StudentSchema.virtual('studentFullName').get(function() {
	return this.studentFirstName + ' ' + this.studentLastName;
}).set(function(studentFullName) {
	const splitName = studentFullName.split(' ');
	this.studentFirstName = splitName[0] || '';
	this.studentLastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
// before saving it into database
StudentSchema.pre('save', function(next){
	//hash the password before saving it
	this.password = bcrypt.hashSync(this.password, saltRounds);
	next();
});

// Create an instance method for authenticating user
StudentSchema.methods.authenticate = function(password) {
	//compare the hashed password of the database 
	//with the hashed version of the password the user enters
	return this.password === bcrypt.hashSync(password, saltRounds);
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'Student' model out of the 'Student'
mongoose.model('Student', StudentSchema);
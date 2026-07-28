const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
	},
	mail: {
		type: String,
		required: true,
        trim: true,
        unique: true
    },
    description:{
        type:String,
        trim:true
    },
	pass: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
        trim: true,
		unique: true
	},
	urlPic: {
		type: String,
		default: false,
		trim: true
	},
	likes: {
		type: Array,
		default: []
	}
})

userSchema.plugin(uniqueValidator,{ message: '{PATH} alredy used'});
const User = mongoose.model('user', userSchema);
module.exports = User;

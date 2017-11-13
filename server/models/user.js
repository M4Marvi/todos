var mongoose = require('mongoose');

//model for Users
var User = mongoose.model('User',{
	email : {
		type : String,
		required : true,
		minlength : 1,
		trim : true
	}
});


module.exports = {
	User
}
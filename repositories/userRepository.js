var Repository = require('../units/Repository');
var User = require('../schemas/users');

var UserRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = User;
};

UserRepository.prototype = new Repository();

UserRepository.prototype.findBytegName = function(username, callback) {

	var model = this.model;
	var query = model.find('this.fName == username || this.lName == username');
	query.exec(callback);


};

module.exports = new UserRepository();
var Repository = require('../units/Repository');
var User = require('../schemas/users');

var UserRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = User;
};

UserRepository.prototype = new Repository();

module.exports = new UserRepository();
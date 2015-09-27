var Repository = require('../units/Repository');
var WorkingDay = require('../schemas/workingDay');

var WorkingDayRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = WorkingDay;
};

WorkingDayRepository.prototype = new Repository();

WorkingDayRepository.prototype.findByIdUser = function(userID, callback) {
	var model = this.model;
	var query = model.find({userID:userID});
	query.exec(callback);


};

WorkingDayRepository.prototype.getAll = function(callback){
	var model = this.model;
	var query = model.find();
	query
	.populate('userID')
	.exec(callback);
};

module.exports = new WorkingDayRepository();
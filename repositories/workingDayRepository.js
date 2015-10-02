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

WorkingDayRepository.prototype.getAll = function(page, callback){
	var model = this.model;

	var result = {};

	var query = model.find();
	console.log(page);
	query
	.skip(2 * page)
	.limit(2)
	.populate('userID')
	.exec(function(err, workingDays){
		result.days = workingDays;
		if (err){
			return callback(err);
		}

		var countQuery = model.count({});
		countQuery.exec(function(err, count){
			if (err){
				return callback(err);
			}

			result.count = count;
			callback(null, result);
		});
	});
};

module.exports = new WorkingDayRepository();
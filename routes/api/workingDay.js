var workingDayService = require('../../services/workingDay');
var workingDayRepository = require('../../repositories/workingDayRepository');

module.exports = function(app) {


    app.post('/api/workingDay', function(req, res) {
        workingDayRepository.add(req.body, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });

    app.get('/api/workingDay', function(req, res) {
        workingDayRepository.getAll(req.query.page, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });

    app.put('/api/workingDay/:dayId', function(req, res) {
        workingDayRepository.update(req.params.dayId, req.body, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });

    app.delete('/api/users/:dayId', function(req, res) {
        workingDayRepository.delete(req.params.dayId, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });

};
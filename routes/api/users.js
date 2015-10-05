var usersRepository = require('../../repositories/userRepository');
var workingDayRepository = require('../../repositories/workingDayRepository');

module.exports = function(app) {


    app.post('/api/users', function(req, res) {

        usersRepository.add(req.body, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });



    app.get('/api/users', function(req, res) {
        usersRepository.getAll(function(err, data) {
            res.err = err;
            res.send(data);
        });
    });

    app.get('/api/users/:id', function(req, res) {
        usersRepository.getById(req.params.id, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });
    app.get('/api/usersname/:username', function(req, res) {

        usersRepository.findBytegName(req.params.username, function(err, data) {

            res.err = err;
            res.send(data);
        });
    });

    app.put('/api/users/:id', function(req, res) {
        delete req.body._id;
        usersRepository.update(req.params.id, req.body, function(err, data) {

            res.err = err;
            res.send(data);
        });
    });

    app.delete('/api/users/:id', function(req, res) {

        usersRepository.delete(req.params.id, function(err, data) {
            workingDayRepository.deleteByIdUser(req.params.id, function() {
                console.log("ok");
            });
            res.err = err;
            res.send(data);
        });
    });

};
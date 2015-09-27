var usersRepository = require('../../repositories/userRepository');
// var notificationService = require('../../services/notification');

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

    app.put('/api/users/:id', function(req, res) {
        usersRepository.update(req.params.id, req.body, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });

    app.delete('/api/users/:id', function(req, res) {
        usersRepository.delete(req.params.id, function(err, data) {
            res.err = err;
            res.send(data);
        });
    });

};
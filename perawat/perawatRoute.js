let ex = require('express');
let route = ex.Router();
let perawatController = require('./perawatController.js')

route.get('/perawat', function (req, res) {
    perawatController.getPerawat(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/perawat/:_id', function (req, res) {
    let id = req.params._id;
    perawatController.getPerawatById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/perawat', function (req, res) {
    let perawat = req.body;
    perawatController.createPerawat(perawat, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/perawat/:_id', function (req, res) {

    perawatController.deletePerawat(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/perawat/:_id', function (req, res) {
    let perawat = req.body;
    perawatController.updatePerawat(req.params._id,perawat, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
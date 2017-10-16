let ex = require('express');
let route = ex.Router();
let dokterController = require('./dokterController.js')

route.get('/dokter', function (req, res) {
    dokterController.getDokter(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});
route.get('/dokter/:_id', function (req, res) {
    let id = req.params._id;
    dokterController.getDokterById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});
route.post('/dokter', function (req, res) {
    let akses = req.body;
    dokterController.createDokter(akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/dokter/:_id', function (req, res) {

    dokterController.deleteDokter(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/dokter/:_id', function (req, res) {
    let akses = req.body;
    dokterController.updateDokter(req.params._id,akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
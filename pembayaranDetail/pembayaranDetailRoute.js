let ex = require('express');
let route = ex.Router();
let pembayaranDetailController = require('./pembayaranDetailController.js')

route.get('/pembayaranDetail', function (req, res) {
    pembayaranDetailController.getPembayaranDetail(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/pembayaranDetail/:_id', function (req, res) {
    let id = req.params._id;
    pembayaranDetailController.getPembayaranDetailById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/pembayaranDetail', function (req, res) {
    let pembayaranDetail = req.body;
    pembayaranDetailController.createPembayaranDetail(pembayaranDetail, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/pembayaranDetail/:_id', function (req, res) {

    pembayaranDetailController.deletePembayaranDetail(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/pembayaranDetail/:_id', function (req, res) {
    let pembayaranDetail = req.body;
    pembayaranDetailController.updatePembayaranDetail(req.params._id,pembayaranDetail, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
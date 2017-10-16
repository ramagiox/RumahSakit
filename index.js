let bodyParser = require('body-parser');
let mong = require('mongoose');
let ex = require('express');
let app = ex();
//route
app.use(bodyParser.json());
app.use('/', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})
let dokterRoute = require('./dokter/dokterRoute.js');
app.use('/api',dokterRoute);

let perawatRoute = require('./perawat/perawatRoute.js');
app.use('/api',perawatRoute);

let pembayaranRoute = require('./pembayaran/pembayaranRoute.js');
app.use('/api',pembayaranRoute);

let pembayaranDetailRoute = require('./pembayaranDetail/pembayaranDetailRoute.js');
app.use('/api',pembayaranDetailRoute);

mong.connect('mongodb://ramagiox:ramagiox@ds121535.mlab.com:21535/dbrumahsakit');
app.listen(8889);
let bodyParser = require('body-parser');
let mong = require('mongoose');
let ex = require('express');
let app = ex();
let jwt = require('jsonwebtoken');
global.config = require('./config/configJwt');
let verifyToken = require('./middleware/verifyToken');
let User   = require('./login/loginModel');
//route
app.use(bodyParser.json());
app.use('/', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

let login = require("./login/loginRoute.js");
app.use("/api", login);

let dokterRoute = require('./dokter/dokterRoute.js');
app.use('/api',verifyToken,dokterRoute);

let perawatRoute = require('./perawat/perawatRoute.js');
app.use('/api',verifyToken,perawatRoute);

let pembayaranRoute = require('./pembayaran/pembayaranRoute.js');
app.use('/api',verifyToken,pembayaranRoute);

let pembayaranDetailRoute = require('./pembayaranDetail/pembayaranDetailRoute.js');
app.use('/api',verifyToken,pembayaranDetailRoute);

mong.connect('mongodb://ramagiox:ramagiox@ds121535.mlab.com:21535/dbrumahsakit');

app.listen(process.env.PORT || 8889, function() {
  console.log('Node app is running on port', app.get('port'));
});
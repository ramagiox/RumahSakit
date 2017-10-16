let mong = require('mongoose');

let perawat = mong.Schema({
	KdPerawat : String,
	NamaPerawat : String,
	AlamatPerawat : String,
	KdProvinsi : String,
	TglMulaiKerja : Date,
	TingkatPerawat : String
});

let Perawat = module.exports = mong.model("Perawat", perawat, "Perawat");
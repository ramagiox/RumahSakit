let mong = require('mongoose');

let pembayaranDetail = mong.Schema({
	KdPembayaran : String,
	KdRuangan : String,
	HargaRuangan : Number,
	KdDokter : String,
	HargaDokter : Number
});

let PembayaranDetail = module.exports = mong.model("PembayaranDetail", pembayaranDetail, "PembayaranDetail");
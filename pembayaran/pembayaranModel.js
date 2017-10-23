let mong = require('mongoose');

let pembayaran = mong.Schema({
	KdPembayaran: String,
	TglPembayaran: Date,
	KdPasien: String,
	KdPetugas: String,
	HargaTotal: Number,
	JumlahPembayaran: Number,
	SisaPembayaran: Number,
	StatusPembayaran: String 
});

let Pembayaran = module.exports = mong.model("Pembayaran", pembayaran, "Pembayaran");

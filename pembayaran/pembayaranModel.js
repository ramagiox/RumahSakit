let mong = require('mongoose');

let pembayaran = mong.Schema({
	kdPelanggan: String,
	kdPembelian: String,
	TanggalPembelian: Date,
	StatusPembayaran: String,
	HargaBayar: Number,
	TanggalPembayaran: Date,
	NamaStatusPenjualan: String,
	Histori: {
		TglBeli: Date,
		TglKonfirmasi: Date,
		TglBayar: Date
	}
});

let Pembayaran = module.exports = mong.model("Pembayaran", pembayaran, "Pembayaran");
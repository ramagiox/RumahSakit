PembayaranDetail = require('./pembayaranDetailModel.js');

module.exports.getPembayaranDetail = function(callback,limit){
    PembayaranDetail.find(callback).limit(limit);
}

module.exports.getPembayaranDetailById = function(id,callback,limit){
    PembayaranDetail.findById(id,callback).limit(limit);
}

module.exports.createPembayaranDetail = function(pembayaranDetail,callback){
    PembayaranDetail.create(pembayaranDetail,callback);
}

module.exports.deletePembayaranDetail = function(id,callback){
    PembayaranDetail.findByIdAndRemove(id,callback);
}

module.exports.updatePembayaranDetail = function(id,pembayaranDetail,callback){
    PembayaranDetail.findByIdAndUpdate(id,pembayaranDetail,callback);
}
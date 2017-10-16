Dokter = require('./dokterModel.js');

module.exports.getDokter = function(callback,limit){
    Dokter.find(callback).limit(limit);
}
module.exports.getDokterById = function(id,callback,limit){
    Dokter.findById(id,callback).limit(limit);
}

module.exports.createDokter = function(akses,callback){
    Dokter.create(akses,callback);
}

module.exports.deleteDokter = function(id,callback){
    Dokter.findByIdAndRemove(id,callback);
}

module.exports.updateDokter = function(id,akses,callback){
    Dokter.findByIdAndUpdate(id,akses,callback);
}
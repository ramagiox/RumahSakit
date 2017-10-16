Perawat = require('./perawatModel.js');

module.exports.getPerawat = function(callback,limit){
    Perawat.find(callback).limit(limit);
}

module.exports.getPerawatById = function(id,callback,limit){
    Perawat.findById(id,callback).limit(limit);
}

module.exports.createPerawat = function(perawat,callback){
    Perawat.create(perawat,callback);
}

module.exports.deletePerawat = function(id,callback){
    Perawat.findByIdAndRemove(id,callback);
}

module.exports.updatePerawat = function(id,perawat,callback){
    Perawat.findByIdAndUpdate(id,perawat,callback);
}
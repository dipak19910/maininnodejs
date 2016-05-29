var mongodb=require("mongodb");
var MongoClient=mongodb.MongoClient;
var Q=require("q");
// var url='mongodb://localhost:27017/mail';
exports.getConnection=function(db){
	var d=Q.defer();
	console.log("ddd")
	MongoClient.connect("mongodb://localhost:27017/"+db,function (err,db) {
	if(err){
		console.log("eeeeeeeeeeee"+err)
		d.reject(err)
		return;
	}else{
		d.resolve(db)
	}
})
	return d.promise;

}

exports.close=function(db){
	var d=Q.defer();
	if(!db){
		d.reject("db instance not found ");
		return;
	}
	else{
		db.close();
		d.resolve()
	}
	d.promise;
}
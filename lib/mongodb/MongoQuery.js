var Connection=require("./Connection");
var Q=require("q")

exports.query=function (collection) {
	// body...
	var db=undefined;
	return Connection.getConnection("mail").then(function(connection){
		db=connection
	}).then(function(){
		var collection=db.collection("login",db);
		return find(collection)
	}).then(function(result){
		return result
	}).fail(function(err){
		return err
	})
}

function find(collection,db){
		var d=Q.defer()
	collection.find().toArray(function (err, result) {
			if (err) {
				d.reject(err);
				return;
			} else{
				d.resolve(result)
			}
			Connection.close(db)
			
		});
	return d.promise;
}
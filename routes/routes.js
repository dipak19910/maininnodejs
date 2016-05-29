var rest=require("../lib/rest/ParseBody");
var user=require("../lib/rest/User");

var appRouter=function(app){
	app.get("/get",function(req,res){
		var params=rest.parseParameters(req);
		res.send("hello world ")
		res.end();
	})
/*
	app.post("/createUser",function(req,res){
		var params=rest.parseParameters(req);

		res.send(params)
		/*return rest.createUser(params).then(function(){

		}).fail(function(){

		})
	})*/
	app.get("/allUser",function(req,res){
		return user.allUser().then(function(user){
			return res.send(user)
		}).fail(function(err){
			return err
		})
	})
	
}
// module.exports=appRoute;
module.exports = appRouter;

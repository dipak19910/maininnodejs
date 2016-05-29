var express=require('express');
var bodyParser=require('body-parser');
var rest=require("./lib/rest/ParseBody")
var app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);
var server = app.listen(3000, function () {
	console.log("Listening on "+rest.getIp()+":"+server.address().port);
});

function getIp(){
	var os=require('os')
	var ip=os.networkInterfaces();
	var numberOfIP=Object.keys(ip);
	if(numberOfIP.length===1){
		return "127.0.0.1"	
	}else{
		for(var key in ip){
			if(key==="lo"){
				continue;
			}
		var ipInfo=ip[key];
		for (var i = 0; i < ipInfo.length; i++) {
			var ipDetails=ipInfo[i];
			if (ipDetails["family"]=== "IPv4") {
				return ipDetails["address"]
			};

		};
		}
	}

}
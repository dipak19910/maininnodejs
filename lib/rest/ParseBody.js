
exports.parseParameters=function (req) {
	var param={}
	for(var key in req.body||{}){
		param[key]=JSON.parse(req.body[key])
	}
	for(var key in req.params||{}){
		param[key]=JSON.parse(req.params[key])
	}
	for(var key in req.query	||{}){
		param[key]=JSON.parse(req.query[key])
	}
	return param
}

exports.getIp=function (){
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
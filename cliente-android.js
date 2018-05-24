var http = require("http");
var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    headers: {
        'Accept':'application/json'
    }
};

http.get(configuracoes, function(res, statusCode){

	console.log(statusCode);
	res.on("data", function(body){
		console.log("Corpo: " + body);
	})

});
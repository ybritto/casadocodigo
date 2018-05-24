module.exports = function(app){

	app.get("/", function(req,res){
		var connection = app.infra.connectionFactory();
		var produtosDao = new app.infra.ProdutosDAO(connection);
		produtosDao.lista(function(err, results){
			console.log(results);
			 res.render('home/index',{livros:results});
		});
		connection.end();
	});

}
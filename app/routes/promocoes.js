module.exports = function(app) {
	app.get("/promocoes/form", function(req, res){

		var connection = app.infra.connectionFactory();
		var produtosDao = new app.infra.ProdutosDAO(connection);

		produtosDao.lista(function(err, results){
			res.render("promocoes/form", {lista: results});
		});

		connection.end();

	});

	app.post("/promocoes", function(req, res){
		var promocao = req.body;
		console.log(promocao);
		res.redirect("promocoes/form");
	});
}
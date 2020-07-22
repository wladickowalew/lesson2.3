let express = require("express");
let app = express();

app.get("/", function (req, res) {
	res.send("Hello Node.js!");
});

app.get("/page/", function(req, res){
	let x = req.query.foo;
	res.send({foo: x});
})

app.listen(8080);
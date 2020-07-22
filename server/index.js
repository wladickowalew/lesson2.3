let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());

app.get("/", function (req, res) {
	res.send("Hello Node.js!");
});

app.get("/page/", function(req, res){
	let x = req.query.foo;
	res.send({foo: x});
})

app.listen(8080);
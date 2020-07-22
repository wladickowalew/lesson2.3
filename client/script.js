$("#request").on("click", function () {
	let request = $.get("http://localhost:8080/");
	request.done(function(data){
		console.log(data);
	});
	request.fail(function(jqXHR, textStatus, error){
		console.log(textStatus, error);
	})
})
var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
	fs.readFile('./cat.jpg', function(err, data) {
		fs.writeFile('./index.html',data, function(err) {
		    if (request.method === 'GET' && request.url === '/hello') {
		    	response.setHeader("Content-Type", "image/jpg;");
		        response.write(data);
		        response.end();
		    } else {
		    	response.setHeader("Content-Type", "text/html; charset=utf-8");
		        response.statusCode = 404;
		        response.write('<h1>404: Zła ścieżka!</h1>');
		        response.end();
		    }
		});
	});
});
server.listen(9000);
/**
 * Created by Tal on 10/08/2015.
 */

var http = require('http');
var fs = require('fs');

function onRequest(request, response)
{



    if (request.url.toString() === ("/"))
    {
        console.log("yes!");
        response.writeHead(200, {"content-type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    if (request.url.toString() === ("/css/bootstrap.min.css"))
    {
        console.log("yes!");
        response.writeHead(200, {"content-type": "text/css"});
        fs.createReadStream("./css/bootstrap.min.css").pipe(response);
    }
    if (request.url.toString() === ("/font-awesome/css/font-awesome.min.css"))
    {
        console.log("yes!");
        response.writeHead(200, {"content-type": "text/css"});
        fs.createReadStream("./css/bootstrap.min.css").pipe(response);
    }
    if (request.url.toString() === ("/css/animate.min.css"))
    {
        console.log("yes!");
        response.writeHead(200, {"content-type": "text/css"});
        fs.createReadStream("./css/animate.min.css").pipe(response);
    }
    if (request.url.toString() === ("/css/creative.css"))
    {
        console.log("yes!");
        response.writeHead(200, {"content-type": "text/css"});
        fs.createReadStream("./css/creative.css").pipe(response);
    }
    if (request.url.toString() === ("/img/logo.png"))
    {
        console.log("yes!");
        var stat = fs.statSync('./img/logo.png');
        response.writeHead(200, {
            'Content-Type' : 'image/png',
            'Content-Length': stat.size
        });
        fs.createReadStream('./img/logo.png').pipe(response);
    }

    console.log("got req" + request.url);
}

http.createServer(onRequest).listen(8888);
console.log("server is running....")


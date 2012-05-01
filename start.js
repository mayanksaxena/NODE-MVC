/*
	version - 1.0
	Author - Mayank Saxena
	Purpose - To introduce the MVC architecture in node js.
	Description - This file is the index file for this structure to start the server.
*/

var server = require("./server");								//Require the server file which consist the start server code.
var router = require("./controller/router");					//Require the routers who decide the page.
var requestHandlers = require("./controller/requestHandlers");	//Require the request handler who decide the method to call on page load.

var handle = {}													//Simple JS object a collection of request handlers
handle["/"] = requestHandlers.start;							
handle["/start"] = requestHandlers.start;						
handle["/upload"] = requestHandlers.upload;						

server.start(router.route, handle);								//Call the method start of server module(from our server file).
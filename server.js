/**
	version - 1.0
	Author - Mayank Saxena
	Purpose - The Basic of server.
	Description - This file is the server file for this structure which consisit the configuration for the server.
*/


var http = require("http");		//Require the http module.
var url = require("url");		//Require the url module.

//Start Function
//Param 1:- Route is the function to handle the request.
//Param 2:- Handle is the object which decide the page for the request that it exist or not.
function start(route, handle) {
	//Call this function to handle the request and the response.
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;		//Get the pathname of the requested URL.
    console.log("Request for " + pathname + " received.");	
	
    route(handle, pathname, response);				//Route will return the Content of the page to be shown on VIEW part.This will call the response 
	
  }

  http.createServer(onRequest).listen(8888);		//Create the Server and run on the port 8888
  console.log("Server has started.");
}

exports.start = start;								//Export the function name to make it call on the other files. 
/**
	version - 1.0
	Author - Mayank Saxena
	Purpose - To Handle the Requests.
	Description - This file contain the method to choose the particular methos from any controller and handle the basic requests.
*/

//Our basic route method to handle the requests.
//Param 1: Handle will consist the method name from controller.
//Param 2: Pathname To check that method exists or not.
function route(handle, pathname, response) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);	//Return whatever the method returns
  } else {
    console.log("No request handler found for " + pathname);
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("404 Not Found");
	response.end();
  }
}

exports.route = route;	//Export this method to make it accessible in another files.
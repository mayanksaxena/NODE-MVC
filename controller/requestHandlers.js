/**
	version - 1.0
	Author - Mayank Saxena
	Purpose - Will consist the methods for the particular requsts.
	Description - This file contain the methods for any particular controller we can create multiple controllers.
*/

//Sample First Method.
function start(response) {
  console.log("Request handler 'start' was called.");
  //TODO:-Need to write the basic of page in one file to show on the view part.
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("Hello I am in start");
	response.end();
  //return "Hello I am in start";
}

//Sample Second Method
function upload(response) {
  console.log("Request handler 'upload' was called.");
  //TODO:-Need to write the basic of page in one file to show on the view part.
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("Hello i am in upload");
	response.end();
 // return "Hello i am in upload";
}

exports.start = start;		//Export the methods to make it accessible in another files.
exports.upload = upload;	//Export the methods to make it accessible in another files.
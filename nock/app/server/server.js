import express from "express";
import info from "../utils/logging.js";
var server = http.createServer(function(req, res) {
    info("Server started successfullu");
    validateRequest(req, res);
});



function validateRequest(req, res) {
    if (req.url == "/") {
        successfullyDone(res, "this is home page \n");
    } else if (req.url == "/student") {
        successfullyDone(res, "this is student page\n");
    } else if (req.url == "/class") {
        successfullyDone(res, "this is class page \n");
    } else {
        errorMessage(res);
    }
}

function errorMessage(res) {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.write(
        JSON.stringify({ errorMessage: "you have entered wrong address \n" })
    );
    res.end();
}

function successfullyDone(res, message) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify({ status: "success", response: message }));
    res.end();
}

server.listen("8083");

console.log("Node.js web server at port 5000 is running..");
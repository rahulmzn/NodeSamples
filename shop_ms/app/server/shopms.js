const express = require('express');
var application = express();

var listener = application.listen(8083, () =>
    console.log("Shop Microservice is started")
);
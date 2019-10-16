var log={
info: function(message){
console.log("Info Level Logging "+ message);
},

debug: function(message){
    console.log("Debug Level Logging "+ message);
},
error: function(message){
    console.log("Error Level Logging "+ message);
}

};

module.exports=log;
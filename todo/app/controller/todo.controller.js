"use strict";

var todoContrl = function (todo){
    console.log("stating controller");
    var todoObject = {};

    todoObject.postTodo = function (req, res, next){

        var newTodo = new todo(req.body);

        newTodo.save(function (err, todo){
            if(err){
                res.json({status: false, message: err.message});
                return;
            }
            res.json({status: true, todo: todo});
        });

    }

    todoObject.GetTodo = function(req, res, next){
		Todo.find(function(err, todos){
			if(err) {
				res.json({status: false, error: "Something went wrong"});
				return
			}
			res.json({status: true, todo: todos});
		});
    }
    

    return todoObject;


}

module.exports= todoContrl;
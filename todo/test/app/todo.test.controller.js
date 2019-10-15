"use strict"

var should = require('should'),
	sinon = require('sinon'),
    mongoose = require('mongoose');
    
    require('sinon-mongoose');

    var todoModel = require('../../app/model/todo.model.js');

    describe("todo testing approach", function (){

        describe ("test post ", function(){
                var saveStub= sinon.stub();
                function book(){
                        this.save= saveStub;
                }
                var req= {
                    body: {
                         todo: "Test trying from mock data"
                    }
                }
                var res= {}, next= {};

                var todoController = require('../../app/controller/todo.controller')(book);
                todoController.postTodo(req, res, next);
                sinon.assert.calledOnce(saveStub);
        });

    });
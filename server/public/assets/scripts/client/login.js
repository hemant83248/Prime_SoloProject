var app=angular.module("indexApp",[]);app.controller("ButtonController",["$scope","$http","$location",function(a,b,c){a.goToRegistration=function(){console.log("Registration button clicked"),window.location.assign("http://localhost:3000/registration")},a.goToLogIn=function(){window.location.assign("http://localhost:3000")}}]);
var indexApp=angular.module("indexApp",[]);indexApp.controller("ButtonController",["$scope","$http",function(a,b){a.goToRegistration=function(){console.log("Registration button clicked"),window.location.assign("http://localhost:3000/registration")},a.goToLogIn=function(){window.location.assign("http://localhost:3000")}}]);
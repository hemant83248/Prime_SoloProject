var app=angular.module("logInApp",[]);app.controller("ButtonController",["$scope","$http","$location",function(a,b,c){a.goToRegistration=function(){var a=location.origin,b=a+"/registration";window.location.assign(b)},a.goToLogIn=function(){var a=location.origin,b=a+"/login";window.location.assign(b)}}]);
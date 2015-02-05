var filmBit = angular.module('filmBit', ['ngAnimate', 'ngRoute', 'firebase', 'mainController']);

var mainController = angular.module('mainController', ['firebase']);


filmBit.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'views/home.html'
	}).
	when('/bitForm', {
		templateUrl: 'views/bitForm.html',
		controller: 'bitListController'
	}).
	when('/login', {
		templateUrl: 'views/login.html',
		controller: 'RegisterController'
	}).
	when('/bitList', {
		templateUrl: 'views/bitList.html',
		controller: 'bitListController'
	}).
	when('/register', {
		templateUrl: 'views/register.html',
		controller: 'RegisterController'
	}).
	when('/profile', {
		templateUrl: 'views/profile.html'
	})

}]);




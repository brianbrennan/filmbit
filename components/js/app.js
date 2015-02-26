var filmBit = angular.module('filmBit', ['ngAnimate', 'ngRoute', 'firebase', 'mainController']);

var mainController = angular.module('mainController', ['firebase']);


filmBit.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'views/home.html',
		controller: 'bitListController',
		title: '| Home'
	}).
	when('/bitForm', {
		templateUrl: 'views/bitForm.html',
		controller: 'bitListController',
		title: '| bitForm'
	}).
	when('/login', {
		templateUrl: 'views/login.html',
		controller: 'RegisterController',
		title: '| Login'
	}).
	when('/bitList', {
		templateUrl: 'views/bitList.html',
		controller: 'bitListController',
		title: '| bitList'
	}).
	when('/register', {
		templateUrl: 'views/register.html',
		controller: 'RegisterController',
		title: '| Sign Up'
	}).
	when('/profile', {
		templateUrl: 'views/profile.html',
		title: '| Profile'
	})

}]);




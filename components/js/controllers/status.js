filmBit.controller('statusController', function($scope, $rootScope, $firebase, $location, $route){

	var ref = new Firebase("https://filmbitapp.firebaseio.com");

	ref.onAuth(authDataCallback);

	function authDataCallback(authData) {
		if (authData) {
			console.log("User " + authData.uid + " is logged in with " + authData.provider);

			$rootScope.authUser = authData;
		} else {
			console.log("User is logged out");
		}
	}

	$scope.logout = function(){
		ref.unauth();
		$route.reload();
		$location.path('/');
	}

});//statusController
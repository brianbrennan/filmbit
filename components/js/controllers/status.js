filmBit.controller('statusController', function($scope, $rootScope, $firebase, $location, $route){

	var ref = new Firebase("https://filmbitapp.firebaseio.com");

	ref.onAuth(authDataCallback);

	function authDataCallback(authData) {
		if (authData) {
			$rootScope.authUser = authData;
			console.log("User " + authData.uid + " is logged in with " + authData.provider);
		} else {
			console.log("User is logged out");
		}
	}

	$scope.logout = function(){
		ref.unauth();
		$location.path('/');
		window.location.reload();
	}

	$rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
    //Change page title, based on Route information
    $rootScope.title = $route.current.title;
  });

});//statusController
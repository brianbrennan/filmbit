filmBit.controller('RegisterController', 
	function($scope, $firebaseAuth, $location, $rootScope){

		var ref = new Firebase("https://filmbitapp.firebaseio.com");

		$scope.loginUser =  function(){
			ref.authWithPassword({
				email    : $scope.user.email,
				password : $scope.user.password,

			}, function(error) {
				if (error === null) {
					$location.path('/');
					$rootScope.user = authData;
					console.log(authData);
				} else {
					console.log("Error Logging User:", error);
				}
			});
		}

		$scope.registerUser = function(){
			ref.createUser({
				email: $scope.user.email,
				password: $scope.user.password,
				username: $scope.user.userName,
				firstName: $scope.user.firstName,
				lastName: $scope.user.lastName,

			}, function(error){
				if(error === null){
					console.log('creation successful');
					$location.path('/');

				} else {
					console.log('error')
				}
			});
		}


}); //RegisterController
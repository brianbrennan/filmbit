filmBit.controller('bitListController',
	function($scope, $firebase, $rootScope){
		var ref = new Firebase('https://filmbitapp.firebaseio.com/bitList');

		var bitList = $firebase(ref);

		$scope.bitList = bitList.$asObject();

		$scope.plotRating, $scope.actingRating, $scope.cineRating, $scope.atmoRating = 5;

		$scope.totalRating = 5;

		$scope.addBit = function(){


			$scope.plotRating = parseInt($scope.plotRating);
			$scope.actingRating = parseInt( $scope.actingRating);
			$scope.cineRating = parseInt($scope.cineRating);
			$scope.atmoRating = parseInt($scope.atmoRating);


			bitList.$push({
				movieTitle: $scope.movieTitle,
				yearOfRelease: $scope.yearOfRelease,
				actingRating: $scope.actingRating,
				photographyRating: $scope.cineRating,
				plotRating: $scope.plotRating,
				atmoRating: $scope.atmoRating,
				totalRating: $scope.totalRating,
				blurb:  $scope.blurb

			});
		}

		$scope.total = function(){

			$scope.plotRating = parseInt($scope.plotRating);
			$scope.actingRating = parseInt( $scope.actingRating);
			$scope.cineRating = parseInt($scope.cineRating);
			$scope.atmoRating = parseInt($scope.atmoRating);

			$scope.totalRating = ($scope.plotRating + $scope.actingRating + $scope.cineRating + $scope.atmoRating) / 4;

		}
	});//bitListController
(function () {
	'use strict';
	
	angular.module('starter').controller('mainCtrl', ['$scope', '$state', '$ionicModal', mainCtrl]); 

	function mainCtrl($scope, $state, $ionicModal) {
		$scope.onSwipeLeft = function () {
			console.log('left');
		};
		$scope.onSwipeRight = function () {
			console.log('right');
		};
	};

})();


(function () {
	'use strict';
	
	angular.module('starter').controller('videoCtrl', ['$scope', '$state', '$ionicModal', videoCtrl]); 

	function videoCtrl($scope, $state, $ionicModal) {

		var video = document.querySelector('video');
		console.log(video);
		video.onended = function(e) {
			$state.go('app.slide-1');
		}
	};

})();


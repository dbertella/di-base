(function () {
	'use strict';
	
	angular.module('starter').controller('videoCtrl', ['$scope', '$state', '$timeout', videoCtrl]); 

	function videoCtrl($scope, $state, $timeout) {

		var video = document.querySelector('video');
		video.load();
		$scope.play = function () {
			video.play();
		}
		video.onended = function(e) {
			$state.go('app.slide-1');
			$timeout(function () {
				video.load();
			}, 500);
		}


	};

})();


(function () {
	'use strict';
	
	angular.module('starter').controller('videoCtrl', ['$scope', '$state', '$timeout', videoCtrl]); 

	function videoCtrl($scope, $state, $timeout) {

		var video = document.querySelector('video');
		var skip = document.querySelector('.skip');
		var playButton = document.querySelector('.play');
		$scope.videoEnded = false;
		video.load();

		document.querySelector('.menu').style.display = 'none';



		$scope.play = function () {
			video.play();
		}

		video.onended = function(e) {
			skip.style["z-index"] = -1;
			playButton.style["z-index"] = -1;
			$scope.videoEnded = true;
			document.querySelector('.menu').style.display = 'flex';
		}
		$scope.onSwipeLeft = function (nextState) {
			// console.log("left");
			if ($scope.videoEnded) {
				$timeout(function () {
					video.load();
					skip.style["z-index"] = 1;
					playButton.style["z-index"] = 1;
					$scope.videoEnded = false;
				}, 500);
				$state.go('app.' + nextState);	
			}
		};
	};
})();


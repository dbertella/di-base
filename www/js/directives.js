(function () {
	'use strict';
	
	angular.module('starter')
		.directive('exEspulso', [function () {
			return {
				restrict: 'A',
				link: function (scope, el, attrs) {

					var audio = document.querySelector('audio');

					el[0].addEventListener('click', function () {
						audio.play();
					});
				}
			};
		}]);
		// .directive('exSelected', [function () {
		// 	return {
		// 		restrict: 'A',
		// 		link: function (scope, el, attrs) {

		// 			el[0].addEventListener('click', function () {
		// 				[].forEach.call(document.querySelectorAll('p'), function(item) {
		// 				    item.listClass.remove('active');
		// 			    });
		// 				el[0].listClass.add('active');
		// 			});
					
		// 		}
		// 	};
		// }]);
})();


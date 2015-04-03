(function () {
	'use strict';
	
	angular.module('starter').controller('mainCtrl', ['$scope', '$state', '$ionicModal', mainCtrl]); 

	function mainCtrl($scope, $state, $ionicModal) {

		var vm = this;

		vm.showMenu = false;
		
		vm.onSwipeLeft = function (nextState) {
			$state.go('app.' + nextState);
		};
		vm.onSwipeRight = function (nextState) {
			$state.go('app.' + nextState);
		};

		// $scope.goToVideo = function () {
		// 	var video = document.querySelector('video');
		// 	video.load();
		// 	$state.go('video');
		// };

		$scope.select = function (index) {
			$scope.selected = index;
		};

		// modals
		// Modal 1 - attacco
		$ionicModal.fromTemplateUrl('templates/modal/attacco.html', {
		    id: '1', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal1 = modal;
		});

		// Modal 2 - difesa
		$ionicModal.fromTemplateUrl('templates/modal/difesa.html', {
		    id: '2', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal2 = modal;
		});

		// Modal 3 - avversari
		$ionicModal.fromTemplateUrl('templates/modal/avversari.html', {
		    id: '3', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal3 = modal;
		});

		// Modal 4 - trattamento
		$ionicModal.fromTemplateUrl('templates/modal/trattamento.html', {
		    id: '4', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal4 = modal;
		});

		// Modal 5 - info
		$ionicModal.fromTemplateUrl('templates/modal/info-modal.html', {
		    id: '5', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal5 = modal;
		});

		// Modal 6 - rcp
		$ionicModal.fromTemplateUrl('templates/modal/rcp-modal.html', {
		    id: '6', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal6 = modal;
		});
		// Modal 7 - bio
		$ionicModal.fromTemplateUrl('templates/modal/bio-modal.html', {
		    id: '7', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal7 = modal;
		});

		$scope.openModal = function(index) {
			var oModal = 'oModal' + index;
			$scope[oModal].show();
		};

		$scope.closeModal = function(index) {
			var oModal = 'oModal' + index;
			$scope[oModal].hide();
		};

		// Cleanup the modals when we're done with them (i.e: state change)
		// Angular will broadcast a $destroy event just before tearing down a scope 
		// and removing the scope from its parent.
		$scope.$on('$destroy', function() {
			$scope.oModal1.remove();
			$scope.oModal2.remove();
			$scope.oModal3.remove();
			$scope.oModal4.remove();
			$scope.oModal5.remove();
			$scope.oModal6.remove();
		});


	};

})();



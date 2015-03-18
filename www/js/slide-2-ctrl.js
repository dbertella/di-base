(function () {
	'use strict';
	
	angular.module('starter').controller('slide2Ctrl', ['$scope', '$state', '$ionicModal', slide2Ctrl]); 

	function slide2Ctrl($scope, $state, $ionicModal) {
		
		// Modal 1
		$ionicModal.fromTemplateUrl('templates/modal/attacco.html', {
		    id: '1', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal1 = modal;
		});

		  // Modal 2
		  $ionicModal.fromTemplateUrl('templates/modal/difesa.html', {
		    id: '2', // We need to use and ID to identify the modal that is firing the event!
		    scope: $scope
		}).then(function(modal) {
			$scope.oModal2 = modal;
		});

		$scope.openModal = function(index) {
			if(index == 1) $scope.oModal1.show();
			else $scope.oModal2.show();
		};

		$scope.closeModal = function(index) {
			if(index == 1) $scope.oModal1.hide();
			else $scope.oModal2.hide();
		};

		  // Cleanup the modals when we're done with them (i.e: state change)
		  // Angular will broadcast a $destroy event just before tearing down a scope 
		  // and removing the scope from its parent.
		  $scope.$on('$destroy', function() {
		  	$scope.oModal1.remove();
		  	$scope.oModal2.remove();
		  });

		};

	})();


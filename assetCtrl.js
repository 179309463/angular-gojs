angular
	.module('ableApp')
	.controller('assetCtrl',
		['$scope','$stateParams', 'machineFactory','$state',
		function ($scope, $stateParams, machineFactory,$state) {
			// console.log($stateParams.id);
			var state = $state;
			$scope.asset  = machineFactory.getById($stateParams.id); 


			$scope.cancel = function () {
		    state.go('diagram');
		};
			// console.log($scope.asset);


			//scope function for form submit
			// calls function in machine factory (with changes)
			


		}
]);


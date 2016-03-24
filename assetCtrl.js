angular
	.module('ableApp')
	.controller('assetCtrl',
		['$scope','$stateParams', 'machineFactory',
		function ($scope, $stateParams, machineFactory) {
			console.log($stateParams.id);
			$scope.asset  = machineFactory.getById($stateParams.id); 
			console.log($scope.asset);


			//scope function for form submit
			// calls function in machine factory (with changes)
			


		}
]);


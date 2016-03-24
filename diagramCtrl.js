angular.module('ableApp')
.controller('diagramCtrl', ['$scope','machineFactory',function($scope,machineFactory) {
	$scope.model = new go.TreeModel(machineFactory.getAll());
	$scope.model.selectedNodeData = null;
}]);




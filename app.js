var app = angular.module('todoApp', []);

app.controller('TodoController', ['$scope', 'TodoFactory', function($scope, TodoFactory) {
	$scope.newItem = '';
	$scope.items = TodoFactory;

	//add item to the list
	$scope.addItem = function() {
		$scope.items.push($scope.newItem);
		$scope.newItem = '';
	}

	//remove item from the list
	$scope.deleteItem = function(index) {
		$scope.items.splice(index, 1);
	}	
}]);


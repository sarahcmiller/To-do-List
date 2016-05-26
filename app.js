var app = angular.module('todoApp', []);

app.controller('TodoController', ['$scope', 'TodoFactory', function($scope, TodoFactory) {
	$scope.newItem = '';
	$scope.items = TodoFactory;
	$scope.success = false;

	//add item to the list
	$scope.addItem = function() {
		$scope.items.push($scope.newItem);
		$scope.newItem = '';
		$scope.success = true;
	}

	//remove item from the list
	$scope.deleteItem = function(index) {
		$scope.items.splice(index, 1);
	}	

	//list of items and when added
	$scope.getAllitems = function(index) {};
}]);

app.controller('NextController', function($scope, TodoFactory) {
	$scope.items = TodoFactory;
})

app.factory('TodoFactory', [function() {
	var items = []
}]);

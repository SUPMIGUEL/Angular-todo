var app = angular.module("todoApp", []); // What's missing? Hint, it's more than one thing.

app.controller("TodosController", function($scope) { // What's missing?
    
    $scope.todo = {description:""};

	$scope.todos = [{description:"Todo1"},
                    {description: "Todo2"}]; // Store todo items here. What is the data type?
    $scope.show = false;
	

    $scope.addTodo = function(todo) { // Rewrite to make this function abailable in your view
		// Add code here
        $scope.todos.push(todo);
        $scope.todo = {};
        $scope.todoForm.$setPristine();
        $scope.show = false;
	};

	$scope.deleteAll = function(todo) { // Rewrite to make this function abailable in your view
		// Add code here
        $scope.todos = [];
        $scope.todo = {};
	};

    $scope.showForm = function(){
        $scope.show = true;
    };

}); 
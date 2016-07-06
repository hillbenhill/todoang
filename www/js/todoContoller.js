var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    //var tasksTitle = {todoText:$scope.todoInput, done:false};
    $scope.todoList = [];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.delete = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
     

});

// angular.module('todoApp', [])
//     .controller('todoController', function($scope) {
//         $scope.tasks = [];
//         $scope.add = function() {
//             $scope.tasks.push($scope.title);
//         }
//         $scope.delete = function() {
//             $scope.tasks.splice(this.$index, 1);
//         }
//     })
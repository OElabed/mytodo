(function () {
    'use strict';

    angular.module('todo', ['ui.router'])
        .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
            $stateProvider.state('todo', {
                url: '/todo',
                views: {
                    'main': {
                        controller: 'TodoCtrl',
                        templateUrl: 'app/todo/todo.tpl.html'
                    }
                },
                data: {
                    pageTitle: 'TODO'
                }
            });
            //$locationProvider.html5Mode(true);
        }])


        .controller('TodoCtrl', ['$scope', '$filter', function ($scope, $filter) {


            $scope.todos = [
                {
                    name: 'tache 1',
                    completed: false,
                    editing: false
                }, {
                    name: 'tache 2',
                    completed: false,
                    editing: false
                }
            ];



            $scope.remaining = $scope.todos.length;

            $scope.toggleAll = false;

            $scope.filterAll = true;
            $scope.filterActive = false;
            $scope.filterCompleted = false;

            $scope.statusFilter = '';

            $scope.completedCount = false;

            $scope.notEmptyTodos = true;


            $scope.delete = function (index) {
                $scope.todos.splice(index, 1);
                $scope.remaining = $scope.remaining - 1;
            };

            $scope.addTodo = function () {
                if ($scope.newTodo) {
                    $scope.todos.push({ name: $scope.newTodo, completed: false, editing: false });
                    $scope.newTodo = '';
                }
            };


            $scope.$watch('todos', function () {
                $scope.remaining = $filter('filter')($scope.todos, { completed: false }).length;

                if ($scope.remaining) {
                    $scope.toggleAll = false;
                } else {
                    $scope.toggleAll = true;
                }

                if ($scope.remaining !== $scope.todos.length) {
                    $scope.completedCount = true;
                } else {
                    $scope.completedCount = false;
                }
            }, true);


            $scope.toggleAllCompleted = function (toggleAll) {
                if (toggleAll) {
                    angular.forEach($scope.todos, function (value) {
                        if (!value.completed) {
                            value.completed = true;
                        }
                    });
                } else {
                    angular.forEach($scope.todos, function (value) {
                        if (value.completed) {
                            value.completed = false;
                        }
                    });
                }
            };

            $scope.editTodo = function (todo) {
                todo.editing = false;
            };

            $scope.changeFilter = function (index) {
                if (index === 1) {
                    $scope.filterAll = true;
                    $scope.filterActive = false;
                    $scope.filterCompleted = false;
                    $scope.statusFilter = '';
                } else if (index === 2) {
                    $scope.filterAll = false;
                    $scope.filterActive = true;
                    $scope.filterCompleted = false;
                    $scope.statusFilter = { completed: false };
                } else {
                    $scope.filterAll = false;
                    $scope.filterActive = false;
                    $scope.filterCompleted = true;
                    $scope.statusFilter = { completed: true };
                }
            };

            $scope.clearCompleted = function () {
                $scope.todos = $filter('filter')($scope.todos, { completed: false });
            };


        }]);

})();
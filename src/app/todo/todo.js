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
            $locationProvider.html5Mode(true);
        }])


        .controller('TodoCtrl', ['$scope', function ($scope) {


            $scope.todos = [
                {
                    name: 'tache 1',
                    completed: false
                }, {
                    name: 'tache 2',
                    completed: true
                }
            ];

            $scope.remaining = $scope.todos.length;

            $scope.delete = function (index) {
                $scope.todos.splice(index, 1);
                $scope.remaining = $scope.remaining - 1;
            };

            $scope.addTodo = function(){
               if ($scope.newTodo) {
                   $scope.todos.push({name : $scope.newTodo, completed : false});
                   $scope.newTodo = '';
               } 
            };

        }]);

})();
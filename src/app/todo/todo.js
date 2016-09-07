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

        }]);

})();
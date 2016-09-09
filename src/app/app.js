(function () {
  'use strict';

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });

  angular.module('app', [
    'ui.router',
    'todo',
    'common.directives.ngBlur'
  ])


    .config(['$logProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', function ($logProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
      $logProvider.debugEnabled(true);
      $urlRouterProvider.otherwise('/todo');
      //$locationProvider.html5Mode(true);
    }])

    .controller('MainCtrl', ['$scope', function ($scope) {
      $scope.$on('$stateChangeSuccess',function(event, toState){
        if(angular.isDefined(toState.data.pageTitle)){
          $scope.pageTitle = toState.data.pageTitle + ' | TodoMVC';
        }
      });

    }])

    .run(['$log', function ($log) {
      $log.debug('App is running!');
    }])

    .value('version', '1.0.0');
})();
(function () {
    'use strict';

    angular.module('common.directives.ngBlur', [])
        .directive('ngBlur', function () {
            return {
                restrict: 'A',
                replace: false,
                link: function (scope, elem, attrs) {
                    elem.bind('blur', function () {
                        scope.$apply(attrs.ngBlur);
                    });
                }
            };

        });


})();
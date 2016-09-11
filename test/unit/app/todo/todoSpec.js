describe('app.todo module', function () {

    /**
     * dependencies tests
     */
    describe('dependencies', function () {


        var module, deps;

        var hasModule = function (m) {
            return deps.indexOf(m) >= 0;
        };

        beforeEach(function () {
            module = angular.module('app.todo');
            deps = module.value('app.todo').requires;
        });

        it('should be registered', function () {
            expect(module).not.toEqual(null);
        });

        it('should have ui.router as a dependency', function () {
            expect(hasModule('ui.router')).toEqual(true);
        });

    });

});
